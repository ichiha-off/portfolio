module.exports = { // eslint-disable-line
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss"; \
                      @import "@/styles/_mixin.scss";`
      }
    }
  }
};  // eslint-disable-line