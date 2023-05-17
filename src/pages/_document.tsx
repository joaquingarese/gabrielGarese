import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:type" content="website" />
        {/* Cambiar descripcion */}
        <meta name="description" content="Tresbe - Importamos lo que necesitás" />
        {/*Preguntarle a pipe pagina que te ayuda a ponerle el favicon */}
        {/* <link rel="shortcut icon" href="/favicon.png" type="image/png" /> */}
        {/* Pipe me ayuda con esta  */}
        {/* <meta name="msapplication-TileImage" content="/public/favicon.png" /> */}

        {/* Poner la pagina de papa*/}
        <link rel="canonical" href="https://www.tresbe.com.uy" />
        <meta name="robots" content="index, follow" />

        {/* conetent gabriel garese en las dos sigueintes */}
        <meta name="apple-mobile-web-app-title" content="Tresbe" />
        <meta name="application-name" content="Tresbe" />
        {/* cambiar color para relacionado con la pagina */}
        <meta name="msapplication-TileColor" content="#0098DA" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Pipe me ayuda */}
        {/* <meta property="og:image" content={'https://www.tresbe.com.uy/favicon.png'} /> */}
        {/* relacionado a pagina de papa en las dos */}
        <meta property="og:description" content="Tresbe - Importamos lo que necesitás" />
        <meta property="og:title" content="Tresbe" />
        {/* Pagina de papa */}
        <meta property="og:url" content="https://www.tresbe.com.uy/" />

        <meta name="twitter:card" content="summary_large_image" />
        {/* <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FBFBF8" />
        <meta name="msapplication-TileColor" content="#0098DA" />
        <meta name="theme-color" content="#ffffff" /> */}
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
