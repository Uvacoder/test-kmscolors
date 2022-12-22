module.exports = {
	projects: {
		directus: {
			schema: {
				"https://p8ulf5vo.directus.app/graphql": {
					headers: {
						Authorization: "Bearer H63lW3ex5DB99fSpwErax3-tZZR3IMZg",
					},
				},
			},
			documents: ["queries/directus/*.{graphql,gql}"],
		},
		directus_system: {
			schema: ["https://p8ulf5vo.directus.app/graphql/system"],
			documents: ["queries/directus_system/*.{graphql,gql}"],
		},
	},
};
