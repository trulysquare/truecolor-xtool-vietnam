import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const allProducts = [
  {
    id: 'xtool-d1-pro',
    name: 'xTool D1 Pro 20W',
    category: 'Laser Diode',
    price: 'Liên hệ báo giá',
    desc: 'Máy khắc laser 20W hiệu suất cao, tốc độ 600mm/s, vùng làm việc 432x406mm. Phù hợp gia công gỗ, da, mica và nhiều vật liệu khác.',
    image: 'https://cdn.shopify.com/s/files/1/0578/9898/4803/files/xTool_D1_Pro_20W.jpg',
    slug: 'xtool-d1-pro',
    power: '20W',
    area: '432x406mm',
    speed: '600mm/s',
  },
  {
    id: 'xtool-s1',
    name: 'xTool S1',
    category: 'Laser Diode',
    price: 'Liên hệ báo giá',
    desc: 'Máy khắc laser diode tiên tiến nhất với vỏ bọc hoàn toàn, an toàn Class 1, phù hợp văn phòng và gia đình.',
    image: 'https://cdn.shopify.com/s/files/1/0578/9898/4803/files/xTool_S1.jpg',
    slug: 'xtool-s1',
    power: '20W / 40W',
    area: '498x319mm',
    speed: '600mm/s',
  },
  {
    id: 'xtool-m1-ultra',
    name: 'xTool M1 Ultra',
    category: 'Đa Năng',
    price: 'Liên hệ báo giá',
    desc: 'Thiết bị đa năng kết hợp laser và dao cắt, xử lý được hơn 300 loại vật liệu khác nhau.',
    image: 'https://cdn.shopify.com/s/files/1/0578/9898/4803/files/xTool_M1_Ultra.jpg',
    slug: 'xtool-m1-ultra',
    power: '20W Laser + Dao',
    area: '380x300mm',
    speed: '400mm/s',
  },
  {
    id: 'xtool-p2',
    name: 'xTool P2',
    category: 'Laser CO2',
    price: 'Liên hệ báo giá',
    desc: 'Máy khắc laser CO2 55W công suất cao, dành cho doanh nghiệp sản xuất và xưởng gia công chuyên nghiệp.',
    image: 'https://cdn.shopify.com/s/files/1/0578/9898/4803/files/xTool_P2.jpg',
    slug: 'xtool-p2',
    power: '55W CO2',
    area: '600x400mm',
    speed: '1000mm/s',
  },
  {
    id: 'xtool-f1',
    name: 'xTool F1',
    category: 'Laser Fiber',
    price: 'Liên hệ báo giá',
    desc: 'Máy khắc laser fiber siêu nhỏ gọn, tốc độ khắc cực nhanh, chuyên dụng cho kim loại và vật liệu cứng.',
    image: 'https://cdn.shopify.com/s/files/1/0578/9898/4803/files/xTool_F1.jpg',
    slug: 'xtool-f1',
    power: '10W Fiber',
    area: '115x115mm',
    speed: '4000mm/s',
  },
  {
    id: 'xtool-d1',
    name: 'xTool D1 10W',
    category: 'Laser Diode',
    price: 'Liên hệ báo giá',
    desc: 'Máy khắc laser 10W phổ thông, phù hợp người mới bắt đầu và sáng tạo cá nhân với giá thành hợp lý.',
    image: 'https://cdn.shopify.com/s/files/1/0578/9898/4803/files/xTool_D1.jpg',
    slug: 'xtool-d1',
    power: '10W',
    area: '432x406mm',
    speed: '400mm/s',
  },
]

export default function DanhMuc() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Danh Mục Sản Phẩm</h1>
            <p className="text-gray-500 text-lg">Khám phá toàn bộ dòng máy khắc laser xTool chính hãng tại True Color</p>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-3 mb-8">
              {['Tất Cả', 'Laser Diode', 'Laser CO2', 'Laser Fiber', 'Đa Năng'].map(cat => (
                <button key={cat} className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:border-orange-500 hover:text-orange-500 transition font-medium text-sm">
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProducts.map((p) => (
                <div key={p.id} className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition overflow-hidden">
                  <div className="relative aspect-square bg-gray-50">
                    <Image src={p.image} alt={p.name} fill className="object-cover" />
                    <span className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{p.name}</h2>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{p.desc}</p>
                    <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-center">
                      <div className="bg-gray-50 rounded-lg p-2">
                        <div className="font-bold text-gray-900">{p.power}</div>
                        <div className="text-gray-500">Công suất</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2">
                        <div className="font-bold text-gray-900">{p.area}</div>
                        <div className="text-gray-500">Vùng làm việc</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2">
                        <div className="font-bold text-gray-900">{p.speed}</div>
                        <div className="text-gray-500">Tốc độ</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-500 font-semibold">{p.price}</span>
                      <Link href={`/san-pham/${p.slug}`} className="bg-orange-500 text-white text-sm px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
                        Xem Chi Tiết
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
