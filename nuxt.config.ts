// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	vite: {
		server: {
			hmr: {
				protocol: "ws",
			},
		},
	},
	runtimeConfig: {
		public: {
			GQL_HOST: "https://p8ulf5vo.directus.app/graphql",
		},
	},
	ssr: true,
	components: true,
	modules: ["nuxt-graphql-client", "@nuxtjs/tailwindcss"],
	css: ["@/assets/scss/style.scss"],
	"graphql-client": {
		watch: true,
		autoImport: true,
		functionPrefix: "Gql",
		documentPaths: ["./"],
		preferGETQueries: false,
		codegen: {

			silent: true,
			skipTypename: true,
			useTypeImports: true,
			dedupeFragments: true,
			onlyOperationTypes: false,
			disableOnBuild: false,
		},
		clients: {
			directus: {

				clientHost: "https://p8ulf5vo.directus.app/graphql",
				host: "https://p8ulf5vo.directus.app/graphql",
				schema: "https://p8ulf5vo.directus.app/graphql",
				codegenHeaders: { "Authorization": "Bearer H63lW3ex5DB99fSpwErax3-tZZR3IMZg" }
			},
			directus_system: {
				clientHost: "https://p8ulf5vo.directus.app/graphql/system",
				host: "https://p8ulf5vo.directus.app/graphql/system",
				schema: "https://p8ulf5vo.directus.app/graphql/system",
			},
		},
	},
});
