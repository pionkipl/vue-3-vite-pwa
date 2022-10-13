import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // VitePWA({
    //   strategies: 'injectManifest',
    //   srcDir: 'public',
    //   filename: 'firebase-messaging-sw.js',
    // }),
    VitePWA(
      {
        // registerType: 'autoUpdate',
        devOptions: {
          enabled: true
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        },
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg', 'pwa-192x192.png', 'pwa-512x512.png'],
        manifest: {
          name: 'My Awesome App',
          short_name: 'My vite pwa',
          description: 'My Awesome App vite pwa',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: 'masked-icon.svg',
              sizes: '512x512',
              type: 'image/svg',
              purpose: 'any maskable'
            }
          ]
        }
      })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
