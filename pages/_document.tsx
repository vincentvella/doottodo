// Based on https://github.com/zeit/next.js/tree/canary/examples/with-react-native-web
// and https://github.com/expo/expo-cli/blob/main/packages/webpack-config/web-default/index.html
import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import * as React from 'react';
import { AppRegistry } from 'react-native';

export const style = `
/**
 * Building on the RNWeb reset:
 * https://github.com/necolas/react-native-web/blob/master/packages/react-native-web/src/exports/StyleSheet/initialRules.js
 */
html, body, #__next {
  width: 100%;
  /* To smooth any scrolling behavior */
  -webkit-overflow-scrolling: touch;
  margin: 0px;
  padding: 0px;
  /* Allows content to fill the viewport and go beyond the bottom */
  min-height: 100%;
}
#__next {
  flex-shrink: 0;
  flex-basis: auto;
  flex-direction: column;
  flex-grow: 1;
  display: flex;
  flex: 1;
}
html {
  scroll-behavior: smooth;
  /* Prevent text size change on orientation change https://gist.github.com/tfausak/2222823#file-ios-8-web-app-html-L138 */
  -webkit-text-size-adjust: 100%;
  height: 100%;
}
body {
  display: flex;
  /* Allows you to scroll below the viewport; default value is visible */
  overflow-y: auto;
  overscroll-behavior-y: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-overflow-style: scrollbar;
}
input:focus, textarea:focus, select:focus{
  outline: none;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
}
`;

export async function getInitialProps({ renderPage }: DocumentContext) {
  AppRegistry.registerComponent('Main', () => Main);
  // @ts-expect-error
  const { getStyleElement } = AppRegistry.getApplication('Main');
  const page = renderPage();
  const styles = [<style dangerouslySetInnerHTML={{ __html: style }} />, getStyleElement()];
  return { ...page, styles: React.Children.toArray(styles) };
}

export class Document extends NextDocument {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="preload" href="/fonts/Metropolis-Black.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Metropolis-BlackItalic.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Metropolis-Bold.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Metropolis-BoldItalic.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Metropolis-ExtraBold.otf" as="font" crossOrigin="" />
          <link
            rel="preload"
            href="/fonts/Metropolis-ExtraBoldItalic.otf"
            as="font"
            crossOrigin=""
          />
          <link rel="preload" href="/fonts/Metropolis-ExtraLight.otf" as="font" crossOrigin="" />
          <link
            rel="preload"
            href="/fonts/Metropolis-ExtraLightItalic.otf"
            as="font"
            crossOrigin=""
          />
          <link rel="preload" href="/fonts/Metropolis-Light.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Metropolis-LightItalic.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Metropolis-Medium.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Metropolis-MediumItalic.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Metropolis-Regular.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Metropolis-RegularItalic.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Metropolis-SemiBold.otf" as="font" crossOrigin="" />
          <link
            rel="preload"
            href="/fonts/Metropolis-SemiBoldItalic.otf"
            as="font"
            crossOrigin=""
          />
          <link rel="preload" href="/fonts/Metropolis-Thin.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Metropolis-ThinItalic.otf" as="font" crossOrigin="" />
        </Head>
        <body>
          <script src="noflash.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

Document.getInitialProps = getInitialProps;

export default Document;
