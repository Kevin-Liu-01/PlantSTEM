import { Html, Head, Main, NextScript } from "next/document";
//All metadata is in THIS component.
export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="At PlantSTEM we want to bring out the brightest in our students. We strive to teach them the concepts that they are going to use in their journey to reach the skies. We plant curiosity and provide water to quench the student’s thirst for knowledge. At PlantSTEM we are committed to teach anyone, regardless of their backgrounds."
        />
        <link
          rel="apple-touch-icon"
          href="http://75.4.54.143/assets/img/logo.svg"
        />
        {/*
                    manifest.json provides metadata used when your web app is installed on a
                    user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
                */}
        <link rel="manifest" href="./manifest.json" />
        {/*
                    Notice the use of %PUBLIC_URL% in the tags above.
                    It will be replaced with the URL of the `public` folder during the build.
                    Only files inside the `public` folder can be referenced from the HTML.
                    Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
                    work correctly both with client-side routing and a non-root public URL.
                    Learn how to configure a non-root public URL by running `npm run build`.
                */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"
          integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="http://75.4.54.143/assets/img/logo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
