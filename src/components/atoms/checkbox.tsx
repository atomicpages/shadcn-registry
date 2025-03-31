import { forwardRef, useId } from "react";
import { Checkbox as BaseCheckbox } from "@/components/ui/checkbox";
import type { AriaBaseProps } from "@/lib/aria";
import { Label } from "@/components/ui/label";

type CheckboxProps = Omit<
  React.ComponentPropsWithoutRef<typeof BaseCheckbox>,
  "aria-label" | "aria-labelledby"
> &
  AriaBaseProps;

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      label,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      ...rest
    },
    ref,
  ) => {
    const id = useId();

    return (
      <div className="flex items-center space-x-2">
        <BaseCheckbox
          id={rest.id ?? id}
          ref={ref}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          {...rest}
        />
        <Label
          htmlFor={rest.id ?? id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
          {label}
        </Label>
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
