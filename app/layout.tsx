import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "next-themes"
import "./globals.css"

const geist = Geist({ 
  subsets: ["latin"], 
  weight: ["400", "700", "900"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://berkecengiz.dev"),
  title: {
    default: "Berke Cengiz — Backend Developer | DevOps & Cloud Expert",
    template: "%s | Berke Cengiz",
  },
  description: "Backend Developer with 4+ years of experience building microservices and cloud-native applications across AWS, Azure, and GCP. Expert in Node.js, Python, Go with strong DevOps capabilities.",
  applicationName: "Berke Cengiz Portfolio",
  keywords: ["Backend Developer", "DevOps", "DevSecOps", "Cloud Platforms", "AWS", "Azure", "GCP", "Kubernetes", "Docker", "Microservices", "Node.js", "Python", "Go", "Software Engineer", "Full Stack", "API Development", "CI/CD"],
  authors: [{ name: "Berke Cengiz", url: "https://github.com/berkecengiz" }],
  creator: "Berke Cengiz",
  publisher: "Berke Cengiz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://berkecengiz.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Berke Cengiz — Backend Developer | DevOps & Cloud Expert",
    description: "Backend Developer with 4+ years of experience building microservices and cloud-native applications across AWS, Azure, and GCP",
    siteName: "Berke Cengiz Portfolio",
    url: "https://berkecengiz.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berke Cengiz — Backend Developer | DevOps & Cloud Expert",
    description: "Backend Developer with 4+ years of experience building microservices and cloud-native applications",
    creator: "@berkecengiz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <link rel="canonical" href="https://berkecengiz.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Berke Cengiz",
              jobTitle: "Backend Developer",
              description: "Backend Developer with 4+ years of experience in microservices and cloud-native applications",
              url: "https://berkecengiz.dev",
              email: "berkecengiz94@gmail.com",
              telephone: "+905054973808",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ankara",
                addressCountry: "TR",
              },
              sameAs: [
                "https://github.com/berkecengiz",
                "https://www.linkedin.com/in/berke-cengiz",
              ],
              knowsAbout: [
                "Backend Development",
                "DevOps",
                "DevSecOps",
                "Cloud Computing",
                "Microservices",
                "Kubernetes",
                "Docker",
                "AWS",
                "Azure",
                "GCP",
                "Node.js",
                "Python",
                "Go",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Wroclaw University of Science and Technology",
              },
              worksFor: {
                "@type": "Organization",
                name: "LOSEV",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Berke Cengiz Portfolio",
              url: "https://berkecengiz.dev",
              description: "Backend Developer portfolio showcasing projects in microservices, cloud infrastructure, and DevOps",
              author: {
                "@type": "Person",
                name: "Berke Cengiz",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://berkecengiz.dev",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: "https://berkecengiz.dev#about",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Projects",
                  item: "https://berkecengiz.dev#projects",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Contact",
                  item: "https://berkecengiz.dev#contact",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
