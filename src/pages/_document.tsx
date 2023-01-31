import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Aman next app" />
        <link rel="shortcut icon" href={"/static/images/fav.png"} />
        <link rel="icon" href={"/static/images/fav.png"} sizes="32x32" />
        <link rel="icon" href={"/static/images/fav.png"} sizes="192x192" />
        <link
          rel="apple-touch-icon-precomposed"
          href={"/static/images/fav.png"}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
