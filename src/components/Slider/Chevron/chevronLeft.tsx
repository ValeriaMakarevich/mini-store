import { arrowSizes } from "../types/sizeMap";
import type { ArrowSize } from "../types/types";

interface ChevronProps {
  sizeArrow?: ArrowSize;
  className?: string;
}

export default function ChevronLeft({
  sizeArrow = "md",
  className = "",
}: ChevronProps) {
  return (
    <svg
      className={`${arrowSizes[sizeArrow].icon} ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(215, 221, 223, 1)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18L9 12L15 6" />
    </svg>
  );
}
