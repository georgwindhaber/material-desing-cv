// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/light.css", "~/assets/css/dark.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image", "@nuxt/icon"],
  imports: {
    autoImport: true,
  },
  app: {
    head: {
      bodyAttrs: {
        class: "dark bg-surface w-full h-full",
      },
      htmlAttrs: {
        class: "w-full h-full",
      },
    },
    rootAttrs: {
      class: "w-full h-full",
    },
  },
});
