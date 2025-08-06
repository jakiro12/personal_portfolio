import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], 
}satisfies UserConfig)
