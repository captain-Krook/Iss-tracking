import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>ISS_TRACKING</title>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <div className={styles.container}>toto</div>
    </>
  )
}
