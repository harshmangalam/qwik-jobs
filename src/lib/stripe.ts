import {Stripe} from "stripe"

const apiKey = process.env.STRIPE_SECRET_KEY
if(!apiKey){
    throw new Error("STRIPE_SECRET_KEY env variable is missiong")
}
export const stripe = new Stripe(apiKey,{
    apiVersion:"2022-11-15",
})