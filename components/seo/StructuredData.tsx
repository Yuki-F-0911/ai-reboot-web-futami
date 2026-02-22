import Script from 'next/script'
import { ArticleJsonLd } from '@/components/blog/ArticleJsonLd'

interface ArticleStructuredDataProps {
  title: string
  description: string
  url: string
  publishedTime: string
  modifiedTime?: string
  imageUrl?: string
  authorName?: string
  articleType?: 'Article' | 'BlogPosting'
  publisherName?: string
  publisherLogoUrl?: string
}

export function ArticleStructuredData({
  title,
  description,
  url,
  publishedTime,
  modifiedTime,
  imageUrl,
}: ArticleStructuredDataProps) {
  return (
    <ArticleJsonLd
      title={title}
      description={description}
      url={url}
      publishedTime={publishedTime}
      modifiedTime={modifiedTime || publishedTime}
      imageUrl={imageUrl}
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

interface EducationalOrganizationStructuredDataProps {
  name: string
  url: string
  parentOrganizationName?: string
}

export function EducationalOrganizationStructuredData({
  name,
  url,
  parentOrganizationName
}: EducationalOrganizationStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name,
    url,
    parentOrganization: parentOrganizationName
      ? {
          '@type': 'Organization',
          name: parentOrganizationName,
        }
      : undefined,
  }

  return (
    <Script
      id="educational-organization-structured-data"
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
  provider: string | {
    name: string
    url?: string
    type?: 'Organization' | 'EducationalOrganization'
  }
  url?: string
  courseMode?: string
  duration?: string
  price?: number | string
  priceCurrency?: string
}

export function CourseStructuredData({
  name,
  description,
  provider,
  url,
  courseMode = 'blended',
  duration = 'P100D',
  priceCurrency = 'JPY',
  price,
}: CourseStructuredDataProps) {
  const providerData = typeof provider === 'string'
    ? {
        '@type': 'Organization',
        name: provider,
      }
    : {
        '@type': provider.type ?? 'Organization',
        name: provider.name,
        url: provider.url,
      }

  const hasCourseInstance = {
    '@type': 'CourseInstance',
    courseMode,
    duration,
    offers: typeof price === 'undefined'
      ? undefined
      : {
          '@type': 'Offer',
          price: String(price),
          priceCurrency,
        },
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: providerData,
    url,
    hasCourseInstance,
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

interface CourseReviewStructuredDataProps {
  courseName: string
  courseUrl: string
  description: string
  providerName: string
  aggregateRating: {
    ratingValue: number
    reviewCount: number
    bestRating?: number
    worstRating?: number
  }
  reviews: Array<{
    author: string
    reviewBody: string
    reviewRating: number
    headline?: string
    datePublished?: string
  }>
}

export function CourseReviewStructuredData({
  courseName,
  courseUrl,
  description,
  providerName,
  aggregateRating,
  reviews,
}: CourseReviewStructuredDataProps) {
  const bestRating = aggregateRating.bestRating ?? 5
  const worstRating = aggregateRating.worstRating ?? 1

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseName,
    url: courseUrl,
    description,
    provider: {
      '@type': 'Organization',
      name: providerName,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating,
      worstRating,
    },
    review: reviews.map((item) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: item.author,
      },
      name: item.headline,
      reviewBody: item.reviewBody,
      datePublished: item.datePublished,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: item.reviewRating,
        bestRating,
        worstRating,
      },
    })),
  }

  return (
    <Script
      id="course-review-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
