import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from 'vite-plugin-env-compatible';
import tsConfigPaths from 'vite-tsconfig-paths';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  envPrefix: 'REACT_APP_',
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ]
    }
  },
  plugins: [
    react(),
    envCompatible(),
    tsConfigPaths(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      }
    })
  ],
})