import tailwindcss from '@tailwindcss/vite'

const IS_DEVELOPMENT = import.meta.env.NODE_ENV === 'development'
const IS_PRODUCTION = import.meta.env.NODE_ENV === 'production'

export default defineNuxtConfig({

	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/image',
		'@nuxt/scripts',
		'shadcn-nuxt',
		'@pinia/nuxt',
		'@nuxtjs/color-mode',
		'v-gsap-nuxt',
	],

	pages: { pattern: ['**/*.vue', '!**/_components/**'] },

	components: false,

	imports: { scan: false },
	devtools: { enabled: false },

	css: ['~/assets/css/index.css'],

	colorMode: {
		preference: 'dark',
		classSuffix: '',
	},

	runtimeConfig: {
		public: {
			API_URL: process.env.NUXT_ENV_API_URL,
			IS_DEVELOPMENT,
			IS_PRODUCTION,
		},
	},
	compatibilityDate: '2025-07-15',

	nitro: {
		routeRules: {
			'/': { prerender: true, ssr: false },
			// '/contacts': { prerender: true, ssr: false },
			// '/terms/**': { prerender: true, ssr: false },
			// '/auth/**': { ssr: false },
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},

	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: false,
				quotes: 'single',
				commaDangle: 'always-multiline',
				braceStyle: '1tbs',
			},
		},
	},

	icon: {
		mode: 'svg',
		provider: 'server',
		customCollections: [
			{
				prefix: 'i',
				dir: './app/assets/icon',
			},
		],
	},

	vgsap: {
		presets: [],
		breakpoint: 768,
		scroller: '',
		composable: true,
	},
})
