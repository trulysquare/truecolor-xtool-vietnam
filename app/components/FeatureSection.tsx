const features = [
  {
    title: 'Công Nghệ Laser Đa Dạng',
    desc: 'Từ diode 455nm, CO2 10600nm, fiber 1064nm đến UV 355nm — xTool có giải pháp laser cho mọi vật liệu và nhu cầu.',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'AI & Camera Thông Minh',
    desc: 'Phần mềm xTool Creative Space tích hợp AI tạo thiết kế tự động. Camera tích hợp định vị chính xác, không cần căn chỉnh thủ công.',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'An Toàn Chuẩn Class 1',
    desc: 'Dòng S1, F1, F2, M1 Ultra đều đạt tiêu chuẩn Class 1 — không cần kính bảo hộ, an toàn sử dụng tại nhà và văn phòng.',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: '300+ Loại Vật Liệu',
    desc: 'Gỗ, da, mica, vải, kim loại, thủy tinh, pha lê, gốm sứ, nhựa, giấy và hơn 300 vật liệu khác được hỗ trợ đầy đủ.',
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
]

export default function FeatureSection() {
  return (
    <section className="py-20 bg-gray-950 text-white" id="tinh-nang">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#28BE44]/20 border border-[#28BE44]/30 text-[#28BE44] text-sm font-semibold px-3 py-1 rounded-full mb-3">Công Nghệ xTool</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tại Sao Chọn xTool?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Công nghệ tiên tiến, thiết kế thông minh và cam kết an toàn cho mọi người dùng
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-800 hover:border-[#28BE44]/30">
              <div className="w-12 h-12 bg-[#28BE44] rounded-xl flex items-center justify-center mb-5">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8">
          <h3 className="text-xl font-bold mb-6 text-center">So Sánh Các Dòng Máy xTool</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 pr-4 text-gray-400">Dòng Máy</th>
                  <th className="text-center py-3 px-3 text-gray-400">Công Suất</th>
                  <th className="text-center py-3 px-3 text-gray-400">An Toàn</th>
                  <th className="text-center py-3 px-3 text-gray-400">Vật Liệu Đặc Biệt</th>
                  <th className="text-center py-3 px-3 text-gray-400">Phù Hợp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr><td className="py-3 pr-4 font-semibold text-[#28BE44]">P3 / P2S</td><td className="text-center px-3">55-80W CO2</td><td className="text-center px-3">Class 2</td><td className="text-center px-3">Gỗ dày, mica, nhựa</td><td className="text-center px-3">Doanh nghiệp</td></tr>
                <tr><td className="py-3 pr-4 font-semibold text-[#28BE44]">S1</td><td className="text-center px-3">20-40W Diode</td><td className="text-center px-3 text-[#28BE44]">Class 1</td><td className="text-center px-3">Đa năng</td><td className="text-center px-3">Nhà, văn phòng</td></tr>
                <tr><td className="py-3 pr-4 font-semibold text-[#28BE44]">F1 / F2</td><td className="text-center px-3">2-10W Fiber</td><td className="text-center px-3 text-[#28BE44]">Class 1</td><td className="text-center px-3">Kim loại siêu mịn</td><td className="text-center px-3">Di động, sự kiện</td></tr>
                <tr><td className="py-3 pr-4 font-semibold text-[#28BE44]">M1 Ultra</td><td className="text-center px-3">20W + Dao</td><td className="text-center px-3 text-[#28BE44]">Class 1</td><td className="text-center px-3">300+ vật liệu</td><td className="text-center px-3">Sáng tạo đa năng</td></tr>
                <tr><td className="py-3 pr-4 font-semibold text-[#28BE44]">D1 Pro</td><td className="text-center px-3">10-40W Diode</td><td className="text-center px-3">Class 4</td><td className="text-center px-3">Gỗ, da, mica</td><td className="text-center px-3">Người mới, maker</td></tr>
                <tr><td className="py-3 pr-4 font-semibold text-[#28BE44]">WonderPress</td><td className="text-center px-3">DTF Transfer</td><td className="text-center px-3 text-[#28BE44]">An toàn</td><td className="text-center px-3">Vải, áo, giày</td><td className="text-center px-3">In ấn kinh doanh</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
