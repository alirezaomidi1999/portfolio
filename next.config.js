/** @type {import('next').NextConfig} */

const basePath =  
 process.env.NODE_ENV === "production" ? "/portfolio" : "";
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  basePath:basePath,
  env:{
    basePath
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
