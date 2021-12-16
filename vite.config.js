import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        port: 5000,
    },

    optimizeDeps: {
        include: ['@roxi/routify/decorators']
    },

    plugins: [svelte()],
});
