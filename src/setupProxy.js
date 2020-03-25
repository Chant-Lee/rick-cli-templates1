/**
 * 该文件会自动导入
 *
 */

const proxy = require("http-proxy-middleware");

module.exports = function setupProxy(app) {
  app.use(
    proxy("/api", {
      target: "http://127.0.0.1:7001/",
      changeOrigin: true
    })
  );
};
