import Script from 'next/script'

interface ArticleStructuredDataProps {
  title: string
  description: string
  url: string
  publishedTime: string
  modifiedTime?: string
  imageUrl?: string
  authorName?: string
}

export function ArticleStructuredData({
  title,
  description,
  url,
  publishedTime,
  modifiedTime,
  imageUrl,
  authorName = 'AI REBOOT編集部'
}: ArticleStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AI REBOOT',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ai-reboot.io/logo.png',
      },
    },
    image: imageUrl ? {
      '@type': 'ImageObject',
      url: imageUrl,
    } : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <Script
      id="article-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

interface OrganizationStructuredDataProps {
  name: string
  url: string
  logo: string
  description: string
  sameAs?: string[]
}

export function OrganizationStructuredData({
  name,
  url,
  logo,
  description,
  sameAs = []
}: OrganizationStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: name,
    url: url,
    logo: logo,
    description: description,
    sameAs: sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'Japanese',
    },
  }

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

interface BreadcrumbStructuredDataProps {
  items: Array<{
    name: string
    url: string
  }>
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script
      id="breadcrumb-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

interface CourseStructuredDataProps {
  name: string
  description: string
  provider: string
  url: string
  courseMode?: string
  duration?: string
  hasCertificate?: boolean
  priceCurrency?: string
  lowPrice?: number
  highPrice?: number
}

export function CourseStructuredData({
  name,
  description,
  provider,
  url,
  courseMode = 'blended',
  duration = 'P100D',
  hasCertificate = true,
  priceCurrency = 'JPY',
  lowPrice,
  highPrice
}: CourseStructuredDataProps) {
  const offers = typeof lowPrice === 'number' && typeof highPrice === 'number'
    ? {
        '@type': 'AggregateOffer',
        priceCurrency,
        lowPrice,
        highPrice,
      }
    : {
        '@type': 'Offer',
        category: 'Paid',
      }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: name,
    description: description,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    url: url,
    courseMode: courseMode,
    duration: duration,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: courseMode,
      duration: duration,
    },
    offers,
    hasCertificate: hasCertificate,
  }

  return (
    <Script
      id="course-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

interface FAQStructuredDataProps {
  items: Array<{
    question: string
    answer: string
  }>
}

export function FAQStructuredData({ items }: FAQStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <Script
      id="faq-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
