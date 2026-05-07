// Выносим ВСЕ общие типы сюда
export type ArrowSize = "sm" | "md" | "lg";

export interface ChevronProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  sizeArrow?: ArrowSize;
  className?: string; 
}

export interface SliderArrowProps {
  arrowSize?: ArrowSize;
  onPrev?: () => void;
  onNext?: () => void;
}

export interface SliderProps {
  children: React.ReactNode[];
  arrowSize?: ArrowSize;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string; 
}
