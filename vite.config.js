import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  /**
   * Have some yellow notification:
   
    [plugin builtin:vite-reporter] 
    (!) Some chunks are larger than 500 kB after minification. Consider:
    - Using dynamic import() to code-split the application
    - Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
    - Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.

    https://stackoverflow.com/questions/75719664/some-chunks-are-larger-than-500-kib-after-minification
   */
  build: {
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@layouts': '/src/layouts',
      '@pages': '/src/pages',
      '@utils': '/src/utils',
      '@context': '/src/context',
      '@redux': '/src/redux',
      '@zustand': '/src/zustand',
    },
  },
})
