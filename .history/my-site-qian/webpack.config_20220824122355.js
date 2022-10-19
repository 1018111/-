/*
 * @Author: zhaobo 1427246356@qq.com
 * @Date: 2022-08-22 09:39:14
 * @LastEditors: zhaobo 1427246356@qq.com
 * @LastEditTime: 2022-08-24 12:23:41
 * @FilePath: \my-sitexxx\my-site-qian\webpack.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

if (process.env.NODE_ENV === "production") {
  module.exports = {
    devtool: "none",
    plugins: [new BundleAnalyzerPlugin()],
    externals: {
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
      axios: "axios",
    },
    js: [
      //替换的cdn
      '//cdn.bootcdn.net/ajax/libs/vue/2.6.10/vue.min.js',
      '//cdn.bootcdn.net/ajax/libs/vue-router/3.1.3/vue-router.min.js',
      '//cdn.bootcdn.net/ajax/libs/vuex/3.1.1/vuex.min.js',
      '//cdn.bootcdn.net/ajax/libs/axios/0.19.0/axios.min.js'
      //原来的cdn
      // '//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
      // '//cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
      // '//cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
      // '//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js'
    ]
  

  };
} else {
  module.exports = {};
}
