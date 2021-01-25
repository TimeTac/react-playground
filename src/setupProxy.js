<<<<<<< HEAD
const { createProxyMiddleware } = require('http-proxy-middleware');
=======
const createProxyMiddleware = require('http-proxy-middleware');
>>>>>>> ec71fccca5e4f767a0fa02f3c84b0dec4754c9b0

module.exports = function (app) {
    app.use(
        '/playground',
        createProxyMiddleware({
            target: 'https://go-sandbox.timetac.com/',
            changeOrigin: true,
            ws: true
        })
    );
};