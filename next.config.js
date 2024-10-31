/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
    basePath: isProd ? '/next-portfolio' : '',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
    exports: {
        test: /\.(gif|mp3|glb)?$/,
        loader: 'file-loader',
        options: {
        name: 'assets/[name].[ext]',
        },
    compiler: {
        styledComponents: true
    },
    
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  };
   
  module.exports = nextConfig
