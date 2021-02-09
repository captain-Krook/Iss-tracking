import "../styles/globals.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ISS_TRACKING</title>
        <meta httpEquiv="Content-Security-Policy" content="block-all-mixed-content" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
