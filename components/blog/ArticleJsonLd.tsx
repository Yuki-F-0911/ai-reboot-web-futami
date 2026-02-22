import Script from 'next/script'

interface Props {
  title: string
  description: string
  url: string
  publishedTime: string
  modifiedTime: string
  imageUrl?: string
}

const defaultImageUrl = 'https://ai-reboot.io/images/ogp-default.webp'
const organizationName = 'AIリブート'
const organizationUrl = 'https://ai-reboot.io'
const organizationLogoUrl = 'https://ai-reboot.io/images/logo.png'
const jstOffset = '+09:00'

function toIsoDateTime(value: string): string {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return `${value}T00:00:00${jstOffset}`
  }

  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value)) {
    return `${value}:00${jstOffset}`
  }

  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(value)) {
    return `${value}${jstOffset}`
  }

  return value
}

export function ArticleJsonLd({
  title,
  description,
  url,
  publishedTime,
  modifiedTime,
  imageUrl,
}: Props) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: imageUrl ?? defaultImageUrl,
    datePublished: toIsoDateTime(publishedTime),
    dateModified: toIsoDateTime(modifiedTime),
    author: {
      '@type': 'Organization',
      name: organizationName,
      url: organizationUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: organizationName,
      url: organizationUrl,
      logo: {
        '@type': 'ImageObject',
        url: organizationLogoUrl,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <Script
      id="article-json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
