import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve('./src'), // Безопасный путь без __dirname
    },
  },
  server: {
    host: true,      // Разрешает доступ по локальной сети (для телефона)
    port: 5178,      // ← Новый порт (был 5173)
    strictPort: true // Если 5174 занят → ошибка, а не автоматический переход на 5175
  }
})