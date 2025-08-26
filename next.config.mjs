/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  // No usar assetPrefix aquí, el script fix-paths.js se encargará de las rutas
  basePath: '',

  // Configuración para archivos 3D
  webpack: (config) => {
    // Configurar archivos GLB/GLTF como assets
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });
    return config;
  },
}

export default nextConfig
