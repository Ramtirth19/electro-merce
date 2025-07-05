
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1f2937" />
      </Head>
      <body className="bg-white dark:bg-gray-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
