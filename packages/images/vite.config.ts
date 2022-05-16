import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';

export default defineConfig({
	plugins: [vue()],
	build: {
		lib: {
			entry: './src/index.ts',
			name: 'y-image',
			fileName: `y-image.${pkg.version}`,
			formats: ['umd'],
		},
	},
});
