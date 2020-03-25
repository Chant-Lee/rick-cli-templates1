const { override, fixBabelImports, addLessLoader } = require("customize-cra");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const addCustom = () => config => {
  // eslint-disable-next-line no-param-reassign
  config.devtool = false;
  // eslint-disable-next-line no-param-reassign
  config.optimization = {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false
      })
    ]
  };
  return config;
};
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#EE4D2D" },
    localIdentName: "[local]--[hash:base64:5]"
  }),
  addCustom()
);
