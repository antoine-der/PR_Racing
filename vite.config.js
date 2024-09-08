import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/send-email': {
        target: 'https://pr-racingquad.netlify.app:3000', // L'URL de votre serveur backend Node.js
        changeOrigin: true, // Nécessaire pour CORS
        rewrite: (path) => path.replace(/^\/send-email/, '/send-email'), // Réécrit l'URL pour le backend
      },
    },
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  base: './'  // Ajoutez ceci
})

