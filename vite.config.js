import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
     port: 8080, // Ganti 8080 dengan port yang Anda inginkan
   },
})
