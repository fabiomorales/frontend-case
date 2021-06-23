import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Main,
  Html,
  NextScript
} from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
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

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <meta
            data-react-helmet="true"
            property="og:title"
            content="Cora - Conta Digital feita para empreendedores e donos de negócio"
          />
          <link href="/fonts/fonts.css" rel="stylesheet" />
          <link
            href="https://www.cora.com.br/favicon-32x32.png?v=7d4df7f2b6f8f46b24bcd204ea0466a6"
            rel="icon"
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
