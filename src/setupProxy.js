const createProxyMiddleware = require('http-proxy-middleware');

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