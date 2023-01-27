import react from '@vitejs/plugin-react'
import jsconfigPaths from 'vite-jsconfig-paths'

import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), jsconfigPaths()],
})