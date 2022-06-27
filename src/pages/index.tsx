import styles from "./home.module.scss"
import  Head  from '../../node_modules/next/head'
import { SubscribeButton } from "../components/SubscribeButton/index"


export default function Home() {
  return (
    <>
    <Head>
      <title>Home | ig.news</title>
    </Head>

    <main className={styles.homeContainer}>
      <section className={styles.homeContent}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all publications <br/>
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton/>
      </section> 
      <img src="/images/Mulher.svg" alt="Girl coding" />
    </main>

    </>
  )
}
