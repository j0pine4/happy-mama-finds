// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    css: ['~/assets/css/styles.css'],
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
        public: {
            GOOGLE_SHEETS_API_KEY: process.env.GOOGLE_SHEETS_API_KEY
        },
        private: {
            STRIPE_KEY: process.env.STRIPE_KEY,
        }
    },
    build: {
        transpile: ['@heroicons/vue']
    }

})
