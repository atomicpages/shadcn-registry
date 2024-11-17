import { CircleHelp } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const HelpIcon: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger className="relative cursor-help" asChild>
        <span className="inline-flex align-middle">
          <CircleHelp size={16} />
        </span>
      </TooltipTrigger>
      <TooltipContent className="bg-black/75 text-white border-transparent text-xs max-w-60">
        {children}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
