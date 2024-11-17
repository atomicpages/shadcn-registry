import { ComponentPropsWithoutRef, forwardRef } from "react";

import * as BaseAvatar from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export const Avatar = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<(typeof BaseAvatar)["Avatar"]> & {
    alert?: boolean;
    alertClassName?: string;
  }
>(({ alert, alertClassName, children, ...rest }, ref) => {
  return (
    <div className="relative w-min">
      <BaseAvatar.Avatar ref={ref} {...rest}>
        {children}
      </BaseAvatar.Avatar>
      {alert && (
        <div
          className={cn(
            "absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white",
            alertClassName,
          )}
        />
      )}
    </div>
  );
});

Avatar.displayName = BaseAvatar.Avatar.displayName;

export const AvatarImage = BaseAvatar.AvatarImage;
export const AvatarFallback = BaseAvatar.AvatarFallback;
