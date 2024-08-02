// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" }
  },
  compatibilityDate: "2024-04-03",
  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ],
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/image"],
  tailwindcss: {
    cssPath: "~/assets/styles/main.scss"
  },
  content: {
    highlight: {
      theme: "catppuccin-mocha",
      langs: [
        "python",
        "bash"
      ]
    }
  }
});
