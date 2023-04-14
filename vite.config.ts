import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  plugins: [reactRefresh(), mkcert()],
  server: {
    port: 3000,
    // Proxy from 127.0.0.1:3000/proxy/... to for example go-stage.timetac.com/...
    proxy: {
      '/proxy': {
        target: 'https://go-sandbox.timetac.com',
        rewrite: (path) => path.replace(/^\/proxy/, ''),
        changeOrigin: true,
        secure: false,
        configure: (proxy, options) => {
          proxy.on('proxyRes', (proxyRes, req, res) => {
            // Remove Strict-Transport-Security header because it would incorrectly apply to localhost instead of the TimeTac domain, forcing HTTPS when using localhost in the browser
            delete proxyRes.headers['strict-transport-security'];
          });
        },
      },
    },
  },
})