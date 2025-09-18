import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/AjmeraCityscapes/', // 👈 must be at root, not inside server
  server: {
    host: true,  // allows access from network
    port: 5173,  // your dev port
    strictPort: true,
  },
});
