export const arrowSizes = {
  sm: { btn: 'w-8 h-8', icon: 'w-4 h-4' },
  md: { btn: 'w-10 h-10', icon: 'w-5 h-5' },
  lg: { btn: 'w-12 h-12', icon: 'w-6 h-6' }
} as const;

export type ArrowSize = keyof typeof arrowSizes; 