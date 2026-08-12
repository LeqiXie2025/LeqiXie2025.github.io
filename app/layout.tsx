import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Noto_Sans_SC } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const notoSansSC = Noto_Sans_SC({ subsets: ['latin'], variable: '--font-noto-sans-sc' })

export const metadata: Metadata = {
  title: 'AI-X MentorOS | 个性化学习平台',
  description:
    '融合数字人导师、智能测评、自适应学习、职业课程推荐与可信证据链的个性化学习平台。',
  keywords: ['AI-X MentorOS', '个性化学习', '自适应学习', '数字人导师', '可信教育'],
  generator: 'v0.app',
  openGraph: {
    title: 'AI-X MentorOS',
    description: 'AI 驱动的个性化学习与可信教育研究平台。',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8fafc',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="bg-background">
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoSansSC.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
