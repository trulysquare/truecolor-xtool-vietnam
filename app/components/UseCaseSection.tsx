const useCases = [
  { icon: '🎁', title: 'Quà Tặng Cá Nhân Hóa', desc: 'Khắc tên, ngày kỷ niệm, hình ảnh lên gỗ, da, thủy tinh, kim loại tạo quà tặng độc đáo và ý nghĩa.' },
  { icon: '🏭', title: 'Sản Xuất Công Nghiệp', desc: 'Khắc logo, mã vạch, số serial lên sản phẩm với tốc độ cao và độ chính xác tuyệt vời cho sản xuất hàng loạt.' },
  { icon: '👕', title: 'In Ấn May Mặc', desc: 'In hình DTF lên áo, túi, giày với WonderPress — chất lượng cao, bền màu, phù hợp kinh doanh in áo theo yêu cầu.' },
  { icon: '🎨', title: 'Nghệ Thuật & Thủ Công', desc: 'Tạo ra tác phẩm nghệ thuật, đồ trang trí, mô hình tinh xảo từ gỗ, da, mica và nhiều vật liệu khác.' },
  { icon: '🔩', title: 'Gia Công Kim Loại', desc: 'Khắc và hàn kim loại chính xác với xTool MetalFab — nhôm, thép không gỉ, đồng và nhiều hơn nữa.' },
  { icon: '💎', title: 'Quà Tặng Cao Cấp', desc: 'Khắc pha lê, thủy tinh siêu mịn không cháy xém bằng laser UV — phù hợp quà tặng cao cấp và đồ kỷ niệm.' },
  { icon: '📚', title: 'Giáo Dục & STEM', desc: 'Công cụ lý tưởng cho trường học và trung tâm STEM — giúp học sinh trải nghiệm công nghệ tiên tiến thực tế.' },
  { icon: '🛍️', title: 'Kinh Doanh Nhỏ', desc: 'Tạo sản phẩm handmade độc quyền, bao bì thương hiệu, biển hiệu quảng cáo với chi phí thấp, lợi nhuận cao.' },
  { icon: '🏗️', title: 'Kiến Trúc & Mô Hình', desc: 'Cắt chính xác các chi tiết mô hình kiến trúc, đồ dùng nội thất mini, mô hình 3D phức tạp.' },
]

export default function UseCaseSection() {
  return (
    <section className="py-20 bg-white" id="ung-dung">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#e8f9ec] text-[#28BE44] text-sm font-semibold px-3 py-1 rounded-full mb-3">Ứng Dụng Thực Tế</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ứng Dụng Đa Dạng</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Dòng máy xTool phù hợp với hàng trăm ngành nghề và nhu cầu — từ cá nhân sáng tạo đến doanh nghiệp sản xuất
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-[#28BE44]/30 hover:shadow-md transition-all group">
              <div className="text-4xl mb-4">{uc.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#28BE44] transition-colors">{uc.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
