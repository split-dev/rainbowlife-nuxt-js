// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        ssr: {
            // Add libraries containing invalid ESM here
            noExternal: ['naive-ui']
        }
    },
    components: {
        global: true,
        dirs: ['~/components'],
    },
})
