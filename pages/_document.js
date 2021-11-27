import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";


class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line react/display-name
          enhanceApp: (App) => (props) =>
            (
              <StyleSheetManager sheet={sheet.instance}>
                <App {...props} />
              </StyleSheetManager>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      const {
        query: { uriSegments },
      } = ctx;
      const { locale } = 'en-US';
      return {
        ...initialProps,
        lang: locale,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang={this.props.lang} dir="ltr">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
