/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,  // Для обработки файлов внутри JS/TS файлов
      use: ['@svgr/webpack'], // Используем @svgr/webpack для импорта SVG как React-компонентов
    });

    return config;
  },
};

export default nextConfig;
