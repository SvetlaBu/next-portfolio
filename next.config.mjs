/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV = 'production';

// const nextConfig = {
//     output: 'export',
//     distDir: 'dist',
//     images: {
//         unoptimized: true,
//     },
//     // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
//     // trailingSlash: true,
   
//     // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
//     // skipTrailingSlashRedirect: true,
   
//     // Optional: Change the output directory `out` -> `dist`
//     // distDir: 'dist',
// }
   
//   module.exports = nextConfig

// const nextConfig = {
//     output: 'export',
//     distDir: 'dist',
//     webpack(config) {
//         const fileLoaderRule = config.module.rules.find((rule) =>
//             rule.test?.test?.('.svg'),
//         )
//         config.module.rules.push(
//             {
//             ...fileLoaderRule,
//             test: /\.svg$/i,
//             resourceQuery: /url/, // *.svg?url
//             },
//             {
//                 test: /\.svg$/i,
//                 issuer: fileLoaderRule.issuer,
//                 resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
//                 use: [{ loader: '@svgr/webpack', options: { icon: true } }]
//             },
//             )
//             fileLoaderRule.exclude = /\.svg$/i
//             return config
//         },
//     images: {
//         unoptimized: true,
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'flagcdn.com',
//                 port: '',
//             },
//         ],
//     },
//     exports: {
//         test: /\.(gif|png|jpg|jpeg|mp3|glb)?/,
//         type: 'asset/resource',
//     },
//     compiler: {
//         styledComponents: true
//     },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
    // basePath: isProd ? '/intern-pognali-2-4' : '',
    output: 'export',
    distDir: 'dist',
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        )
        config.module.rules.push(
            {
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/, // *.svg?url
            },
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
                use: [{ loader: '@svgr/webpack', options: { icon: true } }]
            },
            )
            fileLoaderRule.exclude = /\.svg$/i
            return config
        },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flagcdn.com',
                port: '',
            },
        ],
    },
    exports: {
        test: /\.(gif|png|jpg|jpeg|mp3$|glb)?/,
        loader: 'file-loader',
        options: {
        name: 'assets/[name].[ext]',
        },
    },
    compiler: {
        styledComponents: true
    },
};

export default nextConfig;
