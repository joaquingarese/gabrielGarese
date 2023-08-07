import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:type" content="website" />

        <meta name="description" content="Tresbe - Importamos lo que necesitás" />

        <link rel="canonical" href="https://www.gabrielgarese.com" />
        <meta name="robots" content="index, follow" />

        <meta name="apple-mobile-web-app-title" content="Gabriel Garese" />
        <meta name="application-name" content="Gabriel Garese" />

        <meta name="msapplication-TileColor" content="#8D7449" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:description" content="Gabriel Garese - Negocios Rurales" />
        <meta property="og:title" content="Gabriel Garese - Negocios Rurales" />

        <meta property="og:url" content="https://www.gabrielgarese.com" />
        <meta
          name="keywords"
          content="Gabriel Garese, campos, comprar campos, negocios rurales, hectáreas"
        />
        <title>Gabriel Garese - Negocios Rurales</title>

        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;700&family=Montserrat:wght@300;400;700&display=swap"
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
