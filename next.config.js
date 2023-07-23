/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'v5.airtableusercontent.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    env:{
        AIRTABLE_SECRET_API_TOKEN: process.env.AIRTABLE_SECRET_API_TOKEN
    },
    experimental:{
        serverActions:true
    }
}

module.exports = nextConfig
