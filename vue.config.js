module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}
/*
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/style/_variables.scss";`
      }
    }
  }
};
/*/
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
    ],
  },
};