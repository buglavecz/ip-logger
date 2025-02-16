// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/eslint',
	],
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			supabaseUrl: process.env.SUPABASE_URL,
			supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
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
