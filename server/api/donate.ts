import Stripe from "stripe";

const config = useRuntimeConfig()

const stripe = new Stripe(config.STRIPE_KEY, {
    apiVersion: '2022-11-15'
})

export default defineEventHandler((event) => {

    let price = ''

    if(config.public.DEV_DEBUG_MODE == 'false'){
        price = 'price_1NFeKKGuH7AhgvkWyElhKX1Z'
    } else {
        price = 'price_1NFeKKGuH7AhgvkWyElhKX1Z'
    }
    

    const session = stripe.checkout.sessions.create({
        line_items: [
            {
                price: price,
                quantity: 1,

            },
        ],
        mode: 'payment',
        success_url: 'https://www.happymamafinds.com/',
        cancel_url: 'https://www.happymamafinds.com/',
    })

    return session
  })