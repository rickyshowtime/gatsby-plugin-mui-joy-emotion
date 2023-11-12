/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import {GatsbyBrowser} from "gatsby";
import ThemeWrapper from "./muiJoyTheme";
import "./styles/html.css"
import "./styles/background.css"
import "./styles/dynamicColors.css"
export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({element}) => {
  //themeAutoSwitch()
  return (
    <ThemeWrapper>
      {element}
    </ThemeWrapper>
  );
};
