import type { CSSProperties } from 'react'

/** Typed helper for inline CSS custom properties, e.g. style={vars({ '--d': '80ms' })} */
export const vars = (v: Record<`--${string}`, string | number>) => v as CSSProperties
