// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import tailwind from 'eslint-plugin-tailwindcss'

export default withNuxt(
	...tailwind.configs['flat/recommended'],
	{
		rules: {
			'vue/multi-word-component-names': 0,
			'vue/no-v-html': 0,
			'vue/no-multiple-template-root': 0,
			'@stylistic/arrow-parens': 0,
			'@typescript-eslint/ban-ts-comment': 0,
			'@typescript-eslint/no-namespace': 0,
			'@typescript-eslint/no-explicit-any': 0,

			'tailwindcss/no-custom-classname': 0,
		},
	},
)
