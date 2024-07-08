import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3003,
    proxy: {
      '/api': {
        target: 'https://5a7udyuiimjx3rngjs7lp4dxee0phmbl.lambda-url.us-east-1.on.aws',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
