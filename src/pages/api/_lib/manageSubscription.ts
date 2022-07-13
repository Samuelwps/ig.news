import { SlowBuffer } from "buffer";
import { log } from "console";
import {query as q, query} from "faunadb"
import Stripe from "stripe";

import { fauna } from "../../../services/faubadb";
import { stripe } from "../../../services/services";

export async function saveSubscription(
    subscriptionId: string,
    customerId: string,
    createAction = false,
){
    console.log(customerId)
    console.log(subscriptionId)

    const userRef = await fauna.query(
        q.Select(
            "ref",
            q.Get(
                q.Match(
                    q.Index("user_by_stripe_customer_id"),
                    customerId
                )
            )
        )
    )

    const subscription = await stripe.subscriptions.retrieve(subscriptionId)

    const subscriptionData = {
        id: subscription.id,
        userId: userRef,
        status: subscription.status,
        price_id: subscription.items.data[0].price.id
    }
     
    if(createAction){
        await fauna.query(
            q.Create(
                q.Collection("subscription"),
                { data: subscriptionData }
            )
        )
    } else {
        await fauna.query(
            q.Replace(
                q.Select(
                    "ref",
                    q.Get(
                        q.Match("subscription"),
                        subscriptionId
                    )
                ),
                {data: subscriptionData}
            )
        )
    }
    
}

