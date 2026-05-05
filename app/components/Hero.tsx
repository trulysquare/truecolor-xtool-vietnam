import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#28BE44] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#28BE44] rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#28BE44]/20 border border-[#28BE44]/30 text-[#28BE44] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#28BE44] rounded-full animate-pulse"></span>
            Nhà Phân Phối Chính Thức Tại Việt Nam
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Máy Khắc Laser<br />
            <span className="text-[#28BE44]">xTool</span> Chính Hãng
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            True Color phân phối toàn bộ dòng sản phẩm xTool tại Việt Nam — từ máy khắc laser diode, CO2, fiber đến máy cắt CNC và máy in DTF. Bảo hành 12 tháng, hỗ trợ kỹ thuật tận nơi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link href="/danh-muc" className="bg-[#28BE44] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1fa338] transition-colors shadow-lg shadow-green-900/30">
              Xem Tất Cả Sản Phẩm
            </Link>
            <Link href="#lien-he" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:border-[#28BE44] hover:text-[#28BE44] transition-colors">
              Liên Hệ Tư Vấn Miễn Phí
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { num: '15+', label: 'Dòng Sản Phẩm' },
              { num: '5,000+', label: 'Khách Hàng' },
              { num: '12 Tháng', label: 'Bảo Hành' },
              { num: '24/7', label: 'Hỗ Trợ KT' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold text-[#28BE44]">{item.num}</div>
                <div className="text-gray-400 text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
