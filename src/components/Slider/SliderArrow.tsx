import ChevronLeft from "./Chevron/ChevronLeft";
import ChevronRight from "./Chevron/ChevronRight";
import { arrowSizes } from "./types/sizeMap";
import type { ArrowSize } from "./types/types";

interface SliderArrowProps {
  arrowSize?: ArrowSize;
  onPrev?: () => void;
  onNext?: () => void;
  className?: string;
}

export default function SliderArrow({
  arrowSize = "md",
  onPrev,
  onNext,
  className = "",
}: SliderArrowProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <button
        onClick={onPrev}
        className={`${arrowSizes[arrowSize].btn} flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition`}
      >
        <ChevronLeft sizeArrow={arrowSize} />
      </button>

      <button
        onClick={onNext}
        className={`${arrowSizes[arrowSize].btn} flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition`}
      >
        <ChevronRight sizeArrow={arrowSize} />
      </button>
    </div>
  );
}
