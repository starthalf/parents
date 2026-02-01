import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // 청크 크기 제한 증가
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // recharts를 별도 청크로 분리
        manualChunks: {
          'recharts': ['recharts'],
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        }
      }
    },
    // 소스맵 비활성화로 빌드 속도 향상
    sourcemap: false,
  }
})