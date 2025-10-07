import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import path from 'path';

export default defineConfig({
  
  plugins: [
    handlebars({
      context: { title: 'KeshavSoft | Home' },
      partialDirectory: path.resolve(__dirname, 'src/templates/partials') // <-- correct path
    })
  ],
  server: {
    port: 3003,
    open: true
  }
});
