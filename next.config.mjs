/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserSite = repositoryName.endsWith('.github.io')
const basePath = isGitHubPages && !isUserSite ? `/${repositoryName}` : ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
