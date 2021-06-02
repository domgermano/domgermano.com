import * as React from "react";

import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from "next/document";
import { ServerStyleSheet } from "styled-components";

/**
 * Custom document used to augment the application <html> and <body> tags.
 *
 *  1. Injects server side rendered styled-components in a <style> tag in the
 *     <head>
 *
 * Example code here:
 * https://github.com/zeit/next.js/blob/canary/examples/with-styled-components/pages/_document.js
 */

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
