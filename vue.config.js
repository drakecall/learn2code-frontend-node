const path = require("path");
const VueAutoRoutingPlugin = require("vue-auto-routing/lib/webpack-plugin");
module.exports = {
  pages: {
    index: {
      entry: "index.ts",
    },
  },

  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.join(__dirname), "./");
  },
  configureWebpack: {
    plugins: [
      new VueAutoRoutingPlugin({
        // Path to the directory that contains your page components.
        pages: "./pages/",
        chunkNamePrefix: "page-",
        // A string that will be added to importing component path (default @/pages/).
        importPrefix: "@/pages/",
      }),
    ],
  },
};
