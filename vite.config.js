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
        registerType: 'autoUpdate',
        // devOptions: {
        //   enabled: true
        // },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        },
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg', 'pwa-192x192.png', 'pwa-512x512.png', 'can.png'],
        manifest: {
          name: 'My Awesome App',
          short_name: 'My vite pwa',
          description: 'My Awesome App vite pwa',
          theme_color: '#36c',
          display_override: ["window-controls-overlay"],
          shortcuts: [
            {
              "name": "Mysterious",
              "short_name": "Mysterious",
              "url": "/mysterious",
              "icons": [
                { "src": "/can.png", "sizes": "300x520", "type": "image/png" }
              ]
            },
          ],
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
              purpose: 'maskable'
            },
            {
              src: 'masked-icon-192.svg',
              sizes: '192x192',
              type: 'image/svg',
              purpose: 'maskable'
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
