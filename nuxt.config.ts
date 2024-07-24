// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint", "nuxt-svgo"],
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
    strict: true,
  },
  eslint: {},

  compatibilityDate: "2024-07-14",
});
