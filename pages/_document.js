import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/images/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="At PlantSTEM we want to bring out the brightest in our students. We strive to teach them the concepts that they are going to use in their journey to reach the skies. We plant curiosity and provide water to quench the student’s thirst for knowledge. At PlantSTEM we are committed to teach anyone, regardless of their backgrounds."
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon.svg"
        />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="apple-touch-icon" href="/images/favicon.svg" />

        <link rel="icon" href="/images/favicon.svg" />

        <title>PlantSTEM</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"
          integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
