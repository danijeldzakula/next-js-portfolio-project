import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { seoStructured } from "@/schema-seo";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoStructured }} />
      </Html>
    );
  }
}

export default MyDocument;