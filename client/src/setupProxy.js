const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
	app.use(
		createProxyMiddleware('/api', {
			target: 'https://openapi.naver.com/v1/search/local.json', 
			changeOrigin: true,
		})
	);
};