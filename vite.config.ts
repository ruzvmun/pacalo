// @ts-nocheck
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tsChecker from 'vite-plugin-checker'
import { loadEnv } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode`
  const env = loadEnv(mode, process.cwd(), '')

  //console.log('Mode:', mode)
  //console.log('Command:', command)

  return {
    // If deploying under a repository path on GitHub Pages, set VITE_BASE (e.g., '/pacalo/')
    base: env.VITE_BASE || '/',
    logLevel: 'info',
    plugins: [
      react(),
      tsChecker({ typescript: true }),
      ...(mode === 'analyze'
        ? [
            visualizer({
              filename: 'dist/stats-treemap.html',
              template: 'treemap',
              gzipSize: true,
              brotliSize: true,
            }),
            visualizer({
              filename: 'dist/stats-flamegraph.html',
              template: 'flamegraph',
              gzipSize: true,
              brotliSize: true,
            }),
            visualizer({
              filename: 'dist/stats-network.html',
              template: 'network',
              gzipSize: true,
              brotliSize: true,
            }),
          ]
        : []),
    ],

    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('@reduxjs')) return 'reduxjs'
            if (id.includes('react-router')) return 'react-router'
            if (id.includes('graphql')) return 'graphql'
            if (id.includes('@mui')) return 'mui'
            if (id.includes('@reactflow')) return 'reactflow'
            if (id.includes('firebase')) return 'firebase'
            if (id.includes('framer-motion')) return 'framer-motion'
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    optimizeDeps: {
      include: [
        '@mui/icons-material',
        '@mui/material',
        '@mui/base',
        '@mui/styles',
        '@mui/system',
        '@mui/utils',
        '@emotion/react',
        '@emotion/styled',
      ],
    },
    server: {
      open: true,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: 'src/setupTests',
      mockReset: true,
    },
    // Make env variables available
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  }
})
