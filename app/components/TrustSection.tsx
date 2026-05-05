const stats = [
  { number: '5,000+', label: 'Khách Hàng Hài Lòng' },
  { number: '10+', label: 'Năm Kinh Nghiệm' },
  { number: '24/7', label: 'Hỗ Trợ Kỹ Thuật' },
  { number: '12 Tháng', label: 'Bảo Hành Chính Hãng' },
]

const testimonials = [
  {
    name: 'Nguyễn Văn An',
    role: 'Chủ xưởng quà tặng',
    text: 'Máy xTool D1 Pro đã giúp tôi tăng năng suất gấp 3 lần. Chất lượng khắc rất sắc nét, True Color hỗ trợ cài đặt và hướng dẫn rất tận tình.',
  },
  {
    name: 'Trần Thị Minh',
    role: 'Giáo viên STEM',
    text: 'Tôi đã mua máy xTool S1 cho phòng thực hành của trường. Học sinh rất hứng thú, phần mềm dễ học và máy hoạt động rất ổn định.',
  },
  {
    name: 'Lê Hoàng Phúc',
    role: 'Chủ doanh nghiệp in ấn',
    text: 'xTool P2 là khoản đầu tư tốt nhất tôi từng thực hiện. Công suất mạnh, tốc độ nhanh, phù hợp để sản xuất hàng loạt với chi phí thấp.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-3xl font-bold text-orange-500 mb-2">{s.number}</div>
              <div className="text-gray-600 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Khách Hàng Nói Gì Về Chúng Tôi</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
              <div>
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="text-gray-500 text-sm">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
