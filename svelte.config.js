import adapter from '@sveltejs/adapter-auto';
import preprocess   from 'svelte-preprocess'
import autoprefixer from 'autoprefixer'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(
	{
		scss:
		{
			prependData: /* scss */ `
				@use './src/assets/scss/global/colors' as *;
				@use './src/assets/scss/global/breakpoints' as *;
			`
		},
		postcss: { plugins: autoprefixer }
	})
	,
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
