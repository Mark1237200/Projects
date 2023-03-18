// webpack.config.js

const path = require("path");

module.exports = {
  name: "React-webpack-setting", // 웹팩 설정 이름
  mode: "development", //실서비스 : Production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    // 합쳐질 파일 요소들 입력
    app: ["./src/index.js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  output: {
    // 최종적으로 만들어질 js
    path: path.join(__dirname, "/dist"), //빌드 위치
    filename: "app.js", //웹팩 빌드 후 최종적으로 만들어질 파일
  },
  experiments: {
    topLevelAwait: true,
  },
};
