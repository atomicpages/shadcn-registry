import { ComponentProps, forwardRef } from "react";

import { LoaderCircle } from "lucide-react";

import { Button as BaseButton, buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";

export type ButtonProps = ComponentProps<typeof BaseButton> & {
  loading?: boolean;
  auto?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      loading,
      disabled,
      className,
      auto,
      leftIcon,
      rightIcon,
      ...rest
    },
    ref,
  ) => {
    return (
      <BaseButton
        className={cn(
          "mr-2 last:mr-0",
          (disabled || loading) &&
            "disabled:cursor-not-allowed pointer-events-none",
          auto && "w-full",
          className,
        )}
        disabled={disabled}
        ref={ref}
        {...rest}>
        {leftIcon}
        {children}
        {loading ? <LoaderCircle className="animate-spin" /> : null}
        {!loading && rightIcon ? rightIcon : null}
      </BaseButton>
    );
  },
);

Button.displayName = "Button";
