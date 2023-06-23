// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
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
        public: {
            BASE_URL: process.env.BASE_URL
        },
        private: {
            STRIPE_KEY: process.env.STRIPE_KEY,
        }
    },
    build: {
        transpile: ['@heroicons/vue']
    }

})
