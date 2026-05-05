import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Nhà Phân Phối Chính Thức Tại Việt Nam
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Máy Khắc &amp; Cắt Laser<br />
            <span className="text-orange-500">xTool</span> Chính Hãng
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            True Color mang đến giải pháp khắc laser hàng đầu cho doanh nghiệp và cá nhân tại Việt Nam.
            Bảo hành 12 tháng, hỗ trợ kỹ thuật 24/7, giao hàng toàn quốc.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/danh-muc" className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition text-center">
              Xem Sản Phẩm
            </Link>
            <Link href="#lien-he" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition text-center">
              Liên Hệ Tư Vấn
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Bảo hành 12 tháng
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Hỗ trợ 24/7
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Giao hàng toàn quốc
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-800">
            <Image
              src="https://cdn.shopify.com/s/files/1/0578/9898/4803/files/xTool_M1_Ultra.jpg"
              alt="Máy khắc laser xTool"
              width={600}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
