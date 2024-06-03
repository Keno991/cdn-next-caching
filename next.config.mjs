/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value:
            "public, max-age=60, s-maxage=600, stale-while-revalidate=14400, stale-if-error=14400",
        },
      ],
    },
    {
      source: "/api(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "max-age=0, no-cache, no-store",
        },
      ],
    },
  ],
};

export default nextConfig;
