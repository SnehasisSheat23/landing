'use client'
import React from "react";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["empower", "innovate", "scale"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full relative">
      {/* Background Pattern */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "absolute inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      
      {/* Existing Content */}
      <div className="container mx-auto relative z-10 px-4 sm:px-6"> {/* Added padding */}
        <div className="flex gap-6 sm:gap-8 py-12 sm:py-20 lg:py-40 items-center justify-center flex-col"> {/* Adjusted gap and padding */}
          <div>
            <Button variant="secondary" size="sm" className="gap-2 sm:gap-4 text-sm sm:text-base"> {/* Adjusted button sizing */}
              Read our launch article <MoveRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </div>
          <div className="flex gap-3 sm:gap-4 flex-col">
            <h1 className="text-3xl sm:text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular"> {/* Adjusted text sizes */}
              <span className="text-spektr-cyan-50">Building software that&apos;s</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center px-4 sm:px-0"> {/* Adjusted text size and added padding */}
              Build software that transforms ideas into powerful solutions. We design, develop, and scale applications that drive innovation and efficiency for businesses and users alike.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 sm:px-0"> {/* Made buttons stack on mobile */}
            <Button size="lg" className="gap-2 sm:gap-4 w-full sm:w-auto" variant="outline">
              Jump on a call <PhoneCall className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
            <Button size="lg" className="gap-2 sm:gap-4 w-full sm:w-auto">
              Sign up here <MoveRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
