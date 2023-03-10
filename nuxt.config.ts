// https://nuxt.com/docs/api/configuration/nuxt-config
export default (process.env.NODE_ENV === 'production') ? defineNuxtConfig({
    vite: {
        ssr: {
            // Add libraries containing invalid ESM here
            noExternal: ['naive-ui', 'vueuc']
        }
    },
    build: {
        transpile: ["naive-ui", 'vueuc']
    },
    app: {
        baseURL: '/',
        buildAssetsDir: '/assets'
    },
    components: {
        global: true,
        dirs: ['~/components'],
    }
}) : defineNuxtConfig({});
