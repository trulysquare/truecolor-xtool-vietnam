'use client'
import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Sản Phẩm', href: '/danh-muc' },
  { label: 'Dòng P Series', href: '/danh-muc?series=p' },
  { label: 'Dòng S Series', href: '/danh-muc?series=s' },
  { label: 'Dòng F Series', href: '/danh-muc?series=f' },
  { label: 'Liên Hệ', href: '#lien-he' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#28BE44] rounded flex items-center justify-center">
            <span className="text-white font-black text-sm">X</span>
          </div>
          <div>
            <span className="text-xl font-bold text-gray-900">True Color</span>
            <span className="text-xs text-gray-500 block leading-none">Phân Phối Chính Thức xTool</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/danh-muc" className="text-gray-700 hover:text-[#28BE44] font-medium transition-colors">Sản Phẩm</Link>
          <Link href="#ung-dung" className="text-gray-700 hover:text-[#28BE44] font-medium transition-colors">Ứng Dụng</Link>
          <Link href="#tinh-nang" className="text-gray-700 hover:text-[#28BE44] font-medium transition-colors">Tính Năng</Link>
          <Link href="#lien-he" className="text-gray-700 hover:text-[#28BE44] font-medium transition-colors">Liên Hệ</Link>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:0901234567" className="text-gray-600 text-sm font-medium">0901 234 567</a>
          <Link href="#lien-he" className="bg-[#28BE44] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1fa338] transition-colors text-sm">
            Nhận Báo Giá
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          <Link href="/danh-muc" className="block py-2.5 text-gray-700 font-medium border-b border-gray-50">Sản Phẩm</Link>
          <Link href="#ung-dung" className="block py-2.5 text-gray-700 font-medium border-b border-gray-50">Ứng Dụng</Link>
          <Link href="#tinh-nang" className="block py-2.5 text-gray-700 font-medium border-b border-gray-50">Tính Năng</Link>
          <Link href="#lien-he" className="block py-2.5 text-gray-700 font-medium border-b border-gray-50">Liên Hệ</Link>
          <a href="tel:0901234567" className="block py-2.5 text-[#28BE44] font-semibold">Gọi: 0901 234 567</a>
        </div>
      )}
    </nav>
  )
}
