import * as React from "react";

import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  auto?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, leftSlot, rightSlot, type, auto, ...props }, ref) => {
    return (
      <div
        className={cn("relative flex items-center", auto ? "w-full" : "w-fit")}>
        {leftSlot && (
          <div className="absolute left-3 top-0 bottom-0 flex items-center pointer-events-none text-gray-500">
            {leftSlot}
          </div>
        )}
        <input
          type={type}
          data-slot="input"
          ref={ref}
          className={cn(auto && "w-full", className)}
          {...props}
        />
        {rightSlot && (
          <div className="absolute right-3 top-0 bottom-0 flex items-center text-gray-500">
            {rightSlot}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
