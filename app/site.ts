function trimTrailingSlashes(s: string) {
  return s.replace(/\/+$/, '')
}

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const siteUrl = trimTrailingSlashes(rawSiteUrl)

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
export const basePath =
  !rawBasePath || rawBasePath === '/'
    ? ''
    : rawBasePath.startsWith('/')
      ? rawBasePath
      : `/${rawBasePath}`

/** Origin plus Next.js basePath (no trailing slash). Use for absolute links. */
export const baseUrl = `${siteUrl}${basePath}`

export function getMetadataBase(): URL {
  const pathname = basePath ? `${basePath}/` : '/'
  return new URL(pathname, `${siteUrl}/`)
}
