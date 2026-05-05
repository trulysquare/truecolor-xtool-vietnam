import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'True Color - Nhà Phân Phối Chính Thức xTool Tại Việt Nam',
  description: 'True Color là nhà phân phối chính thức của xTool tại Việt Nam. Máy khắc laser, máy cắt laser chính hãng, bảo hành 12 tháng, hỗ trợ kỹ thuật 24/7.',
  keywords: 'xtool, máy khắc laser, máy cắt laser, true color, việt nam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
