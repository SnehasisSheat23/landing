'use client'
import { Hero } from "@/components/ui/animated-hero"
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu"
import { useState } from "react"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects"
import { Connect } from "@/components/ui/call_to_action"
import { Footerdemo } from "@/components/ui/footer-section"

const technologies = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg'
  },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
];

export default function HeroDemo() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen">
      {/* Navbar Section */}
      <div className="fixed top-0 inset-x-0 max-w-2xl mx-auto z-50 p-4 md:p-0 md:top-10">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/mobile-dev">Mobile Development</HoveredLink>
              <HoveredLink href="/design">UI/UX Design</HoveredLink>
              <HoveredLink href="/consulting">Consulting</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/contact">Contact Us</HoveredLink>
              <HoveredLink href="/support">Support</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>

      {/* Hero Section */}
      <Hero />
    
    

    {/* Technologies Section */}
    <div className="py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center tracking-tight dark:text-white">
            Technologies We Work With
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-center max-w-2xl">
            We leverage cutting-edge technologies to build modern, scalable, and efficient solutions
          </p>
          <Button variant="secondary" size="sm" className="gap-2">
            Modern Tech Stack <MoveRight className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="relative">
          {/* Scroll Shadows */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Slider */}
          <InfiniteSlider 
            gap={42} 
            reverse 
            className="max-w-7xl mx-auto py-8"
            duration={30}
            durationOnHover={60}
          >
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 px-4"
              >
                <Image 
                  src={tech.icon}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="h-[40px] sm:h-[60px] w-auto hover:scale-110 transition-transform dark:invert-[.85]"
                />
                <span className="text-sm text-muted-foreground hidden sm:block">
                  {tech.name}
                </span>
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </div>
    
        <FeaturesSectionWithHoverEffects />
        <Connect />
        <div className="block">
      <Footerdemo />
    </div>
 
    </div>
  );
}

