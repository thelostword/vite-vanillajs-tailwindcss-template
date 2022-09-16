/*
 * @Author: thelostword
 * @Date: 2022-09-15 18:15:00
 * @LastEditors: thelostword
 * @LastEditTime: 2022-09-16 12:50:48
 * @FilePath: \moe-page1\vite.config.js
 */

/* eslint-disable */
import { defineConfig, loadEnv } from 'vite';
import compressionPlugin from 'vite-plugin-compression';
/* eslint-enable */
import { pages } from './scripts/pages';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    base: './',
    plugins: [
      compressionPlugin({
        algorithm: 'brotliCompress', // [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw'],
        threshold: 1024 * 5,
        deleteOriginFile: false,
      }),
    ],

    server: {
      host: '0.0.0.0',
      port: 9527,
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), ''),
        },
      },
    },

    build: {
      outDir: 'dist',
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
            return `${extType}/[name]-[hash][extname]`;
          },
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
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
