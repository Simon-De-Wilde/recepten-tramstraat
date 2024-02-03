import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		// Enable import path resolving as configured in tsconfig.json
		tsconfigPaths(),
		// Support React
		react(),
		// Make all .svg files importable as React components
		svgr({
			// Make all imported .svg files useable as React components
			include: '**/*.svg',
		}),
	],
});
