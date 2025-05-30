"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link, { LinkProps } from "next/link";
import Image from "next/image";
import { Menu as MenuIcon, X } from "lucide-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactElement<{ onClick?: () => void }>[];
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-black border dark:border-white/[0.2] shadow-input"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 dark:text-white" />
        ) : (
          <MenuIcon className="w-6 h-6 dark:text-white" />
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden bg-white dark:bg-black"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
              {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                  return React.cloneElement(child, {
                    onClick: () => setIsMobileMenuOpen(false),
                  });
                }
                return child;
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Menu */}
      <nav
        onMouseLeave={() => setActive(null)}
        className="hidden md:flex relative rounded-full border dark:bg-black dark:border-white/[0.2] bg-white shadow-input justify-center space-x-4 px-8 py-6"
      >
        {children}
      </nav>
    </>
  );
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  onClick,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div 
      onMouseEnter={() => setActive(item)} 
      onClick={onClick}
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="md:absolute md:top-[calc(100%_+_1.2rem)] md:left-1/2 md:transform md:-translate-x-1/2 pt-4"
        >
          {active === item && (
            <motion.div
              transition={transition}
              layoutId="active"
              className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
            >
              <motion.div
                layout
                className="w-max h-full p-4"
              >
                {children}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

interface HoveredLinkProps extends Omit<LinkProps, 'className'> {
  children: React.ReactNode;
  className?: string;
}

export const HoveredLink = ({ children, className, ...rest }: HoveredLinkProps) => {
  return (
    <Link
      {...rest}
      className={`text-neutral-700 dark:text-neutral-200 hover:text-black ${className || ''}`}
    >
      {children}
    </Link>
  );
};
