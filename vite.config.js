import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression2';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.jsx'],
      refresh: true,
    }),
    react(),
    tailwindcss(),
    // mode != 'production' && require('@tailwindcss/vite'),
    // Kompresi gzip/brotli untuk production

    mode === 'production' &&
      viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 10240, // 10 KB
        filter: /\.(js|css|html|svg)$/,

        compressionOptions: {
          level: 6,
        },
        deleteOriginFile: false,
      }),

    mode === 'production' &&
      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
        filter: /\.(js|css|html|svg)$/,

        threshold: 10240, // 10 KB
        compressionOptions: {
          level: 9,
        },
        deleteOriginFile: false,
      }),

    // Analisis bundle size (untuk debugging)
    mode === 'analyze' &&
      visualizer({
        filename: 'bundle-analysis.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
  ].filter(Boolean),

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js/src'),
      '~': path.resolve(__dirname, 'resources'),
    },
  },

  server: {
    watch: {
      ignored: ['**/storage/framework/views/**'],
    },
    host: true,
    strictPort: true,
    port: 5173,
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
  },

  build: {
    target: 'es2020',
    minify: 'esbuild',
    cssMinify: true,
    // Nonaktifkan sourcemap di production
    sourcemap: false,
    // clear folder
    emptyOutDir: true,
    // Laporkan ukuran terkompresi
    reportCompressedSize: true,
    // Peringatan jika chunk > 150KB
    chunkSizeWarningLimit: 100,

    esbuild: {
      drop:
        process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
      pure: ['console.log', 'console.debug', 'console.info'],
      minifyIdentifiers: true,
      minifySyntax: true,
    },

    rollupOptions: {
      output: {
        // STRATEGI CHUNKING YANG JAUH LEBIH AKURAT
        manualChunks(id) {
          // // Hanya proses modul dari node_modules

          if (id.includes('node_modules')) {
            // 1. SEMUA React dalam SATU chunk
            if (id.includes('react')) {
              return 'vendor-react';
            }

            // 2. GSAP
            if (id.includes('gsap')) {
              return 'vendor-gsap';
            }
            // 3. Lenis
            if (id.includes('lenis')) {
              return 'vendor-lenis';
            }
            // 4. Inertia + Axios (gabung)
            if (
              id.includes('@inertiajs') ||
              id.includes('axios') ||
              id.includes('laravel-precognition')
            ) {
              return 'vendor-inertia';
            }

            if (id.includes('lodash')) {
              return 'vendor-lodash';
            }
            // 5. Utilities
            if (
              id.includes('clsx') ||
              id.includes('tailwind-merge') ||
              id.includes('class-variance-authority')
            ) {
              return 'vendor-utils';
            }

            if (id.includes('object-inspect')) {
              return 'vendor-debug';
            }
            // 6. Setelah library besar dipisah, sisanya akan kecil
            return 'vendor-misc';
          }
        },

        // Format nama file untuk cache
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },

  optimizeDeps: {
    // Hanya include yang benar-benar dibutuhkan saat startup
    include: ['react', 'react-dom', '@inertiajs/react'],
    // Exclude library besar untuk menghindari pre-bundle yang tidak perlu
    exclude: ['gsap', 'lenis'],

    esbuildOptions: {
      target: 'es2020',
      treeShaking: true,
      minify: true,
    },
  },

  css: {
    devSourcemap: mode === 'development',
    preprocessorOptions: {
      // Opsi untuk preprocessor CSS jika ada
    },
  },
}));
