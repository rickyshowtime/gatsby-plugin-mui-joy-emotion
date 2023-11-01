const LIGHT = "light"
const DARK = "dark"
const SYSTEM = "system"

const ThemeEnum = {
  light: LIGHT,
  dark: DARK,
  system: SYSTEM,
}

export type ThemeType = keyof typeof ThemeEnum;

function themeAutoSwitch(): ThemeType{
  let colorScheme: ThemeType = SYSTEM
  const currentDateTime = new Date();
  const evening = new Date()
  evening.setHours(14, 0, 0)
  if (currentDateTime > evening) {
    colorScheme = DARK
  }
  if (typeof window !== "undefined") {
    const cachedColorScheme = window.localStorage.getItem("theme")
    if (!cachedColorScheme) {
      window.localStorage.setItem("theme", colorScheme)
    } else {
      const cachedTheme: ThemeType = cachedColorScheme === LIGHT ? LIGHT : DARK
      colorScheme = cachedTheme
    }
    window.document.documentElement.setAttribute("data-mui-color-scheme", colorScheme);
  }
  return colorScheme
}

export default themeAutoSwitch;
