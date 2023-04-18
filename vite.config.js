import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1890ff',
          'body-background': '@light-primary-color',
          'component-background': '@light-primary-color',
          'text-color': '#FFFFFF',
          'text-color-inverse': '@dark-primary-color',
          'light-primary-color': '#91d5ff',
          'dark-primary-color': '#004c99',
        },
      },
    },
  },
});
