const injectWhyDidYouRender = require('./scripts/why-did-you-render');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  webpack: (config, context) => {
    // only run in dev mode and client build
    if (context.dev && !context.isServer) {
      console.log('Injecting why-did-you-render...');
      // inject the why-did-you-render script
      config.optimization.minimize = false;

      injectWhyDidYouRender(config, context);
    }

    return config;
  },
  // swcMinify: false,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/devscribe",
          destination: "https://keploy-websites.vercel.app/devscribe",
        },
        {
          source: "/code-coverage",
          destination: "https://keploy-websites.vercel.app/code-coverage",
        },
        {
          source: "/unit-test-generator",
          destination: "https://keploy-websites.vercel.app/unit-test-generator",
        },
        {
          source: "/test-case-generator",
          destination: "https://keploy-websites.vercel.app/test-case-generator",
        },
        {
          source: "/test-data-generator",
          destination: "https://keploy-websites.vercel.app/test-data-generator",
        },
        {
          source: "/regression-testing",
          destination: "https://keploy-websites.vercel.app/regression-testing",
        },
        {
          source: "/contract-testing",
          destination: "https://keploy-websites.vercel.app/contract-testing",
        },
        {
          source: "/continuous-integration-testing",
          destination: "https://keploy-websites.vercel.app/continuous-integration-testing",
        },
        {
          source: "/integration-testing",
          destination: "https://keploy-websites.vercel.app/integration-testing",
        },
        {
          source: "/webstories",
          destination: "https://blog-website-phi-eight.vercel.app/webstories",
        },
        {
          source: "/webstories/:slug*",
          destination: "https://blog-website-phi-eight.vercel.app/webstories/:slug*",
        },
        {
          source: "/plugins",
          destination: "https://keploy-websites.vercel.app/plugins",
        },
        {
          source: "/blog",
          destination: "https://blog-website-phi-eight.vercel.app/blog",
        },
        {
          source: "/blog/:slug*",
          destination: "https://blog-website-phi-eight.vercel.app/blog/:slug*",
        },
        {
          source: "/playground",
          destination: "https://keploy-websites.vercel.app/playground",
        },
        {
          source: '/api/:path*',
          destination: 'https://keploy-websites.vercel.app/api/:path*',
        },
      ],
      afterFiles: [
        {
          source: "/index.html",
          destination: "/",
        },
      ],
    };
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "**",
      },
      // {
      //   protocol: "https",
      //   hostname: "web-stories.keploy.io.s3.amazonaws.com",
      //   port: "",
      //   pathname: "**",
      // },
    ],
    domains: ["web-stories.keploy.io.s3.amazonaws.com"],
    unoptimized: true,
  },
});
