/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import {GatsbyBrowser} from "gatsby";
import ThemeWrapper from "./muiJoyTheme";
import Layout from "@templates/layout/layout";
import "./styles/background.css"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => {
  //themeAutoSwitch()
  return (
      <ThemeWrapper>
        <Layout>
          {element}
        </Layout>
      </ThemeWrapper>
  );
};

export const shouldUpdateScroll: GatsbyBrowser["shouldUpdateScroll"] = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const { pathname } = location
  // list of routes for the scroll-to-top-hook
  const scrollToTopRoutes = [`/`]
  console.log(location)
  // if the new route is part of the list above, scroll to top (0, 0)
  if (scrollToTopRoutes.indexOf(pathname) !== -1) {
    console.log("got it")
    setTimeout(() =>{
      window.scrollTo({top:0, left:0, behavior:"smooth"})
    },10)
  }

  return false
}
