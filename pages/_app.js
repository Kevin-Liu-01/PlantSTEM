import Head from "next/head";
import "../styles/App.css";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PlantSTEM</title>
        <link
          rel="icon"
          href="../public/logo192.png"
          sizes="any"
          type="image/svg+xml"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="At PlantSTEM we want to bring out the brightest in our students. We strive to teach them the concepts that they are going to use in their journey to reach the skies. We plant curiosity and provide water to quench the student’s thirst for knowledge. At PlantSTEM we are committed to teach anyone, regardless of their backgrounds."
        />
        <link
          rel="apple-touch-icon"
          href="../public/favicon.svg"
          sizes="any"
          type="image/svg+xml"
        />
      </Head>
      <noscript>You need to enable JavaScript to run this app.</noscript>

      <div id="root" />
      {/*
                This HTML file is a template.
                If you open it directly in the browser, you will see an empty page.

                You can add webfonts, meta tags, or analytics to this file.
                The build step will place the bundled scripts into the <body> tag.

                To begin the development, run `npm start` or `yarn start`.
                To create a production bundle, use `npm run build` or `yarn build`.
            */}
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
