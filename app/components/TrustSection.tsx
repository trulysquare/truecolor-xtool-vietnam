const stats = [
  { number: '5,000+', label: 'Khách Hàng Hài Lòng' },
  { number: '15+', label: 'Dòng Sản Phẩm xTool' },
  { number: '24/7', label: 'Hỗ Trợ Kỹ Thuật' },
  { number: '12 Tháng', label: 'Bảo Hành Chính Hãng' },
]

const testimonials = [
  {
    name: 'Nguyễn Văn An', role: 'Chủ xưởng quà tặng',
    text: 'Máy xTool P2S đã giúp tôi tăng năng suất gấp 3 lần. Camera tích hợp rất tiện, không cần căn chỉnh thủ công nữa. True Color hỗ trợ cài đặt và hướng dẫn rất tận tình.',
    product: 'xTool P2S',
  },
  {
    name: 'Trần Thị Minh', role: 'Chủ shop in áo online',
    text: 'WonderPress giúp tôi mở rộng thêm dịch vụ in áo DTF. AI tạo mẫu rất nhanh, chất lượng in xuất sắc, khách hàng rất hài lòng. Doanh thu tăng đáng kể sau 3 tháng.',
    product: 'xTool WonderPress',
  },
  {
    name: 'Lê Hoàng Phúc', role: 'Maker & Content Creator',
    text: 'xTool F1 là thiết bị tuyệt vời nhất tôi từng dùng. Nhỏ gọn, có pin, khắc kim loại siêu mịn — tôi mang đến mọi sự kiện và triển lãm để demo. Mọi người đều ấn tượng.',
    product: 'xTool F1',
  },
]

export default function TrustSection() {
  return (
    <section className="py-20 bg-[#f8fffe]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-[#28BE44] mb-2">{s.number}</div>
              <div className="text-gray-600 font-medium text-sm">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="text-center mb-10">
          <span className="inline-block bg-[#e8f9ec] text-[#28BE44] text-sm font-semibold px-3 py-1 rounded-full mb-3">Đánh Giá Thực Tế</span>
          <h2 className="text-3xl font-bold text-gray-900">Khách Hàng Nói Gì Về Chúng Tôi</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#28BE44]/30 transition-colors">
              <div className="flex items-center gap-1 mb-3">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-xs text-[#28BE44] font-semibold bg-[#e8f9ec] px-2 py-0.5 rounded-full">{t.product}</span>
              </div>
              <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">"{t.text}"</p>
              <div>
                <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                <div className="text-gray-500 text-xs">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-white rounded-2xl border border-gray-100 p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">True Color — Nhà Phân Phối Chính Thức xTool Tại Việt Nam</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-[#28BE44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div className="font-semibold text-gray-900">Hàng Chính Hãng</div>
              <div className="text-gray-500 text-xs">100% nhập khẩu trực tiếp từ xTool</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-[#28BE44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div className="font-semibold text-gray-900">Giao Hàng Nhanh</div>
              <div className="text-gray-500 text-xs">Giao toàn quốc trong 3-5 ngày</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-[#28BE44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <div className="font-semibold text-gray-900">Hỗ Trợ Cài Đặt</div>
              <div className="text-gray-500 text-xs">Kỹ thuật viên hỗ trợ tận nơi</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-[#28BE44]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              <div className="font-semibold text-gray-900">Bảo Hành 12 Tháng</div>
              <div className="text-gray-500 text-xs">Đổi mới trong 30 ngày nếu lỗi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
