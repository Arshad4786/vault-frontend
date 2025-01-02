/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '/**',  // This will allow images from any path under 'images.unsplash.com'
        },
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
          pathname: '/**',  // This will allow images from any path under 'assets.aceternity.com'
        },
        {
          protocol: 'https',
          hostname: 'postimg.cc',
          pathname: '/**',  // This will allow images from any path under 'postimg.cc'
        },
        {
          protocol: 'https',
          hostname: 'i.postimg.cc',
          pathname: '/**',  // This will allow images from any path under 'i.postimg.cc'
        },
      ],
    },
  };
  
  export default nextConfig;
  