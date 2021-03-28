module.exports = {
  // eslint-disable-line
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss"; \
                      @import "@/styles/_mixin.scss";`,
      },
    },
  },
  configureWebpack: {
    performance: {
      maxAssetSize: 1100000,
      maxEntrypointSize: 700000,
    },
  },
}; // eslint-disable-line
