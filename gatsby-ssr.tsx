import * as React from 'react';
import {GatsbySSR} from "gatsby";
import ThemeWrapper from "./muiJoyTheme";
import Layout from "@templates/layout/layout";
import {getInitColorSchemeScript} from "@mui/material";

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({element}) => {
  return (
    <ThemeWrapper>
      {element}
    </ThemeWrapper>
  );
};
export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({element}) => {
  return (
    <Layout>
      {element}
    </Layout>
  );
};

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setPreBodyComponents,
  setPostBodyComponents,
  setHtmlAttributes,
  setBodyAttributes
}) => {
  setHtmlAttributes({lang: "fr-CH", id: "mode-toggle"})
  setPreBodyComponents([
    getInitColorSchemeScript({
      defaultMode: 'system',
      modeStorageKey: 'theme',
      attribute: "data-mui-color-scheme"
    })
  ]);
  setPostBodyComponents([
    <div key="bg" className="bg-blur">
      <div key="shape-1" id="shape-1" className="shape-blur"/>
      <div key="shape-2" id="shape-2" className="shape-blur"/>
      <div key="shape-3" id="shape-3" className="shape-blur"/>
    </div>
  ])
}

/*
// Inject MUI styles first to match with the prepend: true configuration.
export const onPreRenderHTML: GatsbySSR["onPreRenderHTML"] = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  headComponents.sort((x, y) => {
    // @ts-ignore
    if (x?.key === 'emotion-css-global' || x?.key === 'emotion-css') {
      return -1;
    }
    // @ts-ignore
    if (y?.key === 'style') {
      return 1;
    }
    return 0;
  });
  replaceHeadComponents(headComponents);
};

export const replaceRenderer: GatsbySSR["replaceRenderer"] = ({ bodyComponent, setHeadComponents, replaceBodyHTMLString }) => {
  const cache = getEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const emotionStyles = extractCriticalToChunks(
    renderToString(<CacheProvider value={cache}>{bodyComponent}</CacheProvider>),
  );

  setHeadComponents(
    emotionStyles.styles.map((style: { key: any; ids: any[]; css: any; }) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={`emotion-${style.key}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    )),
  );

  // render the result from `extractCritical`
  replaceBodyHTMLString(emotionStyles.html);
};
*/
