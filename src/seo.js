import { useEffect } from 'react'

const baseUrl = 'https://arcedconstruction.ca/'
const siteName = 'ARCED Construction Group LTD'
const phone = '+1 431 338-5322'
const email = 'arcedconstruction@outlook.com'

const concreteKeywords = [
  'concrete contractor Winnipeg',
  'concrete services Winnipeg',
  'concrete contractor near me Winnipeg',
  'concrete driveway Winnipeg',
  'concrete patio Winnipeg',
  'concrete sidewalk Winnipeg',
  'garage floor concrete Winnipeg',
  'concrete slab Winnipeg',
  'concrete foundation Winnipeg',
  'concrete steps Winnipeg',
  'stamped concrete Winnipeg',
  'exposed aggregate concrete Winnipeg',
  'concrete replacement Winnipeg',
  'concrete demolition Winnipeg',
  'residential concrete Winnipeg',
  'commercial concrete Winnipeg',
]

const concreteServices = [
  'Concrete driveway installation Winnipeg',
  'Concrete patio installation Winnipeg',
  'Concrete sidewalk installation Winnipeg',
  'Garage floor concrete Winnipeg',
  'Concrete slab installation Winnipeg',
  'Concrete foundation work Winnipeg',
  'Concrete steps Winnipeg',
  'Stamped concrete Winnipeg',
  'Exposed aggregate concrete Winnipeg',
  'Concrete replacement Winnipeg',
  'Concrete demolition Winnipeg',
  'Gravel base installation Winnipeg',
  'Concrete reinforcement Winnipeg',
  'Residential concrete Winnipeg',
  'Commercial concrete Winnipeg',
]

const localAreas = [
  'Winnipeg',
  'Manitoba',
  'Headingley',
  'Oak Bluff',
  'East St. Paul',
  'West St. Paul',
]

function absolute(path) {
  return new URL(path, baseUrl).toString()
}

function upsertMeta(attribute, key, content) {
  if (!content) return
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

function upsertJsonLd(schema) {
  if (!schema) return
  let element = document.head.querySelector('#structured-data')
  if (!element) {
    element = document.createElement('script')
    element.type = 'application/ld+json'
    element.id = 'structured-data'
    document.head.appendChild(element)
  }
  element.textContent = JSON.stringify(schema)
}

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${baseUrl}#business`,
  name: siteName,
  legalName: 'ARCED Construction Group LTD.',
  url: baseUrl,
  logo: absolute('/assets/arced-logo.png'),
  image: absolute('/assets/concrete-hero.webp'),
  telephone: phone,
  email,
  description: 'Winnipeg concrete contractor providing driveways, patios, sidewalks, garage floors, concrete slabs, foundations, steps, stamped concrete, exposed aggregate and concrete replacement.',
  slogan: 'Concrete services in Winnipeg built to last.',
  knowsAbout: concreteKeywords,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Winnipeg',
    addressRegion: 'Manitoba',
    addressCountry: 'CA',
  },
  areaServed: localAreas.map((name) => ({ '@type': 'Place', name })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Concrete services',
    itemListElement: concreteServices.map((name) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name,
        serviceType: name,
        provider: { '@id': `${baseUrl}#business` },
        areaServed: localAreas.map((area) => ({ '@type': 'Place', name: area })),
      },
    })),
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${baseUrl}#website`,
  name: siteName,
  url: baseUrl,
  publisher: { '@id': `${baseUrl}#business` },
}

function pageSchema(path, name, description, keywords) {
  const url = absolute(path)
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    ...(keywords ? { keywords: keywords.join(', ') } : {}),
    isPartOf: { '@id': `${baseUrl}#website` },
    about: { '@id': `${baseUrl}#business` },
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    ['Do you work only in Winnipeg?', 'ARCED is based in Winnipeg and serves Winnipeg and surrounding areas.'],
    ['Do you remove existing concrete?', 'Yes. Concrete demolition, loading and waste disposal can be included in the project scope.'],
    ['Is excavation included?', 'Standard excavation is included in selected primary services, with additional excavation priced when required.'],
    ['Do you offer a warranty?', 'Yes. Completed concrete work is backed by a two-year workmanship warranty.'],
    ['What concrete services do you offer in Winnipeg?', 'ARCED provides concrete driveways, patios, sidewalks, garage floors, concrete slabs, foundations, concrete steps, stamped concrete, exposed aggregate and concrete replacement in Winnipeg.'],
    ['Do you install stamped concrete or exposed aggregate?', 'Yes. Decorative concrete options include stamped concrete, exposed aggregate concrete, sealer and selected finish upgrades depending on the project.'],
  ].map(([name, text]) => ({
    '@type': 'Question',
    name,
    acceptedAnswer: { '@type': 'Answer', text },
  })),
}

const homeDescription = 'Winnipeg concrete contractor for driveways, patios, sidewalks, garage floors, slabs, steps, foundations, stamped concrete and replacement.'
const calculatorDescription = 'Estimate concrete costs in Winnipeg for driveways, patios, sidewalks, garage floors, slabs, stamped concrete, demolition and reinforcement.'
const privacyDescription = 'Privacy Policy for ARCED Construction Group LTD. and its Winnipeg concrete services website.'
const termsDescription = 'Terms of Use for ARCED Construction Group LTD. and its Winnipeg concrete services website.'
const reviewsAdminDescription = 'Private review moderation page for ARCED Construction Group LTD.'

export const siteSeo = {
  home: {
    title: 'Concrete Contractor Winnipeg | Driveways, Patios, Slabs | ARCED',
    description: homeDescription,
    canonicalPath: '/',
    image: '/assets/concrete-hero.webp',
    schema: [businessSchema, websiteSchema, pageSchema('/', 'Concrete Contractor Winnipeg | Driveways, Patios, Slabs | ARCED', homeDescription, concreteKeywords), faqSchema],
  },
  calculator: {
    title: 'Concrete Cost Calculator Winnipeg | ARCED',
    description: calculatorDescription,
    canonicalPath: '/calculator',
    image: '/assets/concrete-hero.webp',
    schema: [businessSchema, websiteSchema, pageSchema('/calculator', 'Concrete Cost Calculator Winnipeg | ARCED', calculatorDescription, ['concrete cost calculator Winnipeg', 'concrete driveway cost Winnipeg', 'concrete patio cost Winnipeg', 'garage floor concrete cost Winnipeg'])],
  },
  privacy: {
    title: 'Privacy Policy | ARCED Construction Group LTD',
    description: privacyDescription,
    canonicalPath: '/privacy-policy',
    image: '/assets/arced-logo.png',
    robots: 'noindex, follow',
    schema: [businessSchema, websiteSchema, pageSchema('/privacy-policy', 'Privacy Policy | ARCED Construction Group LTD', privacyDescription)],
  },
  terms: {
    title: 'Terms of Use | ARCED Construction Group LTD',
    description: termsDescription,
    canonicalPath: '/terms-of-use',
    image: '/assets/arced-logo.png',
    robots: 'noindex, follow',
    schema: [businessSchema, websiteSchema, pageSchema('/terms-of-use', 'Terms of Use | ARCED Construction Group LTD', termsDescription)],
  },
  reviewsAdmin: {
    title: 'Review Admin | ARCED Construction Group LTD',
    description: reviewsAdminDescription,
    canonicalPath: '/admin-reviews',
    image: '/assets/arced-logo.png',
    robots: 'noindex, nofollow',
    schema: [pageSchema('/admin-reviews', 'Review Admin | ARCED Construction Group LTD', reviewsAdminDescription)],
  },
}

export function usePageSeo({ title, description, canonicalPath, image, schema, robots = 'index, follow' }) {
  useEffect(() => {
    const canonical = absolute(canonicalPath)
    const imageUrl = absolute(image)

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', robots)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:image', imageUrl)
    upsertMeta('property', 'og:site_name', siteName)
    upsertMeta('property', 'og:locale', 'en_CA')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', imageUrl)
    upsertCanonical(canonical)
    upsertJsonLd(schema)
  }, [title, description, canonicalPath, image, schema, robots])
}
