/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import {GatsbyBrowser} from "gatsby";
import ThemeWrapper from "./muiJoyTheme";
import Layout from "@templates/layout/layout";
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

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({element}) => {
  //themeAutoSwitch()
  return (
    <Layout>
      {element}
    </Layout>
  );
};
