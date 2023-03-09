/*
import {
  CssVarsThemeOptions,
  Overlays,
  PaletteAlert,
  PaletteAppBar,
  PaletteAvatar,
  PaletteChip,
  PaletteColor,
  PaletteColorChannel,
  PaletteFilledInput,
  PaletteLinearProgress,
  PaletteSkeleton,
  PaletteSlider,
  PaletteSnackbarContent,
  PaletteSpeedDialAction,
  PaletteStepConnector,
  PaletteStepContent,
  PaletteSwitch,
  PaletteTableCell,
  PaletteTooltip,
  Shadows,
  TypeAction,
  TypeText,
  ZIndex,
} from '@mui/joy/styles';
import {Theme as JoyTheme} from '@mui/joy/styles';
import {CommonColors, TypeBackground} from "@mui/material";

type JoyComponents = CssVarsThemeOptions['components'];

// extends Joy theme to include tokens from Material UI
declare module '@mui/joy/styles' {
  interface Palette {
    secondary: PaletteColorChannel;
    error: PaletteColorChannel;
    dividerChannel: string;
    action: TypeAction;
    Alert: PaletteAlert;
    AppBar: PaletteAppBar;
    Avatar: PaletteAvatar;
    Chip: PaletteChip;
    FilledInput: PaletteFilledInput;
    LinearProgress: PaletteLinearProgress;
    Skeleton: PaletteSkeleton;
    Slider: PaletteSlider;
    SnackbarContent: PaletteSnackbarContent;
    SpeedDialAction: PaletteSpeedDialAction;
    StepConnector: PaletteStepConnector;
    StepContent: PaletteStepContent;
    Switch: PaletteSwitch;
    TableCell: PaletteTableCell;
    Tooltip: PaletteTooltip;
  }

  interface PalettePrimary extends PaletteColor {
  }

  interface PaletteInfo extends PaletteColor {
  }

  interface PaletteSuccess extends PaletteColor {
  }

  interface PaletteWarning extends PaletteColor {
  }

  interface PaletteCommon extends CommonColors {
  }

  interface PaletteText extends TypeText {
  }

  interface PaletteBackground extends TypeBackground {
  }

  interface ThemeVars {
    // attach to Joy UI `theme.vars`
    shadows: Shadows;
    overlays: Overlays;
    zIndex: ZIndex;
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    // put everything back to Material UI `theme.vars`
    vars: JoyTheme['vars'];
  }
}
*/