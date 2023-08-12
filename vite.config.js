import { defineConfig } from 'vite'
import ViteRsw from 'vite-plugin-rsw'

export default defineConfig({
  base: "/nannou_runner/",
  plugins: [
    ViteRsw(),
  ],
})
