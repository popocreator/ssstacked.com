// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {enabled: true},
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
