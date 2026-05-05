import Link from 'next/link'
import Image from 'next/image'

const products = [
  {
    id: 'xtool-d1-pro',
    name: 'xTool D1 Pro',
    tag: 'Bán Chạy',
    tagColor: 'bg-orange-500',
    price: 'Liên hệ báo giá',
    desc: 'Máy khắc laser 20W/40W dành cho người mới bắt đầu và chuyên nghiệp. Tốc độ nhanh, độ chính xác cao.',
    image: 'https://cdn.shopify.com/s/files/1/0578/9898/4803/files/xTool_D1_Pro_20W.jpg',
    slug: 'xtool-d1-pro',
  },
  {
    id: 'xtool-s1',
    name: 'xTool S1',
    tag: 'Mới Nhất',
    tagColor: 'bg-blue-500',
    price: 'Liên hệ báo giá',
    desc: 'Máy khắc laser diode tiên tiến nhất với vỏ bọc hoàn toàn, an toàn tuyệt đối, phù hợp văn phòng và gia đình.',
    image: 'https://cdn.shopify.com/s/files/1/0578/9898/4803/files/xTool_S1.jpg',
    slug: 'xtool-s1',
  },
  {
    id: 'xtool-m1',
    name: 'xTool M1 Ultra',
    tag: 'Đa Năng',
    tagColor: 'bg-purple-500',
    price: 'Liên hệ báo giá',
    desc: 'Thiết bị đa năng kết hợp laser và dao cắt, xử lý được hơn 300 loại vật liệu khác nhau.',
    image: 'https://cdn.shopify.com/s/files/1/0578/9898/4803/files/xTool_M1_Ultra.jpg',
    slug: 'xtool-m1-ultra',
  },
  {
    id: 'xtool-p2',
    name: 'xTool P2',
    tag: 'Chuyên Nghiệp',
    tagColor: 'bg-green-500',
    price: 'Liên hệ báo giá',
    desc: 'Máy khắc laser CO2 55W công suất cao, dành cho doanh nghiệp sản xuất và xưởng gia công chuyên nghiệp.',
    image: 'https://cdn.shopify.com/s/files/1/0578/9898/4803/files/xTool_P2.jpg',
    slug: 'xtool-p2',
  },
]

export default function ProductGrid() {
  return (
    <section className="py-20 bg-gray-50" id="san-pham">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sản Phẩm Nổi Bật</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Dòng máy khắc laser xTool phù hợp với mọi nhu cầu, từ cá nhân đến doanh nghiệp lớn
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden group">
              <div className="relative aspect-square bg-gray-100">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <span className={`absolute top-3 left-3 ${p.tagColor} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-500 font-semibold text-sm">{p.price}</span>
                  <Link href={`/san-pham/${p.slug}`} className="bg-orange-500 text-white text-sm px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
                    Xem Chi Tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/danh-muc" className="inline-block border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition">
            Xem Tất Cả Sản Phẩm
          </Link>
        </div>
      </div>
    </section>
  )
}
