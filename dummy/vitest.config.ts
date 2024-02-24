import {mergeConfig, defineConfig} from "vitest/config";
import viteConfig from './vite.config';

export default mergeConfig(viteConfig, defineConfig({
	test: {
		environment: 'happy-dom',
		include: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
		setupFiles: [
			'./vitest.setup.ts'
		]
	}
}));
