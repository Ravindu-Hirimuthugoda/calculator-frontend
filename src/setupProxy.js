const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/dev",
    createProxyMiddleware({
      target: "",
      changeOrigin: true,
    })
  );
};
