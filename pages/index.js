import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </Head>
      <div className={styles.container}>toto</div>
    </>
  )
}
