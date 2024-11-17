import { forwardRef, useId } from "react";
import { Input as BaseInput } from "@/components/ui/input";
import { AriaLabelProps } from "@/typings/aria";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";

export type InputProps = AriaLabelProps<
  React.ComponentProps<typeof BaseInput>
> & {
  error?: boolean;
  help?: React.ReactNode;
  auto?: boolean;
  outerClassName?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      error,
      help,
      auto,
      outerClassName,
      required,
      className,
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
          <Label className="block mb-2" htmlFor={rest.id ?? id}>
            {label}
            {required ? <span className="text-red-500">*</span> : null}
          </Label>
        )}
        <BaseInput
          ref={ref}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          id={rest.id ?? id}
          className={cn(error && "border-red-500 text-red-500", className)}
          {...rest}
        />
        {help && (
          <span id={helpId} className={cn("text-xs", error && "text-red-500")}>
            {help}
          </span>
        )}
      </div>
    );
  },
);
