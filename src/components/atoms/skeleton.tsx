import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

type SkeletonTableProps = {
  rows: number;
  cols: number;
  className?: string;
};

export const SkeletonTable: React.FC<SkeletonTableProps> = ({ rows, cols, className }) => {
  return (
    <table className={cn("w-full h-64", className)}>
      <tbody>
        {[...Array(rows)].map((_, i) => (
          <tr key={i}>
            {[...Array(cols)].map((_, j) => (
              <td key={j}>
                <Skeleton className="w-full h-full" />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const SkeletonCards = () => {

}
