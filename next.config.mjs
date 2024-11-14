/** @type {import('next').NextConfig} */

const nextConfig = {
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
        test: /\.(gif|png|jpg|jpeg|mp3|glb)?$/,
        loader: 'file-loader',
        options: {
        name: 'assets/img/[name].[ext]',
        },
    },
    exports: {
        distDir: 'dist',
    },

    compiler: {
        styledComponents: true
    },
};

export default nextConfig;