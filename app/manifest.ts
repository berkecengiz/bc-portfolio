import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Berke Cengiz - Backend Developer Portfolio',
    short_name: 'BC Portfolio',
    description: 'Backend Developer with 4+ years of experience building microservices and cloud-native applications',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

