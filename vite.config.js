import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons.svg', 'assets/logo-zenite.png'],
      workbox: {
        navigateFallback: '/index.html'
      },
      manifest: {
        id: '/',
        name: 'Zênite Tecnologia',
        short_name: 'Zênite',
        description: 'Site institucional da Zênite Tecnologia',
        start_url: '/',
        scope: '/',
        theme_color: '#062b49',
        background_color: '#062b49',
        display: 'standalone',
        icons: [
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any'
          }
        ]
      }
    })
  ],
})