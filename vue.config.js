module.exports = {
    devServer: {
        proxy: {
            '/user': {
                target: 'http://localhost:8888',
                ws: true,
                changeOrigin: true,
                // secure:false #https
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
}