// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	vite: {
		server: {
			hmr: {
				protocol: "ws",
			},
		},
	},
	ssr: false,
	modules: ["nuxt-graphql-client", "@nuxtjs/tailwindcss"],
	css: ["@/assets/scss/style.scss"],
	runtimeConfig: {
		public: {
			GQL_HOST: "https://p8ulf5vo.directus.app/graphql",
		},
	},
});
