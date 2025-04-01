import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Built for Growth",
      description:
        "Designed for developers, businesses, and visionaries who want to scale fast.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Seamless User Experience",
      description:
        "Intuitive, efficient, and built for productivity—software that just works.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Transparent & Flexible Pricing",
      description:
        "Fair pricing with no hidden fees. Pay for what you need, nothing more.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Reliability You Can Trust",
      description: "High-performance infrastructure with near-zero downtime.",
      icon: <IconCloud />,
    },
    {
      title: "Scalable & Multi-Tenant",
      description: "Easily expand as you grow—without unnecessary costs.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 AI-Driven Support",
      description:
        "Always available to assist, whether it’s us or our AI agents.",
      icon: <IconHelp />,
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "Not happy? We’ll make it right—your success is our priority.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Always Innovating",
      description: "We build, improve, and push the limits—so you don’t have to.",
      icon: <IconHeart />,
    },
    
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-6 lg:py-10 max-w-7xl mx-auto divide-x divide-y divide-neutral-200 dark:divide-neutral-800 lg:divide-x-0 lg:divide-y-0">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-6 lg:py-10 relative group/feature",
        "lg:border-r lg:last:border-r-0 lg:border-neutral-200 dark:lg:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:lg:border-neutral-800",
        index < 4 && "lg:border-b dark:lg:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-3 lg:mb-4 relative z-10 px-4 lg:px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-base lg:text-lg font-bold mb-2 relative z-10 px-4 lg:px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-xs lg:text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-4 lg:px-10">
        {description}
      </p>
    </div>
  );
};
