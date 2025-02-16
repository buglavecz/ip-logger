// https://nuxt.com/docs/api/configuration/nuxt-config
const DEFAULT_DB_SCHEMA = 'prod';
export default defineNuxtConfig({
	modules: [
		'@nuxt/eslint',
	],
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			SBUrl: process.env.SUPABASE_URL,
			SBAnonKey: process.env.SUPABASE_ANON_KEY,
			SBSchema: process.env.SUPABASE_SCHEMA || DEFAULT_DB_SCHEMA,
		},
	},
	compatibilityDate: '2024-11-01',
	eslint: {
		config: {
			stylistic: {
				flat: true,
				indent: 'tab',
				semi: true,
			},
		},
	},
});
