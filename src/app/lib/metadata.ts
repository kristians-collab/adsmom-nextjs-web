import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Adsmom',
  description: 'Your website description goes here',
  url: 'https://yourdomain.com', // Replace with your actual domain
  ogImage: '/og-image.jpg',
  creator: '@yourusername', // Replace with your social handle
  keywords: [
    'keyword1',
    'keyword2',
    'keyword3',
    // Add your relevant keywords
  ],
};

export function generateMetadata({
  title,
  description,
  image,
  path,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const siteTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const siteDescription = description || siteConfig.description;
  const siteImage = image || siteConfig.ogImage;
  const siteUrl = path ? `${siteConfig.url}${path}` : siteConfig.url;

  return {
    metadataBase: new URL(siteConfig.url),
    title: siteTitle,
    description: siteDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteUrl,
      title: siteTitle,
      description: siteDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: siteImage,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [siteImage],
      creator: siteConfig.creator,
    },
    verification: {
      google: 'your-google-verification-code', // Replace with your Google verification code
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}
