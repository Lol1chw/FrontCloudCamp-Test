import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         App: '/src/App',
         Pages: '/src/Pages',
         Widgets: '/src/Widgets',
         Features: '/src/Features',
         Entities: '/src/Entities',
         Shared: '/src/Shared'
      }
   }
})
