import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zetongportfolio.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        pathname: '/**',
      },
    ],
  },
  /* config options here */
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withFlowbiteReact(withNextIntl(nextConfig));