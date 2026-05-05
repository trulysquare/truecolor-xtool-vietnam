import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#28BE44] rounded flex items-center justify-center">
                <span className="text-white font-black text-sm">X</span>
              </div>
              <span className="text-white font-bold text-lg">True Color</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Nhà phân phối chính thức của xTool tại Việt Nam. Cam kết hàng chính hãng, bảo hành đầy đủ và hỗ trợ kỹ thuật tận nơi.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#28BE44] transition-colors text-xs font-bold text-white">f</a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#28BE44] transition-colors text-xs font-bold text-white">Z</a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#28BE44] transition-colors text-xs font-bold text-white">YT</a>
            </div>
          </div>
          <div>
            <div className="text-white font-semibold mb-4">Dòng Sản Phẩm</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/san-pham/xtool-p3" className="hover:text-[#28BE44] transition-colors">xTool P3 — CO2 80W</Link></li>
              <li><Link href="/san-pham/xtool-p2s" className="hover:text-[#28BE44] transition-colors">xTool P2S — CO2 55W</Link></li>
              <li><Link href="/san-pham/xtool-s1" className="hover:text-[#28BE44] transition-colors">xTool S1 — Diode 40W</Link></li>
              <li><Link href="/san-pham/xtool-m1-ultra" className="hover:text-[#28BE44] transition-colors">xTool M1 Ultra — 4-in-1</Link></li>
              <li><Link href="/san-pham/xtool-f1" className="hover:text-[#28BE44] transition-colors">xTool F1 — Fiber Di Động</Link></li>
              <li><Link href="/san-pham/xtool-f2" className="hover:text-[#28BE44] transition-colors">xTool F2 — Fiber 10W</Link></li>
              <li><Link href="/san-pham/xtool-d1-pro" className="hover:text-[#28BE44] transition-colors">xTool D1 Pro — Diode</Link></li>
              <li><Link href="/danh-muc" className="text-[#28BE44] font-semibold hover:text-green-400 transition-colors">Xem Tất Cả &rarr;</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-4">Hỗ Trợ</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#" className="hover:text-[#28BE44] transition-colors">Hướng Dẫn Sử Dụng</Link></li>
              <li><Link href="#" className="hover:text-[#28BE44] transition-colors">Chính Sách Bảo Hành</Link></li>
              <li><Link href="#" className="hover:text-[#28BE44] transition-colors">So Sánh Sản Phẩm</Link></li>
              <li><Link href="#" className="hover:text-[#28BE44] transition-colors">Câu Hỏi Thường Gặp</Link></li>
              <li><Link href="#lien-he" className="hover:text-[#28BE44] transition-colors">Liên Hệ Kỹ Thuật</Link></li>
              <li><Link href="#" className="hover:text-[#28BE44] transition-colors">Video Hướng Dẫn</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-4">Liên Hệ</div>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2"><span className="text-[#28BE44] mt-0.5">📞</span><span>0901 234 567</span></li>
              <li className="flex items-start gap-2"><span className="text-[#28BE44] mt-0.5">✉️</span><span>info@truecolor.vn</span></li>
              <li className="flex items-start gap-2"><span className="text-[#28BE44] mt-0.5">💬</span><span>Zalo: 0901 234 567</span></li>
              <li className="flex items-start gap-2"><span className="text-[#28BE44] mt-0.5">📍</span><span>Hà Nội & TP. HCM</span></li>
              <li className="flex items-start gap-2"><span className="text-[#28BE44] mt-0.5">🕐</span><span>T2-T7: 8h00 - 18h00</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm gap-3">
          <div>© 2024 True Color. Nhà phân phối chính thức xTool tại Việt Nam.</div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#28BE44] transition-colors">Chính Sách Bảo Mật</Link>
            <Link href="#" className="hover:text-[#28BE44] transition-colors">Điều Khoản</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
