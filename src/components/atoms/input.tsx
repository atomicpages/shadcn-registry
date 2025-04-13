import { forwardRef, useId } from "react";
import { Input as BaseInput } from "@/components/ui/input";
import { AriaLabelProps } from "@/lib/aria";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

export type InputProps = AriaLabelProps<
  React.ComponentProps<typeof BaseInput>
> & {
  error?: boolean;
  help?: React.ReactNode;
  auto?: boolean;
  outerClassName?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  labelClassName?: string;
};

export const inputVariants =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base \
          ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium \
          file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none \
          focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 \
          disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      error,
      auto,
      outerClassName,
      labelClassName,
      className,
      required,
      rightIcon,
      leftIcon,
      help,
      ...rest
    },
    ref,
  ) => {
    const id = useId();
    const helpId = useId();

    return (
      <div
        className={cn(
          "mb-6 last-of-type:mb-0 w-64",
          auto && "w-full",
          outerClassName,
        )}>
        {label && (
          <Label
            className={cn("block mb-1 ml-[2px]", labelClassName)}
            htmlFor={rest.id ?? id}
            required={required}>
            {label}
          </Label>
        )}
        <BaseInput
          ref={ref}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          id={rest.id ?? id}
          aria-invalid={Boolean(error)}
          aria-errormessage={error}
          aria-required={required}
          rightSlot={rightIcon}
          leftSlot={leftIcon}
          auto={auto}
          className={cn(
            inputVariants,
            className,
            rightIcon && "pr-10",
            leftIcon && "pl-10",
          )}
          {...rest}
        />
        {error && (
          <span
            id={helpId}
            className={cn("text-xs ml-[2px] mt-1 text-red-500")}>
            {help}
          </span>
        )}
      </div>
    );
  },
);
