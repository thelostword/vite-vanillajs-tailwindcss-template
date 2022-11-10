/*
 * @Author: thelostword
 * @Date: 2022-09-15 18:15:00
 * @LastEditors: thelostword
 * @LastEditTime: 2022-11-10 14:08:04
 * @FilePath: \moe-vanillajs-template\vite.config.js
 */
import { fileURLToPath, URL } from 'node:url';

/* eslint-disable */
import { defineConfig, loadEnv } from 'vite';
import compressionPlugin from 'vite-plugin-compression';
/* eslint-enable */
import { pages } from './scripts/pages';

console.log(import.meta.url, new URL('./src', import.meta.url));
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    root: 'src',
    base: './',
    plugins: [
      compressionPlugin({
        algorithm: 'brotliCompress', // [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw'],
        threshold: 1024 * 5,
        deleteOriginFile: false,
      }),
    ],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    server: {
      host: '0.0.0.0',
      port: 9527,
      open: true,
      proxy: {
        [env.VITE_PROXY_KEY]: {
          target: env.VITE_BASE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_PROXY_KEY}`), ''),
        },
      },
    },

    build: {
      outDir: '../dist',
      assetsDir: 'assets',
      assetsInlineLimit: 1024 * 4,
      sourcemap: false,
      rollupOptions: {
        input: pages(),
        output: {
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            let extType = info[info.length - 1];
            if (
              /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)
            ) {
              extType = 'media';
            } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
              extType = 'imgs';
            } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
              extType = 'fonts';
            }
            return `assets/${extType}/[name]-[hash][extname]`;
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              const modules = id.toString().split('node_modules/')[2].split('/');
              const chunksModules = [];
              if (chunksModules.includes(modules[0])) return modules[0];
              return 'vendor';
            }
            return undefined;
          },
        },
      },
    },
  });
};
