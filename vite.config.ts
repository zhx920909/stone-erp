import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import elementPlusPlugin from './src/plugins/elementplus'

import tailwindCSSPlugin from './src/plugins/tailwindcss'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), vueDevTools(), ...elementPlusPlugin, ...tailwindCSSPlugin],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
