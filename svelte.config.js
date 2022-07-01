import adapter from '@sveltejs/adapter-auto';
import { resolve } from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			server: {
				fs: {
					allow: ['static'],
				},
			},
			resolve: {
				alias: {
					'@layout': resolve('/src/layout'),
					'@components': resolve('/src/components'),
					'@shared': resolve('/src/shared'),
					'@routes': resolve('/src/routes'),
					'@services': resolve('/src/services'),
					'@stores': resolve('/src/stores'),
				},
			},
		},
	},
};

export default config;
