// vite.config.js
import path, { resolve } from "node:path";
import url from "node:url";
import { defineConfig } from "file:///D:/projects/vite-pug-template/node_modules/vite/dist/node/index.js";
import viteBabel from "file:///D:/projects/vite-pug-template/node_modules/vite-plugin-babel/dist/index.mjs";
import viteMultipage from "file:///D:/projects/vite-pug-template/node_modules/vite-plugin-multipage/index.js";
import vitePug from "file:///D:/projects/vite-pug-template/node_modules/vite-plugin-pug-transformer/src/index.js";
import viteEslint from "file:///D:/projects/vite-pug-template/node_modules/vite-plugin-eslint/dist/index.mjs";
import viteStylelint from "file:///D:/projects/vite-pug-template/node_modules/vite-plugin-stylelint/dist/index.mjs";
import viteSassGlob from "file:///D:/projects/vite-pug-template/node_modules/vite-plugin-sass-glob-import/dist/index.mjs";
import imagemin from "file:///D:/projects/vite-pug-template/node_modules/unplugin-imagemin/dist/vite.mjs";
import viteSvgSpriteWrapper from "file:///D:/projects/vite-pug-template/node_modules/vite-svg-sprite-wrapper/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/projects/vite-pug-template/vite.config.js";
var root = resolve(path.dirname(url.fileURLToPath(__vite_injected_original_import_meta_url)), "source");
var outDir = resolve(path.dirname(url.fileURLToPath(__vite_injected_original_import_meta_url)), "build");
var vite_config_default = defineConfig({
  root,
  base: "./",
  clearScreen: false,
  build: {
    outDir,
    emptyOutDir: true,
    chunkSizeWarningLimit: "1024",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".")[1];
          let fileName = assetInfo.name.split(".")[0];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "images";
          } else if (extType === "css") {
            extType = "styles";
            return `${extType}/style[extname]`;
          } else if (extType === "js") {
            extType = "scripts";
            return `${extType}/${fileName}[extname]`;
          }
          return `${extType}/[name][extname]`;
        }
      }
    }
  },
  plugins: [
    viteBabel({
      presets: ["@babel/preset-env"]
    }),
    viteMultipage({
      mimeCheck: true,
      open: "/",
      pageDir: "pages",
      purgeDir: "pages",
      removePageDirs: true,
      rootPage: "index.html"
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
    imagemin({
      // Default mode squoosh. support squoosh and sharp
      mode: "sharp",
      // Default configuration options for compressing different pictures
      compress: {
        jpg: {
          quality: 70
        },
        jpeg: {
          quality: 70
        },
        png: {
          quality: 70
        },
        webp: {
          quality: 70
        }
      },
      // The type of picture converted after the build
      conversion: [
        { from: "png", to: "jpeg" },
        { from: "jpeg", to: "webp" }
      ]
    }),
    // viteImagemin({
    //   gifsicle: {
    //     optimizationLevel: 8,
    //     interlaced: false,
    //   },
    //   mozjpeg: {
    //     quality: 85,
    //   },
    //   pngquant: {
    //     quality: [0.7, 0.8],
    //     speed: 4,
    //   },
    //   optipng: {
    //     optimizationLevel: 8,
    //   },
    // }),
    viteSvgSpriteWrapper({
      icons: "source/images/sprite/*.svg",
      outputDir: "source/public/images",
      sprite: {
        shape: {
          transform: [{
            svgo: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      convertShapeToPath: false,
                      moveGroupAttrsToElems: false
                    }
                  }
                },
                {
                  name: "removeViewBox",
                  active: false
                },
                {
                  name: "removeEmptyAttrs",
                  active: false
                }
              ]
            }
          }]
        }
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFx2aXRlLXB1Zy10ZW1wbGF0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdHNcXFxcdml0ZS1wdWctdGVtcGxhdGVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3RzL3ZpdGUtcHVnLXRlbXBsYXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHBhdGgsIHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgdXJsIGZyb20gJ25vZGU6dXJsJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZpdGVCYWJlbCBmcm9tICd2aXRlLXBsdWdpbi1iYWJlbCc7XG5pbXBvcnQgdml0ZU11bHRpcGFnZSBmcm9tICd2aXRlLXBsdWdpbi1tdWx0aXBhZ2UnO1xuaW1wb3J0IHZpdGVQdWcgZnJvbSAndml0ZS1wbHVnaW4tcHVnLXRyYW5zZm9ybWVyJztcbmltcG9ydCB2aXRlRXNsaW50IGZyb20gJ3ZpdGUtcGx1Z2luLWVzbGludCc7XG5pbXBvcnQgdml0ZVN0eWxlbGludCBmcm9tICd2aXRlLXBsdWdpbi1zdHlsZWxpbnQnO1xuaW1wb3J0IHZpdGVTYXNzR2xvYiBmcm9tICd2aXRlLXBsdWdpbi1zYXNzLWdsb2ItaW1wb3J0Jztcbi8vIGltcG9ydCB2aXRlSW1hZ2VtaW4gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2VtaW4nO1xuaW1wb3J0IGltYWdlbWluIGZyb20gJ3VucGx1Z2luLWltYWdlbWluL3ZpdGUnO1xuaW1wb3J0IHZpdGVTdmdTcHJpdGVXcmFwcGVyIGZyb20gJ3ZpdGUtc3ZnLXNwcml0ZS13cmFwcGVyJztcblxuY29uc3Qgcm9vdCA9IHJlc29sdmUocGF0aC5kaXJuYW1lKHVybC5maWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpLCAnc291cmNlJylcbmNvbnN0IG91dERpciA9IHJlc29sdmUocGF0aC5kaXJuYW1lKHVybC5maWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpLCAnYnVpbGQnKVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByb290LFxuICBiYXNlOiAnLi8nLFxuICBjbGVhclNjcmVlbjogZmFsc2UsXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyLFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogJzEwMjQnLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgIGxldCBleHRUeXBlID0gYXNzZXRJbmZvLm5hbWUuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgICBsZXQgZmlsZU5hbWUgPSBhc3NldEluZm8ubmFtZS5zcGxpdCgnLicpWzBdO1xuXG4gICAgICAgICAgaWYgKC9wbmd8anBlP2d8c3ZnfGdpZnx0aWZmfGJtcHxpY28vaS50ZXN0KGV4dFR5cGUpKSB7XG4gICAgICAgICAgICBleHRUeXBlID0gJ2ltYWdlcyc7XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGV4dFR5cGUgPT09ICdjc3MnKSB7XG4gICAgICAgICAgICBleHRUeXBlID0gJ3N0eWxlcyc7XG5cbiAgICAgICAgICAgIHJldHVybiBgJHtleHRUeXBlfS9zdHlsZVtleHRuYW1lXWA7XG4gICAgICAgICAgfSBlbHNlIGlmIChleHRUeXBlID09PSAnanMnKSB7XG4gICAgICAgICAgICBleHRUeXBlID0gJ3NjcmlwdHMnO1xuXG4gICAgICAgICAgICByZXR1cm4gYCR7ZXh0VHlwZX0vJHtmaWxlTmFtZX1bZXh0bmFtZV1gO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBgJHtleHRUeXBlfS9bbmFtZV1bZXh0bmFtZV1gO1xuICAgICAgICB9LFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZpdGVCYWJlbCh7XG4gICAgICBwcmVzZXRzOiBbJ0BiYWJlbC9wcmVzZXQtZW52J10sXG4gICAgfSksXG4gICAgdml0ZU11bHRpcGFnZSh7XG4gICAgICBtaW1lQ2hlY2s6IHRydWUsXG4gICAgICBvcGVuOiAnLycsXG4gICAgICBwYWdlRGlyOiAncGFnZXMnLFxuICAgICAgcHVyZ2VEaXI6ICdwYWdlcycsXG4gICAgICByZW1vdmVQYWdlRGlyczogdHJ1ZSxcbiAgICAgIHJvb3RQYWdlOiAnaW5kZXguaHRtbCcsXG4gICAgfSksXG4gICAgdml0ZVB1Zyh7XG4gICAgICBwdWdPcHRpb25zOiB7XG4gICAgICAgIHByZXR0eTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgdml0ZUVzbGludCh7XG4gICAgICBmYWlsT25FcnJvcjogZmFsc2UsXG4gICAgfSksXG4gICAgdml0ZVN0eWxlbGludCgpLFxuICAgIHZpdGVTYXNzR2xvYigpLFxuXG4gICAgaW1hZ2VtaW4oe1xuICAgICAgLy8gRGVmYXVsdCBtb2RlIHNxdW9vc2guIHN1cHBvcnQgc3F1b29zaCBhbmQgc2hhcnBcbiAgICAgIG1vZGU6ICdzaGFycCcsXG4gICAgICAvLyBEZWZhdWx0IGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgY29tcHJlc3NpbmcgZGlmZmVyZW50IHBpY3R1cmVzXG4gICAgICBjb21wcmVzczoge1xuICAgICAgICBqcGc6IHtcbiAgICAgICAgICBxdWFsaXR5OiA3MCxcbiAgICAgICAgfSxcbiAgICAgICAganBlZzoge1xuICAgICAgICAgIHF1YWxpdHk6IDcwLFxuICAgICAgICB9LFxuICAgICAgICBwbmc6IHtcbiAgICAgICAgICBxdWFsaXR5OiA3MCxcbiAgICAgICAgfSxcbiAgICAgICAgd2VicDoge1xuICAgICAgICAgIHF1YWxpdHk6IDcwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIC8vIFRoZSB0eXBlIG9mIHBpY3R1cmUgY29udmVydGVkIGFmdGVyIHRoZSBidWlsZFxuICAgICAgY29udmVyc2lvbjogW1xuICAgICAgICB7IGZyb206ICdwbmcnLCB0bzogJ2pwZWcnIH0sXG4gICAgICAgIHsgZnJvbTogJ2pwZWcnLCB0bzogJ3dlYnAnIH0sXG4gICAgICBdXG4gICAgfSksXG4gICAgLy8gdml0ZUltYWdlbWluKHtcbiAgICAvLyAgIGdpZnNpY2xlOiB7XG4gICAgLy8gICAgIG9wdGltaXphdGlvbkxldmVsOiA4LFxuICAgIC8vICAgICBpbnRlcmxhY2VkOiBmYWxzZSxcbiAgICAvLyAgIH0sXG4gICAgLy8gICBtb3pqcGVnOiB7XG4gICAgLy8gICAgIHF1YWxpdHk6IDg1LFxuICAgIC8vICAgfSxcbiAgICAvLyAgIHBuZ3F1YW50OiB7XG4gICAgLy8gICAgIHF1YWxpdHk6IFswLjcsIDAuOF0sXG4gICAgLy8gICAgIHNwZWVkOiA0LFxuICAgIC8vICAgfSxcbiAgICAvLyAgIG9wdGlwbmc6IHtcbiAgICAvLyAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDgsXG4gICAgLy8gICB9LFxuICAgIC8vIH0pLFxuICAgIHZpdGVTdmdTcHJpdGVXcmFwcGVyKHtcbiAgICAgIGljb25zOiAnc291cmNlL2ltYWdlcy9zcHJpdGUvKi5zdmcnLFxuICAgICAgb3V0cHV0RGlyOiAnc291cmNlL3B1YmxpYy9pbWFnZXMnLFxuICAgICAgc3ByaXRlOiB7XG4gICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBbe1xuICAgICAgICAgICAgc3Znbzoge1xuICAgICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByZXNldC1kZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0U2hhcGVUb1BhdGg6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIG1vdmVHcm91cEF0dHJzVG9FbGVtczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZVZpZXdCb3gnLFxuICAgICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZUVtcHR5QXR0cnMnLFxuICAgICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1dLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStRLE9BQU8sUUFBUSxlQUFlO0FBQzdTLE9BQU8sU0FBUztBQUNoQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGVBQWU7QUFDdEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sa0JBQWtCO0FBRXpCLE9BQU8sY0FBYztBQUNyQixPQUFPLDBCQUEwQjtBQVhzSSxJQUFNLDJDQUEyQztBQWF4TixJQUFNLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxjQUFjLHdDQUFlLENBQUMsR0FBRyxRQUFRO0FBQy9FLElBQU0sU0FBUyxRQUFRLEtBQUssUUFBUSxJQUFJLGNBQWMsd0NBQWUsQ0FBQyxHQUFHLE9BQU87QUFFaEYsSUFBTyxzQkFB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
