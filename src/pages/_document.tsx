import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Your professional portfolio showcasing web development skills and projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0066ff" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Your Portfolio" />
        <meta property="og:description" content="Professional web development portfolio" />
        <meta property="og:type" content="website" />
        {}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}