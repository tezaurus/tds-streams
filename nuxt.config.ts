// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
  devtools: { enabled: false },
  compatibilityDate: '2025-07-15',
	components: [
		{
			path: 'components',
			pathPrefix: false
		},
		{
			path: 'sdk/components',
			pathPrefix: false
		},
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use '@/sdk/assets/styles/variables/colors';
						@use '@/sdk/assets/styles/variables/layers';
						@use '@/sdk/assets/styles/variables/transitions';
					`,
				},
			},
		},
	},
	css: [
		'@/sdk/assets/styles/styles.scss',
	],
});
