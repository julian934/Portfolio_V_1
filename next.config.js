/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:['<http://cdn.sanity.io | cdn.sanity.io>', 'cdn.sanity.io','localhost:3000','localhost:3000/about']
  },
  async redirects(){
    return [
      {
        source:'/',
        destination:'/home',
        permanent:true
      }
    ]
  }
}

module.exports = nextConfig
