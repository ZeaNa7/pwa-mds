import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      includeAssets: ['bird.png', 'vite.svg'],
      manifest: {
        name: 'Pwa Vite Project',
        background_color: '#ffffff',
        short_name: 'PWA',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/public/bird.png',
                sizes: '64x64',
                type: 'image/png',
                purpose: "any maskable"
            }
        ],
        start_url: '/',
        scope: '/',
      }, 
    })
  ],
})
