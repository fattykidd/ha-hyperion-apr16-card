import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/ha-hyperion-apr16-card.ts',
      name: 'HaHyperionApr16Card',
      fileName: () => 'ha-hyperion-apr16-card.js',
      formats: ['iife'],
    },
  },
});