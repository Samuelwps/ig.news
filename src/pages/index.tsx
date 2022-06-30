import styles from "./home.module.scss"
import  Head  from "next/head"
import { GetStaticProps } from 'next'
import { SubscribeButton } from "../components/SubscribeButton/index"

import { stripe } from "../services/services"


interface HomeProps {
  product: {
    price_id: string;
    amount: string;
  }
}

export default function Home({product}:HomeProps) {
  console.log(product)
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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton/>
      </section> 
      <img src="/images/Mulher.svg" alt="Girl coding" />
    </main>
    </>
  )
}

export const getStaticProps:GetStaticProps = async () =>{
  const price = await stripe.prices.retrieve("price_1LFQkJKX9J5n4MlXJ9Lb3MN6")
  
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style:"currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  }

  return{
    props:{
      product,
    },
    revalidate: 60 * 60 * 24, //24 Horas
  }
}
