import Document, { Head, Html, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Explore my portfolio showcasing innovative JavaScript/React applications, crafted to deliver seamless user experiences and cutting-edge functionalities."
          />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
           <meta name="google-site-verification" content="CRtevFl6lPGgVDHwPqg65cz5nBCSRlPtB9eSuArYMT8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>

    )
  }
}

export default MyDocument
