// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        preset: 'vercel'
    },
    components: {
        global: true,
        dirs: ['~/components'],
    },
})
