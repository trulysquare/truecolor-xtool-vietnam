import Link from 'next/link'

const products = [
  {
    slug: 'xtool-p2s', name: 'xTool P2S', type: 'CO2 Laser',
    tagLabel: 'Best CO2 Desktop', tagColor: 'bg-blue-600',
    desc: 'Máy khắc CO2 55W desktop tốt nhất — nhanh hơn 60%, camera tích hợp, cắt mica 8mm và gỗ 15mm chỉ 1 lần đi.',
    power: '55W CO2', area: '600x400mm', speed: '1000mm/s',
  },
  {
    slug: 'xtool-s1', name: 'xTool S1', type: 'Laser Diode',
    tagLabel: 'Lựa Chọn Tốt Nhất', tagColor: 'bg-[#28BE44]',
    desc: 'Laser diode đóng gói Class 1 — an toàn tuyệt đối trong văn phòng và gia đình. Công suất 20W hoặc 40W.',
    power: '20W / 40W', area: '498x319mm', speed: '600mm/s',
  },
  {
    slug: 'xtool-p3', name: 'xTool P3', type: 'CO2 Laser',
    tagLabel: 'Flagship 80W', tagColor: 'bg-gray-900',
    desc: 'Flagship CO2 80W với tự động hóa AI — camera 16MP, tự động lấy nét, sản xuất công nghiệp quy mô lớn.',
    power: '80W CO2', area: '600x400mm', speed: '1500mm/s',
  },
  {
    slug: 'xtool-m1-ultra', name: 'xTool M1 Ultra', type: '4-in-1',
    tagLabel: '4-in-1 Đa Năng', tagColor: 'bg-red-600',
    desc: 'Thiết bị 4-in-1 đầu tiên thế giới: Laser + Dao Cắt + Bút Vẽ + Ép Nhiệt. Hơn 300 loại vật liệu.',
    power: '20W + Dao CNC', area: '380x300mm', speed: '400mm/s',
  },
  {
    slug: 'xtool-f1', name: 'xTool F1', type: 'Fiber Laser',
    tagLabel: 'Di Động + Kim Loại', tagColor: 'bg-amber-600',
    desc: 'Fiber laser di động nhỏ nhất thế giới — 1.3kg, có pin tích hợp, khắc kim loại siêu mịn tốc độ 4000mm/s.',
    power: '2W IR Fiber', area: '115x115mm', speed: '4000mm/s',
  },
  {
    slug: 'xtool-f2', name: 'xTool F2', type: 'Fiber Laser',
    tagLabel: 'Mới Nhất 2024', tagColor: 'bg-[#28BE44]',
    desc: 'Thế hệ mới của F1 — mạnh hơn 5x với 10W fiber, vùng 150x150mm và tốc độ 6000mm/s vượt trội.',
    power: '10W IR Fiber', area: '150x150mm', speed: '6000mm/s',
  },
  {
    slug: 'xtool-d1-pro', name: 'xTool D1 Pro', type: 'Laser Diode',
    tagLabel: 'Phổ Biến Nhất', tagColor: 'bg-[#28BE44]',
    desc: 'Máy khắc diode mở phổ biến nhất — dễ lắp ráp, mở rộng được, giá tốt cho người mới bắt đầu và maker.',
    power: '10W-40W', area: '432x406mm', speed: '600mm/s',
  },
  {
    slug: 'xtool-wonderpress', name: 'xTool WonderPress', type: 'DTF Printer',
    tagLabel: 'In Áo AI', tagColor: 'bg-purple-600',
    desc: 'Máy in chuyển nhiệt DTF tích hợp AI — in hình lên áo, túi, vải chất lượng cao với mẫu thiết kế AI tự động.',
    power: 'DTF Transfer', area: '38x38cm', speed: 'N/A',
  },
]

export default function ProductGrid() {
  return (
    <section className="py-20 bg-gray-50" id="san-pham">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#e8f9ec] text-[#28BE44] text-sm font-semibold px-3 py-1 rounded-full mb-3">Sản Phẩm Chính Hãng</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dòng Sản Phẩm xTool</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Từ laser diode di động đến CO2 công nghiệp — True Color phân phối toàn bộ dòng sản phẩm xTool tại Việt Nam
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div key={p.slug} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 group">
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="text-4xl font-black text-gray-300 mb-1">xTool</div>
                  <div className="text-lg font-bold text-gray-500">{p.name.replace('xTool ','')}</div>
                </div>
                <span className={`absolute top-3 left-3 ${p.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                  {p.tagLabel}
                </span>
                <span className="absolute top-3 right-3 bg-gray-800/80 text-white text-xs px-2 py-1 rounded-full">
                  {p.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">{p.desc}</p>
                <div className="grid grid-cols-3 gap-1.5 mb-4 text-xs text-center">
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="font-bold text-gray-900 text-xs leading-tight">{p.power}</div>
                    <div className="text-gray-400 text-xs">Công suất</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="font-bold text-gray-900 text-xs leading-tight">{p.area}</div>
                    <div className="text-gray-400 text-xs">Diện tích</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="font-bold text-gray-900 text-xs leading-tight">{p.speed}</div>
                    <div className="text-gray-400 text-xs">Tốc độ</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#28BE44] font-semibold text-sm">Liên hệ báo giá</span>
                  <Link href={`/san-pham/${p.slug}`} className="bg-[#28BE44] text-white text-sm px-4 py-2 rounded-lg font-semibold hover:bg-[#1fa338] transition-colors">
                    Chi Tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/danh-muc" className="inline-flex items-center gap-2 border-2 border-[#28BE44] text-[#28BE44] px-8 py-3 rounded-xl font-semibold hover:bg-[#28BE44] hover:text-white transition-colors">
            Xem Tất Cả Sản Phẩm
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
