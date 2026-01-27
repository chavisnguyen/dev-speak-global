import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_60px_-15px_hsl(var(--primary)/0.4)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent hover:bg-secondary hover:text-secondary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground font-bold shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_60px_-15px_hsl(var(--primary)/0.4)] hover:scale-105 active:scale-100",
        heroOutline: "border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary",
        course: "bg-secondary text-foreground border border-border hover:border-primary/50 hover:bg-secondary/80",
        courseFoundation: "bg-[hsl(var(--course-foundation)/0.1)] text-[hsl(var(--course-foundation))] border border-[hsl(var(--course-foundation)/0.3)] hover:bg-[hsl(var(--course-foundation)/0.2)] hover:border-[hsl(var(--course-foundation)/0.5)]",
        courseCareer: "bg-[hsl(var(--course-career)/0.1)] text-[hsl(var(--course-career))] border border-[hsl(var(--course-career)/0.3)] hover:bg-[hsl(var(--course-career)/0.2)] hover:border-[hsl(var(--course-career)/0.5)]",
        courseMastery: "bg-[hsl(var(--course-mastery)/0.1)] text-[hsl(var(--course-mastery))] border border-[hsl(var(--course-mastery)/0.3)] hover:bg-[hsl(var(--course-mastery)/0.2)] hover:border-[hsl(var(--course-mastery)/0.5)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
