import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border-border",
        neon: "border-transparent bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_10px_hsl(var(--neon-pink)/0.4)]",
        cyan: "border-transparent bg-secondary text-secondary-foreground shadow-[0_0_10px_hsl(var(--neon-cyan)/0.4)]",
        new: "border-transparent bg-neon-cyan text-background font-bold animate-pulse",
        sale: "border-transparent bg-primary text-primary-foreground font-bold",
        hot: "border-transparent bg-gradient-to-r from-orange-500 to-red-500 text-primary-foreground font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
