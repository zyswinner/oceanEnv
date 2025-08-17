import { defineConfig } from 'vite';
import cesium from 'vite-plugin-cesium';
// import * as Cesium from "cesium";

export default defineConfig({
  base: '/feature3d/',
  plugins: [cesium()],
  server: {
    port: 5179,
    open: true,
    proxy: {
      '^/hyhjfx': {
        //target: path28001,
        target: 'http://192.168.3.250:8880',
        // target: 'http://192.168.100.100:8880',
        changeOrigin: true,
      },
      '/tms': {
        //target: path28001,
        target: 'http://192.168.3.250:8088',
        // target: 'http://192.168.100.100:8088',
        changeOrigin: true,
      },
      '/worldTerrain': {
        //target: path28001,
        target: 'http://192.168.3.150:9080',
        // target: 'http://192.168.100.100:8088',
        changeOrigin: true,
      },
    },
  },
  define: {
    // Cesium: Cesium,
  },
});
