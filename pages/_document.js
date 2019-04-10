import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="id">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="icon"
            type="image/x-icon"
            href="data:image/png;base64,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"
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;