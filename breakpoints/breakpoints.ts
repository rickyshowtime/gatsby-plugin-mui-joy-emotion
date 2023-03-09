export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
}

export const mediaQueries = {
  mobile: `(max-width:  ${breakpoints.sm}px)`,
  tablet: `(min-width: ${breakpoints.sm}px) and (max-width:  ${breakpoints.md}px)`,
  desktop: `(min-width: ${breakpoints.md}px)`,
  smallDesktop: `(min-width: ${breakpoints.md}px) and (max-width:  ${breakpoints.lg}px)`,
  wideDesktop: `(min-width: ${breakpoints.lg}px)`
}
export const vanillaMediaQueries = {
  mobile: `@media (max-width:  ${breakpoints.sm}px)`,
  tablet: `@media (min-width: ${breakpoints.sm}px) and (max-width:  ${breakpoints.md}px)`,
  desktop: `@media (min-width: ${breakpoints.md}px)`,
  smallDesktop: `@media (min-width: ${breakpoints.md}px) and (max-width:  ${breakpoints.lg}px)`,
  wideDesktop: `@media (min-width: ${breakpoints.lg}px)`
}

