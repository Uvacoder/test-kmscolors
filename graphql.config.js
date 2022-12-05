module.exports = {
	projects: {
		directus: {
			schema: ["https://p8ulf5vo.directus.app/graphql"],
			documents: ["queries/directus/*.{graphql,gql}"],
		},
		directus_system: {
			schema: ["https://p8ulf5vo.directus.app/graphql/system"],
			documents: ["queries/directus_system/*.{graphql,gql}"],	
		},
	},
};
