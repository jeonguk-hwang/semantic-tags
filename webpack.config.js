const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // 엔트리 파일
  output: {
    path: path.resolve(__dirname, "dist"), // 출력 경로
    filename: "bundle.js", // 번들 파일 이름
    clean: true, // 빌드 전에 dist 폴더 정리
  },
  module: {
    rules: [
      {
        test: /\.css$/, // CSS 파일 처리
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|webp|gif)$/i, // 이미지 파일 처리
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]", // 출력 파일명 지정
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // HTML 템플릿 지정
    }),
  ],
  devServer: {
    static: "./dist", // 개발 서버에서 제공할 폴더
    port: 8080, // 개발 서버 포트
    open: true, // 브라우저 자동 열기
    hot: true, // HMR 활성화
  },
  mode: "development", // 기본 모드: 개발
};
