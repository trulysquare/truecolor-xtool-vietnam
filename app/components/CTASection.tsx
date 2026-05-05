export default function CTASection() {
  return (
    <section className="py-20 bg-[#28BE44] text-white" id="lien-he">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Sẵn Sàng Bắt Đầu Hành Trình Sáng Tạo?
        </h2>
        <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
          Liên hệ ngay hôm nay để được tư vấn miễn phí và nhận báo giá tốt nhất.
          Đội ngũ kỹ thuật của True Color luôn sẵn sàng hỗ trợ bạn 24/7.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="tel:0901234567" className="bg-white text-[#28BE44] px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors shadow-lg">
            Gọi Ngay: 0901 234 567
          </a>
          <a href="https://zalo.me/0901234567" target="_blank" rel="noopener" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-500 transition-colors">
            Nhắn Qua Zalo
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
          <div className="bg-green-500/40 border border-green-400/30 rounded-xl p-5">
            <div className="font-bold text-lg mb-1">Showroom Hà Nội</div>
            <div className="text-green-100 text-sm">123 Đường Láng, Đống Đa, Hà Nội</div>
            <div className="text-green-200 text-sm mt-1 font-medium">Giờ mở cửa: 8h - 18h (T2-T7)</div>
          </div>
          <div className="bg-green-500/40 border border-green-400/30 rounded-xl p-5">
            <div className="font-bold text-lg mb-1">Showroom TP. HCM</div>
            <div className="text-green-100 text-sm">456 Nguyễn Văn Linh, Quận 7, TP. HCM</div>
            <div className="text-green-200 text-sm mt-1 font-medium">Giờ mở cửa: 8h - 18h (T2-T7)</div>
          </div>
          <div className="bg-green-500/40 border border-green-400/30 rounded-xl p-5">
            <div className="font-bold text-lg mb-1">Hỗ Trợ Online 24/7</div>
            <div className="text-green-100 text-sm">Zalo: 0901 234 567</div>
            <div className="text-green-100 text-sm">Email: info@truecolor.vn</div>
            <div className="text-green-200 text-sm mt-1 font-medium">Kỹ thuật viên hỗ trợ tận nơi</div>
          </div>
        </div>
      </div>
    </section>
  )
}
