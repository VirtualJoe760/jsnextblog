import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import Script from 'next/script'
import { MDXProvider } from '@mdx-js/react'
import TweetEmbed from './components/TweetEmbed'
import MDXWrapper from './components/MDXWrapper'


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Speak Up Joe',
    template: '%s | Tech and Politics',
  },
  description: 'Hi I am Joe, I write about tech and politics.',
  openGraph: {
    title: 'Speak Up Joe | Tech & News',
    description: 'Hi I am Joe, I write about tech and politics. I hope you enjoy my content. Feel free to reach out to me on my socials.',
    url: baseUrl,
    siteName: 'speakupjoe',
    locale: 'en_US',
    type: 'article',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/assets/images/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/images/favicon.png', type: 'image/png' }
    ],
  },
};

const components = {
  TweetEmbed,
};


const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en_US"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-HW5D5MZCMC`}
        >
        </Script>
        {/* Google Analytics */}
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HW5D5MZCMC');
          `}
        </Script>
        {/* Twitter Embed */}
        {/* Twitter Embed Script */}
        <Script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          <MDXWrapper>{children}</MDXWrapper>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
