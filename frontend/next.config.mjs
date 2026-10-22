/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // @t-rex-star/shared ships TS/ESM; let Next transpile it.
  transpilePackages: ["@t-rex-star/shared"],
};

export default nextConfig;
