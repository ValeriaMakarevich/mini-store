import type { SliderProps } from "./types/types";
import SliderArrow from "./SliderArrow";
import SliderDots from "./SliderDots";

export default function Slider({
  children,
  arrowSize = "md",
  showArrows = true,
  showDots = true,
  className = "",
}: SliderProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden">{children}</div>

      {showArrows && (
        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between">
          <SliderArrow arrowSize={arrowSize} />
        </div>
      )}

      {showDots && (
        <div className="mt-4">
          <SliderDots />
        </div>
      )}
    </div>
  );
}
