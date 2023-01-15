import {
  // @ts-ignore
  Experimental_CssVarsProvider as CssVarsProvider,
  // @ts-ignore
  experimental_extendTheme as extendMuiTheme,
} from '@mui/material/styles';
import { extendTheme as extendJoyTheme } from '@mui/joy/styles';
import React from 'react';
import {Button, colors, createTheme, GlobalStyles, useColorScheme} from "@mui/material";
import { deepmerge } from "@mui/utils"
import kookoGreen from "./colors/kookoGreen";
import kookoGreenLight from "./colors/kookoGreenLight";
import kookoGreenDark from "./colors/kookoGreenDark";

const muiTheme = extendMuiTheme({
  // This is required to point to `var(--joy-*)` because we are using
  // `CssVarsProvider` from Joy UI.
  cssVarPrefix: 'mui',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: kookoGreen[500],
          contrastText: kookoGreenDark[900]
        },
        secondary: {
          main: kookoGreenDark[800],
          contrastText: kookoGreenLight[300]
        },
        common: {
          white: '#FFF',
          black: '#09090D',
        },
        divider: colors.grey[200],
        text: {
          primary: colors.grey[800],
          secondary: colors.grey[600],
        },
        background: {
          default: kookoGreenLight[50],
        },
        card: {
          main: "rgba(255,255,255, .6)",
          contrastText: kookoGreenLight[50],
          secondary: "rgba(0,0,0, .4)",
        }
      },
    },
    dark: {
      palette: {
        primary: {
          main: kookoGreen[500],
          contrastText: kookoGreenLight[100]
        },
        secondary: {
          main: kookoGreen[200],
          contrastText: kookoGreenDark[800]
        },
        common: {
          white: '#FFF',
          black: '#09090D',
        },
        divider: colors.grey[800],
        text: {
          primary: colors.grey[100],
          secondary: colors.grey[300],
        },
        background: {
          default: kookoGreenDark.background,
        },
        card: {
          main: "rgba(25,45,38, .4)",
          contrastText: kookoGreenDark[50],
          secondary: "rgba(0,0,0, .4)"
        }
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    h1: {
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h3: {
      '@media (max-width:600px)': {
        fontSize: '1.2rem',
      },
    }
  },
  components: {
    MuiButton: {
      styleOverrides : {
        root: {
          borderRadius: 100,
          lineHeight: 1.5,
          padding: "8px 16px",
        },
        containedPrimary: {
          color: kookoGreenLight[50]
        },
      }
    }
  }
});
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
    display: '"Roboto","Helvetica","Arial",sans-serif',
    body: '"Roboto","Helvetica","Arial",sans-serif',
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

const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

const ThemeWrapper: React.FunctionComponent<{ children: any }> = ({children}) => {

  const [node, setNode] = React.useState<HTMLElement | null>(null);
  useEnhancedEffect(() => {
    setNode(document.getElementById('mode-toggle'));
  }, []);

  return (
    <CssVarsProvider
      theme={theme}
      attribute="data-mui-color-scheme"
      colorSchemeNode={node || null}
      colorSchemeSelector="#mode-toggle"
      modeStorageKey="theme"
    >
      <GlobalStyles styles={{body: {background:'var(--mui-palette-background-default)', margin:0, transition: node ? "background .4s cubic-bezier(0.4, 0, 0.2, 1)" : "none"}}}/>
      {children}
    </CssVarsProvider>
  );
}

export default ThemeWrapper;