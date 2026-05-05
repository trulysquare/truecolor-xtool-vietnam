export default function CTASection() {
  return (
    <section className="py-20 bg-orange-500 text-white" id="lien-he">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Sẵn Sàng Bắt Đầu Hành Trình Sáng Tạo?
        </h2>
        <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto">
          Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và nhận báo giá tốt nhất.
          Đội ngũ chuyên gia của True Color luôn sẵn sàng hỗ trợ bạn.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a href="tel:0901234567" className="bg-white text-orange-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition">
            Gọi Ngay: 0901 234 567
          </a>
          <a href="mailto:info@truecolor.vn" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition">
            Email Tư Vấn
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-orange-600 rounded-xl p-5">
            <div className="font-bold text-lg mb-1">Showroom Hà Nội</div>
            <div className="text-orange-200 text-sm">123 Đường Láng, Đống Đa, Hà Nội</div>
            <div className="text-orange-200 text-sm mt-1">Giờ mở cửa: 8h - 18h</div>
          </div>
          <div className="bg-orange-600 rounded-xl p-5">
            <div className="font-bold text-lg mb-1">Showroom TP. HCM</div>
            <div className="text-orange-200 text-sm">456 Nguyễn Văn Linh, Quận 7, TP. HCM</div>
            <div className="text-orange-200 text-sm mt-1">Giờ mở cửa: 8h - 18h</div>
          </div>
          <div className="bg-orange-600 rounded-xl p-5">
            <div className="font-bold text-lg mb-1">Hỗ Trợ Online</div>
            <div className="text-orange-200 text-sm">Zalo: 0901 234 567</div>
            <div className="text-orange-200 text-sm mt-1">Email: info@truecolor.vn</div>
          </div>
        </div>
      </div>
    </section>
  )
}
