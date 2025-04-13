import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { Children, forwardRef } from "react";

export const iconButtonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center rounded-full border border-transparent \
  transition-[background-color,color,border-color] disabled:opacity-50\
  [&_svg]:pointer-events-none [&_svg]:shrink-0 \
  ring-ring/10 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 \
  aria-invalid:focus-visible:ring-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive hover:bg-destructive/90 text-white",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        white: "bg-white text-black hover:bg-gray-100 hover:border-gray-100",
      },
      size: {
        md: "size-10 [&_svg]:size-4",
        sm: "size-8 [&_svg]:size-4",
        xs: "size-6 [&_svg]:size-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export type IconButtonProps = Omit<React.ComponentProps<"button">, "color"> &
  VariantProps<typeof iconButtonVariants> & {
    asChild?: boolean;
    children: React.ReactNode;
  } & (
    | { "aria-label": string; "aria-labelledby"?: undefined }
    | { "aria-label"?: undefined; "aria-labelledby": string }
  );

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ asChild, variant, size, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const Button = (
      <Comp
        data-slot="button"
        className={cn(iconButtonVariants({ variant, size, className }))}
        {...props}
        ref={ref}>
        {Children.only(children)}
      </Comp>
    );

    return Button;
  },
);

IconButton.displayName = "IconButton";
