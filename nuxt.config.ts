// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss'],
	devtools: { enabled: true },
	typescript: {
		typeCheck: true,
		strict: true,
	},
});
