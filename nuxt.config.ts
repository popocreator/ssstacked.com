// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {enabled: true},
	modules: ['@nuxt/content'],
	content: {
		api: {
			baseURL: '/api/_my_content',
		},
	},
	components: [
		{
			path: '~/components',
			extensions: ['.vue'],
			pathPrefix: false,
		},
	],
	imports: {
		dirs: [
			// Scan top-level modules
			'composables',
			// ... or scan modules nested one level deep with a specific name and file extension
			'composables/*/index.{ts,js,mjs,mts}',
			// ... or scan all modules within given directory
			'composables/**',
		],
	},
	// Using package name (recommended usage)
	// '@nuxtjs/example',

	// Load a local module
	// './modules/example',

	// Add module with inline-options
	// ['./modules/example', { token: '123' }]

	// Inline module definition
	// async (inlineOptions, nuxt) => { }

	// Module package alias (require)
	// alias: {
	//   'sample-library': 'sample-library/dist/sample-library.cjs.js'
	// }
});
