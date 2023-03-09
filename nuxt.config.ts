// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        preset: 'vercel'
    },

    // @ts-expect-error: Type 'false' has no properties in common with type 'ViteConfig'
    vite: false,

    // @ts-expect-error: Missing ssr key
    ssr: {
        noExternal: ['naive-ui'],
    },
})
