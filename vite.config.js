import path, { resolve } from 'node:path'
import url from 'node:url'
import { defineConfig } from 'vite'
import viteBabel from 'vite-plugin-babel'
import viteMultipage from 'vite-plugin-multipage'
import vitePug from 'vite-plugin-pug-transformer'
import viteEslint from 'vite-plugin-eslint'
import viteStylelint from 'vite-plugin-stylelint'
import viteSassGlob from 'vite-plugin-sass-glob-import'
import viteImagemin from 'vite-plugin-imagemin'
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

const root = resolve(path.dirname(url.fileURLToPath(import.meta.url)), 'source')
const outDir = resolve(path.dirname(url.fileURLToPath(import.meta.url)), 'build')

export default defineConfig({
  root,
  base: './',
  clearScreen: false,
  build: {
    outDir,
    emptyOutDir: true,
    chunkSizeWarningLimit: '1024',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          console.log(assetInfo);
          let extType = assetInfo.name.split('.')[1];
          let fileName = assetInfo.name.split('.')[0];

          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';

          } else if (extType === 'css') {
            extType = 'css';

            return `${extType}/style[extname]`;
          } else if (extType === 'js') {
            extType = 'js';

            return `${extType}/${fileName}[extname]`;
          }

          return `${extType}/[name][extname]`;
        },
      }
    }
  },
  plugins: [
    viteBabel({
      presets: ['@babel/preset-env']
    }),
    viteMultipage({
      mimeCheck: true,
      open: '/',
      pageDir: 'pages',
      purgeDir: 'pages',
      removePageDirs: true,
      rootPage: 'index.html'
    }),
    vitePug({
      pugOptions: {
        pretty: true
      }
    }),
    viteEslint({
      failOnError: false
    }),
    viteStylelint(),
    viteSassGlob(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 75
      },
      pngquant: {
        quality: [0.7, 0.7],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    }),
    ViteSvgSpriteWrapper({
      icons: "source/img/sprite/*.svg",
      outputDir: "build/img",
    })
  ]
})
