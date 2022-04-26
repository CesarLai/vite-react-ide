import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    mode,
    plugins: [react()],
    publicDir: 'public',
    resolve: {
      extensions: ['.ts', '.tsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    css: {
      modules: {
        scopeBehaviour: 'local',
        hashPrefix: 'cl',
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        localsConvention: 'camelCaseOnly'
      }
    }
  }
})
