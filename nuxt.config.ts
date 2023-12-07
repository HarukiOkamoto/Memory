// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/reset.css',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=deveice-width, initial-scale=1',
      link: [
        {
          rel: "precconect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
          crossorigin: "",
        },
        {
          href: "http://fonts.googleapis.com/css?family=EB+Garamond",
          rel: "stylesheet",
          type: "text/css",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap",
          rel: "stylesheet",
          type: "text/css",
        }
      ]
    }
  }
})
