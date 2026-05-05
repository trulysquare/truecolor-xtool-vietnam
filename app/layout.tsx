import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'vietnamese'] })

export const metadata: Metadata = {
  title: 'True Color - Nhà Phân Phối Chính Thức xTool Tại Việt Nam',
  description: 'True Color là nhà phân phối chính thức của xTool tại Việt Nam. Máy khắc laser, máy cắt laser, máy hàn laser chính hãng. Bảo hành 12 tháng, hỗ trợ kỹ thuật 24/7.',
  keywords: 'xtool, máy khắc laser, máy cắt laser, true color, việt nam, xTool S1, xTool P2S, xTool D1 Pro',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
