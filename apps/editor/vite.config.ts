import { defineConfig, PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import paths from 'vite-tsconfig-paths';
import viteMocker from 'vite-plugin-mocker';

export default defineConfig({
	plugins: [
		vue(),
		Pages({
			exclude: ['**/components/*'],
		}),
    paths({
			loose: true,
		}),
    viteMocker({
			delay: [0, 1000],
		}) as unknown as PluginOption,
		
	],
});