module.exports = {
    lintOnSave: false,
    publicPath: "/",
    outputDir:'ocsMgrPlatform',
    productionSourceMap: false,
    devServer: {
        port: 8081,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            "/ocs_manage": {
                target: "http://test.ocs.mgr",
                changeOrigin: true,
                pathRewrite: {
                    "^/ocs_manage": "/ocs_manage"
                }
            }
        }
    },
}