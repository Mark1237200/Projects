module.exports = {
  // 웹팩 설정
  webpack: (config, { dev, isServer }) => {
    // 웹팩 설정 변경
    config.module.rules.push({
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    });
    return config;
  },

  // 환경 변수 설정
  env: {
    // 환경 변수 설정+
  },

  // 빌드 설정
  distDir: "build",
  // assetPrefix: '', // 서브 디렉토리에 배포 시 사용
  // basePath: '', // 라우트의 기본 경로를 설정

  // 헤더 설정
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};
