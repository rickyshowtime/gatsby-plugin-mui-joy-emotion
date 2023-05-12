import React from 'react';
import {
  // @ts-ignore
  Experimental_CssVarsProvider as CssVarsProvider,
  // @ts-ignore
  experimental_extendTheme as extendMuiTheme,
} from '@mui/material/styles';
import {colors, GlobalStyles} from "@mui/material";
import kookoGreen from "./colors/kookoGreen";
import kookoGreenLight from "./colors/kookoGreenLight";
import kookoGreenDark from "./colors/kookoGreenDark";
import {breakpoints, vanillaMediaQueries} from "./breakpoints/breakpoints";
let muiLightColors = {}
let muiDarkColors = {}
for (const key in colors) {
  // skip loop if the property is from prototype
  //if (!colors.hasOwnProperty(key)) continue;

  // @ts-ignore
  const obj = colors[key];
  for (const prop in obj) {
    // skip loop if the property is from prototype
    if (!obj.hasOwnProperty(prop)) continue;
    muiLightColors = {
      ...muiLightColors,
      [key]: {
        bg: obj["100"],
        text: obj["900"]
      }
    }
    muiDarkColors = {
      ...muiDarkColors,
      [key]: {
        bg: obj["800"],
        text: obj["50"]
      }
    }
  }
}
//console.log(muiLightColors)
//console.log(muiDarkColors)

const muiTheme = extendMuiTheme({
  // This is required to point to `var(--joy-*)` because we are using
  // `CssVarsProvider` from Joy UI.
  cssVarPrefix: 'mui',
  colorSchemes: {
    light: {
      palette: {
        colors: {
          ...muiLightColors
        },
        primary: {
          main: kookoGreen[500],
          contrastText: kookoGreenDark[900]
        },
        secondary: {
          main: kookoGreen[800],
          contrastText: kookoGreenDark[50]
        },
        tertiary: {
          main: kookoGreenDark[100],
          contrastText: kookoGreenDark[700],
          semiTransparent: `${kookoGreenDark[100]}d9`
        },
        highContrast: {
          main: kookoGreenDark[800],
          contrastText: kookoGreenLight[100],
        },
        common: {
          white: '#FFF',
          black: '#09090D',
        },
        divider: colors.grey[200],
        text: {
          primary: colors.grey[800],
          secondary: colors.grey[700],
        },
        background: {
          default: kookoGreenLight.background,
        },
        scrollbar: {
          track: `${kookoGreenDark[100]}d9`,
          thumb: `${kookoGreenLight[100]}`,
          hover:`${kookoGreenLight[50]}ec`
        },
        card: {
          main: "rgba(247,255,253, .5)",
          paper: "rgba(247,255,253, .9)",
          contrastText: kookoGreenLight[50],
          secondary: "rgba(0,0,0, .4)",
          outline: kookoGreenLight[100],
        },
        navBg: {
          main: "linear-gradient(180deg, #cde8e1 15%, rgba(205, 232, 225, 0.8) 25%, rgba(205, 232, 225, 0.1) 90%)",
          contrastText: colors.grey[900]
        },
        cardBg: {
          //main: "linear-gradient(0deg, #D6EDE4 10%, rgba(218, 237, 230, 0.98) 25%, rgba(218, 237, 230, 0.85) 45%, rgba(218, 237, 230, 0.53) 60%, rgba(218, 237, 230, 0.06) 75%, rgba(218, 237, 230, 0) 95%)",
          main: "linear-gradient(0deg, #EEF8F4 10%, rgba(238, 248, 244, 0.98) 25%, rgba(238, 248, 244, 0.85) 45%, rgba(238, 248, 244, 0.53) 60%, rgba(238, 248, 244, 0.06) 75%, rgba(238, 248, 244, 0) 95%)",
          contrastText: colors.grey[900]
        },
        bannerBg: {
          main: "linear-gradient(90deg, #cde8e1 70%, rgba(205, 232, 225, 0.95) 75%, rgba(205, 232, 225, 0) 100%)",
          contrastText: colors.grey[900]
        },
        heroBg: {
          main: "linear-gradient(90deg, #cde8e1 35%, rgba(205, 232, 225, 0.7) 65%, rgba(205, 232, 225, 0.1) 75%)",
          contrastText: colors.grey[900]
        },
        bannerMobileBg: {
          main: "linear-gradient(0deg, #cde8e1 25%, rgba(205, 232, 225, 0.8) 70%, rgba(205, 232, 225, 0.4) 100%)",
          contrastText: colors.grey[900]
        },
        bannerMobileBgInverted: {
          main: "linear-gradient(180deg, #cde8e1 25%, rgba(205, 232, 225, 0.8) 70%, rgba(205, 232, 225, 0.4) 100%)",
          contrastText: colors.grey[900]
        },
        bannerBlog: {
          main: "linear-gradient(180deg, #cde8e1 15%, rgba(205, 232, 225, 0.8) 35%, rgba(205, 232, 225, 0.4) 100%)",
          contrastText: colors.grey[900]
        }
      },
    },
    dark: {
      palette: {
        colors: {
          ...muiDarkColors
        },
        primary: {
          main: kookoGreen[500],
          contrastText: kookoGreenLight[100]
        },
        secondary: {
          main: kookoGreenDark[100],
          contrastText: kookoGreenDark[800]
        },
        tertiary: {
          main: kookoGreenDark[400],
          contrastText: kookoGreenDark[50],
          semiTransparent: `${kookoGreenDark[400]}d9`
        },
        highContrast: {
          main: kookoGreenLight[400],
          contrastText: kookoGreenDark[800],
        },
        common: {
          white: '#FFF',
          black: '#09090D',
        },
        divider: colors.grey[800],
        text: {
          primary: colors.grey[100],
          secondary: colors.grey[200],
        },
        background: {
          default: kookoGreenDark.background,
        },
        scrollbar: {
          track: `${kookoGreenDark[400]}d9`,
          thumb: kookoGreenDark[300],
          hover: kookoGreenDark[200]
        },
        card: {
          main: "rgba(5,15,12, .5)",
          paper: "rgba(5,15,12, .9)",
          contrastText: kookoGreenDark[50],
          secondary: "rgba(0,0,0, .4)",
          outline: "rgba(1,16,13,0.9)",
        },
        navBg: {
          main: "linear-gradient(180deg, #1C2D26 15%, rgba(28, 45, 38, 0.8) 25%, rgba(28, 45, 38, 0.1) 90%)",
          contrastText: colors.grey[100]
        },
        cardBg: {
          main: "linear-gradient(0deg, #041610 20%, rgba(4, 22, 16, 0.8) 65%, rgba(4, 22, 16, 0) 100%)",
          contrastText: colors.grey[100]
        },
        bannerBg: {
          main: "linear-gradient(90deg, #1C2D26 70%, rgba(28, 45, 38, 0.95) 75%, rgba(28, 45, 38, 0) 100%)",
          contrastText: colors.grey[100]
        },
        heroBg: {
          main: "linear-gradient(90deg, #1C2D26 35%, rgba(28, 45, 38, 0.7) 65%, rgba(28, 45, 38, 0.1) 75%)",
          contrastText: colors.grey[900]
        },
        bannerMobileBg: {
          main: "linear-gradient(180deg, #1C2D26 25%, rgba(28, 45, 38, 0.8) 70%, rgba(28, 45, 38, 0.4) 100%)",
          contrastText: colors.grey[100]
        },
        bannerMobileBgInverted: {
          main: "linear-gradient(180deg, #1C2D26 25%, rgba(28, 45, 38, 0.8) 70%, rgba(28, 45, 38, 0.4) 100%)",
          contrastText: colors.grey[100]
        },
        bannerBlog: {
          main: "linear-gradient(180deg, #1C2D26 15%, rgba(28, 45, 38, 0.8) 35%, rgba(28, 45, 38, 0.4) 100%)",
          contrastText: colors.grey[100]
        }
      },
    },
  },
  breakpoints: {
    values: {
      ...breakpoints
    },
  },
  typography: {
    fontFamily: [
      'Manrope',
      'Montserrat',
      'Public Sans',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: "Montserrat",
      fontSize: '4rem',
      fontWeight: '500',
      [vanillaMediaQueries.mobile]: {
        fontSize: '2rem',
      },
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: '2.5rem',
      fontWeight: '500',
      [vanillaMediaQueries.mobile]: {
        fontSize: '1.5rem',
      },
    },
    h3: {
      textAlign: "left",
      fontSize: '2rem',
      [vanillaMediaQueries.mobile]: {
        fontSize: '1.2rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      [vanillaMediaQueries.mobile]: {
        fontSize: '1rem',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Manrope",
          letterSpacing: .8,
          borderRadius: 100,
          lineHeight: 1.5,
          padding: "8px 16px",
        },
        containedPrimary: {
          color: kookoGreenLight[50]
        },
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "var(--mui-palette-card-paper)"
        },
      }
    },
  }
});

/*
const joyTheme = extendJoyTheme({
  // This is required to point to `var(--mui-*)` because we are using
  // `CssVarsProvider` from Material UI.
  cssVarPrefix: 'mui',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          ...kookoGreenLight,
          solidColor: 'var(--mui-palette-primary-contrastText)',
          solidBg: 'var(--mui-palette-primary-main)',
          solidHoverBg: 'var(--mui-palette-primary-dark)',
          plainColor: 'var(--mui-palette-primary-main)',
          plainHoverBg:
            'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
          plainActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
          outlinedBorder: 'rgba(var(--mui-palette-primary-mainChannel) / 0.5)',
          outlinedColor: 'var(--mui-palette-primary-main)',
          outlinedHoverBg:
            'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
          outlinedHoverBorder: 'var(--mui-palette-primary-main)',
          outlinedActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
        },
        // Do the same for the `danger`, `info`, `success`, and `warning` palettes,
        divider: 'var(--mui-palette-divider)',
        text: {
          tertiary: 'rgba(0 0 0 / 0.56)',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          ...kookoGreenDark,
          solidColor: 'var(--mui-palette-primary-contrastText)',
          solidBg: 'var(--mui-palette-primary-main)',
          solidHoverBg: 'var(--mui-palette-primary-dark)',
          plainColor: 'var(--mui-palette-primary-main)',
          plainHoverBg:
            'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
          plainActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
          outlinedBorder: 'rgba(var(--mui-palette-primary-mainChannel) / 0.5)',
          outlinedColor: 'var(--mui-palette-primary-main)',
          outlinedHoverBg:
            'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
          outlinedHoverBorder: 'var(--mui-palette-primary-main)',
          outlinedActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
        },
        // Do the same for the `danger`, `info`, `success`, and `warning` palettes,
        divider: 'var(--mui-palette-divider)',
        text: {
          tertiary: 'rgba(0 0 0 / 0.56)',
        },
      },
    },
  },
  fontFamily: {
    display: '"Montserrat"',
    body: '"Manrope"',
  },
  shadow: {
    xs: `var(--mui-shadowRing), ${muiTheme.shadows[1]}`,
    sm: `var(--mui-shadowRing), ${muiTheme.shadows[2]}`,
    md: `var(--mui-shadowRing), ${muiTheme.shadows[4]}`,
    lg: `var(--mui-shadowRing), ${muiTheme.shadows[8]}`,
    xl: `var(--mui-shadowRing), ${muiTheme.shadows[12]}`,
  },
});
const theme = deepmerge(muiTheme, joyTheme);
*/
const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

const ThemeWrapper: React.FunctionComponent<{ children: any }> = ({children}) => {

  const [node, setNode] = React.useState<HTMLElement | null>(null);
  useEnhancedEffect(() => {
    setNode(document.getElementById('mode-toggle'));
  }, []);


  return (
    <CssVarsProvider
      theme={muiTheme}
      attribute="data-mui-color-scheme"
      colorSchemeNode={node || null}
      colorSchemeSelector="#mode-toggle"
      modeStorageKey="theme"
    >
      <GlobalStyles styles={{
        body: {
          fontFamily: "Manrope",
          background: 'var(--mui-palette-background-default)',
          margin: 0,
          transition: node ? "background .4s cubic-bezier(0.4, 0, 0.2, 1)" : "none"
        }
      }}/>
      {children}
    </CssVarsProvider>
  );
}

export default ThemeWrapper;