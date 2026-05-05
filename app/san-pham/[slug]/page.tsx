import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const productData: Record<string, {
  name: string;
  category: string;
  desc: string;
  longDesc: string;
  image: string;
  power: string;
  area: string;
  speed: string;
  weight: string;
  specs: { label: string; value: string }[];
  features: string[];
}> = {
  'xtool-d1-pro': {
    name: 'xTool D1 Pro 20W',
    category: 'Laser Diode',
    desc: 'Máy khắc laser 20W hiệu suất cao, tốc độ 600mm/s',
    longDesc: 'xTool D1 Pro là máy khắc laser diode mạnh mẽ với công suất 20W, phù hợp cho cả người mới bắt đầu lẫn chuyên nghiệp. Máy sở hữu tốc độ khắc lên đến 600mm/s, độ chính xác 0.01mm, vùng làm việc rộng 432x406mm, có thể xử lý hầu hết các loại vật liệu phổ biến như gỗ, da, mica, vải, nhựa và nhiều hơn nữa.',
    image: 'https://cdn.shopify.com/s/files/1/0578/9898/4803/files/xTool_D1_Pro_20W.jpg',
    power: '20W',
    area: '432x406mm',
    speed: '600mm/s',
    weight: '4.4kg',
    specs: [
      { label: 'Công suất laser', value: '20W' },
      { label: 'Vùng làm việc', value: '432 x 406mm' },
      { label: 'Tốc độ khắc', value: 'Tối đa 600mm/s' },
      { label: 'Độ chính xác', value: '0.01mm' },
      { label: 'Bước sóng', value: '455nm' },
      { label: 'Kết nối', value: 'USB, Wi-Fi, Bluetooth' },
      { label: 'Trọng lượng', value: '4.4kg' },
    ],
    features: [
      'Tốc độ khắc cao gấp đôi thế hệ trước',
      'Hỗ trợ khắc trên 40 loại vật liệu',
      'Kết nối Wi-Fi và Bluetooth tiện lợi',
      'Phần mềm xTool Creative Space miễn phí',
      'Khung nhôm gia cố chắc chắn, bền bỉ',
      'Hỗ trợ module xoay và mở rộng diện tích',
    ],
  },
  'xtool-s1': {
    name: 'xTool S1',
    category: 'Laser Diode',
    desc: 'Máy khắc laser diode tiên tiến với vỏ bọc hoàn toàn an toàn Class 1',
    longDesc: 'xTool S1 là máy khắc laser đóng gói hoàn toàn đầu tiên của xTool, đạt tiêu chuẩn an toàn laser Class 1. Với thiết kế kín, bạn có thể sử dụng S1 trong văn phòng, nhà ở mà không lo khói bụi hay tia laser gây hại. Công suất 20W hoặc 40W cho hiệu suất vượt trội.',
    image: 'https://cdn.shopify.com/s/files/1/0578/9898/4803/files/xTool_S1.jpg',
    power: '20W / 40W',
    area: '498x319mm',
    speed: '600mm/s',
    weight: '22kg',
    specs: [
      { label: 'Công suất laser', value: '20W hoặc 40W' },
      { label: 'Vùng làm việc', value: '498 x 319mm' },
      { label: 'Tốc độ khắc', value: 'Tối đa 600mm/s' },
      { label: 'Tiêu chuẩn an toàn', value: 'Class 1' },
      { label: 'Bộ lọc khói', value: 'Tích hợp sẵn' },
      { label: 'Kết nối', value: 'USB, Wi-Fi, Camera tích hợp' },
      { label: 'Trọng lượng', value: '22kg' },
    ],
    features: [
      'Vỏ bọc hoàn toàn, an toàn Class 1',
      'Không cần kính bảo hộ khi sử dụng',
      'Camera tích hợp để xem trực tiếp',
      'Bộ lọc khói và mùi tích hợp',
      'Hoàn toàn phù hợp không gian văn phòng',
      'Hệ thống phát hiện lửa tự động',
    ],
  },
}

// Default product for unrecognized slugs
const defaultProduct = {
  name: 'Sản Phẩm xTool',
  category: 'Máy Khắc Laser',
  desc: 'Máy khắc laser xTool chính hãng tại Việt Nam',
  longDesc: 'True Color cung cấp đầy đủ các dòng máy khắc laser xTool chính hãng với bảo hành 12 tháng và hỗ trợ kỹ thuật 24/7.',
  image: 'https://cdn.shopify.com/s/files/1/0578/9898/4803/files/xTool_M1_Ultra.jpg',
  power: 'Liên hệ',
  area: 'Liên hệ',
  speed: 'Liên hệ',
  weight: 'Liên hệ',
  specs: [
    { label: 'Công suất laser', value: 'Liên hệ để biết thêm' },
    { label: 'Bảo hành', value: '12 tháng chính hãng' },
    { label: 'Hỗ trợ kỹ thuật', value: '24/7' },
  ],
  features: [
    'Sản phẩm chính hãng từ xTool',
    'Bảo hành 12 tháng',
    'Hỗ trợ kỹ thuật 24/7',
    'Giao hàng toàn quốc',
  ],
}

export default function SanPhamChiTiet({ params }: { params: { slug: string } }) {
  const product = productData[params.slug] || defaultProduct

  return (
    <>
      <Navbar />
      <main>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-orange-500 transition">Trang Chủ</Link>
            <span>/</span>
            <Link href="/danh-muc" className="hover:text-orange-500 transition">Sản Phẩm</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image src={product.image} alt={product.name} fill className="object-cover" priority />
            </div>
            <div>
              <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">{product.longDesc}</p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="font-bold text-gray-900">{product.power}</div>
                  <div className="text-gray-500 text-xs">Công suất</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="font-bold text-gray-900 text-sm">{product.area}</div>
                  <div className="text-gray-500 text-xs">Vùng làm việc</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="font-bold text-gray-900">{product.speed}</div>
                  <div className="text-gray-500 text-xs">Tốc độ</div>
                </div>
              </div>
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-6">
                <div className="text-orange-800 font-semibold mb-1">Nhà Phân Phối Chính Thức</div>
                <div className="text-orange-700 text-sm">Bảo hành 12 tháng chính hãng, hỗ trợ kỹ thuật 24/7, giao hàng toàn quốc</div>
              </div>
              <div className="flex gap-3">
                <a href="tel:0901234567" className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-xl font-bold text-center hover:bg-orange-600 transition">
                  Liên Hệ Báo Giá
                </a>
                <a href="https://zalo.me/0901234567" className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition">
                  Zalo
                </a>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Thông Số Kỹ Thuật</h2>
              <div className="space-y-3">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500">{spec.label}</span>
                    <span className="font-semibold text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tính Năng Nổi Bật</h2>
              <ul className="space-y-3">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
