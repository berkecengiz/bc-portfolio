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
  title: "Berke Cengiz — Backend Developer",
  description: "Backend Developer with 4+ years of experience building microservices and cloud-native applications across AWS, Azure, and GCP. Expert in Node.js, Python, Go with strong DevOps capabilities.",
  keywords: ["Backend Developer", "DevOps", "DevSecOps", "Cloud Platforms", "AWS", "Azure", "GCP", "Kubernetes", "Docker", "Microservices", "Node.js", "Python", "Go"],
  authors: [{ name: "Berke Cengiz", url: "https://github.com/berkecengiz" }],
  creator: "Berke Cengiz",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Berke Cengiz — Backend Developer",
    description: "Backend Developer with 4+ years of experience building microservices and cloud-native applications",
    siteName: "Berke Cengiz Portfolio",
    url: "https://berkecengiz.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berke Cengiz — Backend Developer",
    description: "Backend Developer with 4+ years of experience building microservices and cloud-native applications",
    creator: "@berkecengiz",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
