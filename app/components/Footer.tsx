import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-white font-bold text-xl mb-3">True Color</div>
            <p className="text-sm leading-relaxed">
              Nhà phân phối chính thức của xTool tại Việt Nam. Cam kết mang đến sản phẩm chính hãng, chất lượng cao với dịch vụ hậu mãi tốt nhất.
            </p>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Sản Phẩm</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/san-pham/xtool-d1-pro" className="hover:text-orange-400 transition">xTool D1 Pro</Link></li>
              <li><Link href="/san-pham/xtool-s1" className="hover:text-orange-400 transition">xTool S1</Link></li>
              <li><Link href="/san-pham/xtool-m1-ultra" className="hover:text-orange-400 transition">xTool M1 Ultra</Link></li>
              <li><Link href="/san-pham/xtool-p2" className="hover:text-orange-400 transition">xTool P2</Link></li>
              <li><Link href="/danh-muc" className="hover:text-orange-400 transition">Xem Tất Cả</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Hỗ Trợ</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-orange-400 transition">Hướng Dẫn Sử Dụng</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition">Chính Sách Bảo Hành</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition">Câu Hỏi Thường Gặp</Link></li>
              <li><Link href="#lien-he" className="hover:text-orange-400 transition">Liên Hệ Kỹ Thuật</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Liên Hệ</div>
            <ul className="space-y-2 text-sm">
              <li>Điện thoại: 0901 234 567</li>
              <li>Email: info@truecolor.vn</li>
              <li>Zalo: 0901 234 567</li>
              <li>Thứ 2 - Thứ 7: 8h - 18h</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div>© 2024 True Color. Nhà phân phối chính thức xTool tại Việt Nam.</div>
          <div className="flex gap-4 mt-3 md:mt-0">
            <Link href="#" className="hover:text-orange-400 transition">Chính Sách Bảo Mật</Link>
            <Link href="#" className="hover:text-orange-400 transition">Điều Khoản Sử Dụng</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
