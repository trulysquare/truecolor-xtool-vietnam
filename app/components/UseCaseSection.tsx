const useCases = [
  {
    icon: '🎁',
    title: 'Quà Tặng Cá Nhân Hóa',
    desc: 'Khắc tên, ngày kỷ niệm, hình ảnh lên gỗ, da, thủy tinh, kim loại để tạo quà tặng độc đáo và ý nghĩa.',
  },
  {
    icon: '🏭',
    title: 'Sản Xuất Công Nghiệp',
    desc: 'Khắc logo, mã vạch, số serial lên sản phẩm với tốc độ cao và độ chính xác tuyệt vời, phù hợp sản xuất hàng loạt.',
  },
  {
    icon: '🎨',
    title: 'Nghệ Thuật & Thủ Công',
    desc: 'Tạo ra tác phẩm nghệ thuật, đồ trang trí, mô hình tinh xảo từ nhiều loại vật liệu khác nhau.',
  },
  {
    icon: '📚',
    title: 'Giáo Dục & STEM',
    desc: 'Công cụ lý tưởng cho các trường học, trung tâm STEM, giúp học sinh trải nghiệm công nghệ tiên tiến.',
  },
  {
    icon: '🛍️',
    title: 'Kinh Doanh Nhỏ',
    desc: 'Tạo sản phẩm handmade độc quyền, bao bì thương hiệu, biển hiệu quảng cáo với chi phí thấp.',
  },
  {
    icon: '🔧',
    title: 'Phụ Tùng & Linh Kiện',
    desc: 'Cắt và khắc chính xác các linh kiện, phụ tùng cho ngành điện tử, cơ khí và sản xuất.',
  },
]

export default function UseCaseSection() {
  return (
    <section className="py-20 bg-white" id="ung-dung">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ứng Dụng Đa Dạng</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Máy khắc laser xTool phù hợp với hàng trăm ngành nghề và nhu cầu sử dụng khác nhau
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition">
              <div className="text-4xl mb-4">{uc.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{uc.title}</h3>
              <p className="text-gray-500">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
