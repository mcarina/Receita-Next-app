/** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'standalone'
// };

const nextConfig = {
    output: 'export',
    basePath: '/Receita-Next-app',
    assetPrefix: '/Receita-Next-app/',
};

module.exports = {
    assetPrefix: './',
    basePath: '/Receita-Next-app',
    trailingSlash: true,
}

export default nextConfig;
