import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh(), WindiCSS()],
  server: {
    proxy: {
      '/search': {
        target: 'https://search.11st.co.kr/Search.tmall',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/search/, ''),
      },
    },
  },
})
