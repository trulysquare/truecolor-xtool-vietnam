'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-orange-500">True Color</span>
          <span className="text-sm text-gray-500">| Phân Phối xTool</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/danh-muc" className="text-gray-700 hover:text-orange-500 font-medium">Sản Phẩm</Link>
          <Link href="#ung-dung" className="text-gray-700 hover:text-orange-500 font-medium">Ứng Dụng</Link>
          <Link href="#tinh-nang" className="text-gray-700 hover:text-orange-500 font-medium">Tính Năng</Link>
          <Link href="#lien-he" className="text-gray-700 hover:text-orange-500 font-medium">Liên Hệ</Link>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:0901234567" className="text-gray-700 font-medium">0901 234 567</a>
          <Link href="#lien-he" className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
            Nhận Báo Giá
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-2">
          <Link href="/danh-muc" className="block py-2 text-gray-700 font-medium">Sản Phẩm</Link>
          <Link href="#ung-dung" className="block py-2 text-gray-700 font-medium">Ứng Dụng</Link>
          <Link href="#tinh-nang" className="block py-2 text-gray-700 font-medium">Tính Năng</Link>
          <Link href="#lien-he" className="block py-2 text-gray-700 font-medium">Liên Hệ</Link>
          <a href="tel:0901234567" className="block py-2 text-orange-500 font-semibold">0901 234 567</a>
        </div>
      )}
    </nav>
  )
}
