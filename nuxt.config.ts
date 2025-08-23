import Aura from '@primevue/themes/aura'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', "@pinia/nuxt", 'nuxt-particles', "nuxt-typedjs"],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: "app-dark"
        }
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap",
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    },
  },
  css: ["~/assets/css/global.css", 'primeicons/primeicons.css'],
  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ],
  ssr: false
})