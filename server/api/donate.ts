import Stripe from "stripe";

const config = useRuntimeConfig()

const stripe = new Stripe(config.private.STRIPE_KEY, {
    apiVersion: '2022-11-15'
})

export default defineEventHandler((event) => {

    let price = ''

    if(config.public.DEV_DEBUG_MODE == 'false'){
        price = 'price_1NHP2kCtw8X2LUfLhJvgR0lE'
    } else {
        price = 'price_1NHOy0Ctw8X2LUfLD5RBfCyA'
    }
    

    const session = stripe.checkout.sessions.create({
        line_items: [
            {
                price: price,
                quantity: 1,

            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/',
        cancel_url: 'http://localhost:3000/',
    })

    return session
  })