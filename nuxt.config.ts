// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', '@pinia/nuxt',],
    css: ['~/assets/css/styles.css'],
    plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
    app: {
        head: {
            script: [{
                src: '/assets/preline/preline.js',
                body: true,
                defer: true
            }]
        }
    },
    runtimeConfig: {
        EVENTBRITE_TOKEN: process.env.EVENTBRITE_TOKEN,
        STRIPE_KEY: process.env.STRIPE_KEY,
        public: {
            BASE_URL: process.env.BASE_URL
        },
    },
    build: {
        transpile: ['@heroicons/vue']
    }

})
