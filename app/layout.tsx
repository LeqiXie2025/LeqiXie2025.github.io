import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Leqi Xie | AI Undergraduate',
  description:
    'Personal portfolio of Leqi Xie, a BEng Artificial Intelligence student at Xi’an Jiaotong-Liverpool University.',
  generator: 'Next.js',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f8f4',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="bg-background">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
