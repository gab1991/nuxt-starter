// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "nuxt-svgo", "@nuxt/ui"],
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
    strict: true,
  },
  eslint: {},

  compatibilityDate: "2024-07-14",
});
