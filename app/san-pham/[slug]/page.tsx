import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

type ProductSpec = { l: string; v: string }
type Product = {
  name: string; type: string; tagLine: string; longDesc: string;
  power: string; area: string; speed: string;
  specs: ProductSpec[]; features: string[];
  highlights: string[];
}
type ProductMap = Record<string, Product>

const productData: ProductMap = {
  'xtool-p3': {
    name: 'xTool P3', type: 'CO2 Laser — Flagship 80W',
    tagLine: 'Flagship 80W CO2 Laser Với Tự Động Hóa AI',
    longDesc: 'xTool P3 là máy khắc laser CO2 flagship mạnh nhất của xTool với công suất 80W, camera 16MP, tự động lấy nét bằng laser và AI. Vùng làm việc 600x400mm, tốc độ lên đến 1500mm/s. Đây là giải pháp hàng đầu cho doanh nghiệp sản xuất và xưởng gia công quy mô lớn.',
    power: '80W CO2', area: '600x400mm', speed: '1500mm/s',
    specs: [{l:'Công suất laser',v:'80W CO2 Tube'},{l:'Vùng làm việc',v:'600 x 400mm'},{l:'Tốc độ tối đa',v:'1500mm/s'},{l:'Độ chính xác',v:'±0.01mm'},{l:'Camera tích hợp',v:'16MP AI Camera'},{l:'Tự động lấy nét',v:'Có - Laser Autofocus'},{l:'Bước sóng',v:'10600nm CO2'},{l:'An toàn',v:'Class 2'},{l:'Kết nối',v:'USB, Wi-Fi, Ethernet'},{l:'Trọng lượng',v:'47kg'}],
    features: ['Công suất CO2 80W mạnh nhất dòng desktop','Camera AI 16MP định vị và nhận dạng vật liệu','Tự động lấy nét bằng laser - không cần thủ công','Tốc độ 1500mm/s tăng năng suất tối đa','Passthrough vật liệu dài không giới hạn','Cắt mica 15mm, gỗ 20mm chỉ 1 lần đi','Tương thích LightBurn, xTool Creative Space','Hỗ trợ module trục xoay khắc ly và ống'],
    highlights: ['AI Camera 16MP', '80W Flagship', 'Sản xuất công nghiệp'],
  },
  'xtool-p2s': {
    name: 'xTool P2S', type: 'CO2 Laser — 55W Desktop',
    tagLine: 'Máy Khắc CO2 Desktop Tốt Nhất Thế Giới',
    longDesc: 'xTool P2S là nâng cấp toàn diện của P2, nhanh hơn 60%, với camera 5MP tích hợp để định vị tự động. Công suất 55W, vùng 600x400mm, cắt mica 8mm và gỗ 15mm chỉ 1 lần đi. Phù hợp cho doanh nghiệp và xưởng sản xuất quy mô vừa.',
    power: '55W CO2', area: '600x400mm', speed: '1000mm/s',
    specs: [{l:'Công suất laser',v:'55W CO2 Tube'},{l:'Vùng làm việc',v:'600 x 400mm'},{l:'Tốc độ tối đa',v:'1000mm/s'},{l:'Độ chính xác',v:'±0.01mm'},{l:'Camera tích hợp',v:'5MP'},{l:'Làm mát',v:'Nước - tích hợp'},{l:'An toàn',v:'Class 2'},{l:'Kết nối',v:'USB, Wi-Fi, Ethernet'},{l:'Trọng lượng',v:'40kg'}],
    features: ['Nhanh hơn 60% so với P2 thế hệ trước','Camera 5MP định vị tự động chính xác','Hệ thống làm mát nước tích hợp sẵn','Cắt mica 8mm và gỗ 15mm chỉ 1 lần','Passthrough không giới hạn chiều dài','Module trục xoay cho đồ vật tròn','Tương thích LightBurn và xTool Creative Space'],
    highlights: ['Best Seller CO2', '55W + Camera', 'Doanh nghiệp'],
  },
  'xtool-s1': {
    name: 'xTool S1', type: 'Laser Diode — Class 1 Enclosed',
    tagLine: 'Laser Diode Đóng Gói Class 1 — An Toàn Tuyệt Đối',
    longDesc: 'xTool S1 là máy khắc laser diode đóng gói hoàn toàn đầu tiên đạt chuẩn Class 1 — an toàn tuyệt đối, không cần kính bảo hộ. Công suất 20W hoặc 40W, camera tích hợp, phù hợp sử dụng tại nhà, văn phòng và trường học.',
    power: '20W / 40W Diode', area: '498x319mm', speed: '600mm/s',
    specs: [{l:'Công suất laser',v:'20W hoặc 40W Diode'},{l:'Tùy chọn thêm',v:'1064nm IR Laser Kit'},{l:'Vùng làm việc',v:'498 x 319mm'},{l:'Tốc độ tối đa',v:'600mm/s'},{l:'Tiêu chuẩn an toàn',v:'Class 1 (Không cần kính)'},{l:'Camera tích hợp',v:'Có - Định vị tự động'},{l:'Lọc khói',v:'Tích hợp sẵn'},{l:'Kết nối',v:'USB, Wi-Fi, Camera App'}],
    features: ['An toàn Class 1 — không cần kính bảo hộ','Vỏ bọc kín hoàn toàn, không lo khói và tia laser','Camera định vị tự động, không cần căn chỉnh','40W cắt gỗ 10mm, da 5mm chỉ 1 lần đi','Module IR 1064nm cho gỗ tối màu và nhựa','Phát hiện lửa tự động, dừng khẩn cấp','Kiểm soát qua App xTool trên điện thoại'],
    highlights: ['Class 1 Safety', 'Văn phòng & Nhà', '40W Mạnh'],
  },
  'xtool-m1-ultra': {
    name: 'xTool M1 Ultra', type: '4-in-1 — Laser + Dao + Bút + Ép Nhiệt',
    tagLine: 'Thiết Bị Sáng Tạo 4-in-1 Đầu Tiên Thế Giới',
    longDesc: 'xTool M1 Ultra là thiết bị sáng tạo 4-in-1 đầu tiên trên thế giới tích hợp: Laser Khắc (20W) + Dao Cắt CNC + Bút Vẽ + Đầu Ép Nhiệt. Xử lý hơn 300 loại vật liệu trong một thiết bị duy nhất, phù hợp mọi nhu cầu sáng tạo.',
    power: '20W Laser + Dao CNC', area: '380x300mm', speed: '400mm/s',
    specs: [{l:'Laser',v:'20W Blue Diode'},{l:'Dao cắt CNC',v:'Vinyl, da, giấy, vải'},{l:'Bút vẽ',v:'Nhiều loại bút tương thích'},{l:'Ép nhiệt',v:'Chuyển in lên vải và áo'},{l:'Vùng làm việc',v:'380 x 300mm'},{l:'Tốc độ laser',v:'400mm/s'},{l:'An toàn',v:'Class 1'},{l:'Vật liệu',v:'300+ loại'}],
    features: ['4 chức năng trong 1 thiết bị — tiết kiệm không gian','Laser 20W khắc gỗ, da, kim loại, thủy tinh','Dao CNC cắt vinyl, giấy, da và vải chính xác','Vẽ bằng bút lên giấy, vải và nhiều bề mặt','Ép nhiệt chuyển hình in lên áo và túi vải','Hơn 300 loại vật liệu được hỗ trợ chính thức','Class 1 an toàn — dùng được tại nhà và văn phòng'],
    highlights: ['4-in-1 Đầu Tiên', '300+ Vật Liệu', 'Class 1 Safe'],
  },
  'xtool-f1': {
    name: 'xTool F1', type: 'Fiber Laser — Di Động',
    tagLine: 'Fiber Laser Di Động Nhỏ Nhất Và Nhanh Nhất Thế Giới',
    longDesc: 'xTool F1 kết hợp 2 loại laser trong một thiết bị nhỏ gọn chỉ 1.3kg: Fiber 2W 1064nm để khắc kim loại siêu mịn và Diode 1W 455nm để khắc gỗ, da. Tốc độ 4000mm/s, có pin tích hợp, phù hợp mang đi sự kiện và triển lãm.',
    power: '2W IR Fiber + 1W Blue', area: '115x115mm', speed: '4000mm/s',
    specs: [{l:'Laser Fiber',v:'2W 1064nm IR'},{l:'Laser Diode',v:'1W 455nm Blue'},{l:'Vùng làm việc',v:'115 x 115mm'},{l:'Tốc độ tối đa',v:'4000mm/s'},{l:'Trọng lượng',v:'1.3kg'},{l:'Pin tích hợp',v:'Có - Hoạt động không cần điện'},{l:'An toàn',v:'Class 1'},{l:'Kết nối',v:'USB-C, Wi-Fi, Bluetooth'}],
    features: ['Nhỏ gọn nhất thế giới — chỉ 1.3kg','Pin tích hợp, hoạt động độc lập không cần điện','Tốc độ 4000mm/s siêu nhanh cho fiber','Khắc kim loại mịn sắc nét: nhôm, thép, vàng, bạc','Khắc gỗ và da bằng laser diode xanh','Class 1 hoàn toàn an toàn — phù hợp mang đi sự kiện','Kết nối không dây qua App xTool trên điện thoại'],
    highlights: ['Di Động 1.3kg', 'Kim Loại Mịn', 'Sự Kiện & Triển Lãm'],
  },
  'xtool-f2': {
    name: 'xTool F2', type: 'Fiber Laser — 10W Di Động',
    tagLine: 'Fiber Laser Di Động Thế Hệ Mới — Mạnh Hơn F1 Tới 5 Lần',
    longDesc: 'xTool F2 là thế hệ tiếp theo của F1 với công suất fiber 10W mạnh hơn 5 lần, vùng làm việc 150x150mm lớn hơn và tốc độ 6000mm/s nhanh hơn. Vẫn giữ thiết kế di động gọn nhẹ với pin tích hợp và Class 1 an toàn.',
    power: '10W IR Fiber', area: '150x150mm', speed: '6000mm/s',
    specs: [{l:'Công suất fiber',v:'10W 1064nm IR'},{l:'Vùng làm việc',v:'150 x 150mm'},{l:'Tốc độ tối đa',v:'6000mm/s'},{l:'Trọng lượng',v:'2.5kg'},{l:'Pin tích hợp',v:'Có'},{l:'An toàn',v:'Class 1'},{l:'Khắc kim loại sâu',v:'0.05mm/pass'},{l:'Màn hình',v:'Cảm ứng tích hợp'}],
    features: ['Mạnh hơn 5 lần so với F1 (10W vs 2W)','Vùng 150x150mm lớn hơn F1 (115x115mm)','Tốc độ 6000mm/s nhanh nhất trong lớp','Khắc kim loại sâu tới 0.05mm mỗi lần đi','Di động hoàn toàn với pin tích hợp','Class 1 an toàn tuyệt đối','Màn hình cảm ứng điều khiển tại máy'],
    highlights: ['Mới Nhất 2024', '10W Fiber Mạnh', 'Di Động + Mạnh'],
  },
  'xtool-d1-pro': {
    name: 'xTool D1 Pro', type: 'Laser Diode — Open Frame',
    tagLine: 'Máy Khắc Laser Diode Mở Phổ Biến Nhất Thế Giới',
    longDesc: 'xTool D1 Pro là máy khắc laser diode khung mở phổ biến nhất thế giới. Khung nhôm cứng cáp, lắp ráp nhanh 15 phút, tốc độ 600mm/s và hỗ trợ công suất 10W đến 40W. Vùng làm việc 432x406mm có thể mở rộng lên 850x400mm.',
    power: '10W / 20W / 40W', area: '432x406mm', speed: '600mm/s',
    specs: [{l:'Công suất laser',v:'10W, 20W hoặc 40W Diode'},{l:'Vùng làm việc',v:'432 x 406mm'},{l:'Mở rộng vùng',v:'Lên đến 850 x 400mm'},{l:'Tốc độ tối đa',v:'600mm/s'},{l:'Độ chính xác',v:'0.01mm'},{l:'Kết nối',v:'USB, Wi-Fi, Bluetooth'},{l:'Trọng lượng',v:'4.4kg'},{l:'Lắp ráp',v:'15 phút không cần công cụ'}],
    features: ['Phổ biến nhất thế giới — cộng đồng người dùng lớn','Lắp ráp nhanh 15 phút không cần công cụ','Mở rộng vùng làm việc lên 850x400mm với kit','Module xoay khắc ly, cốc, bút và ống tròn','40W cắt gỗ 10mm và mica 5mm','Wi-Fi và Bluetooth kết nối không dây','Tương thích LightBurn, LaserGRBL, xTool Creative Space'],
    highlights: ['Phổ Biến Nhất', 'Mở Rộng Được', 'Người Mới & Maker'],
  },
  'xtool-metalfab': {
    name: 'xTool MetalFab', type: 'CNC Routing + Laser Welding',
    tagLine: 'Máy CNC Phay Và Hàn Laser Kim Loại Chuyên Nghiệp',
    longDesc: 'xTool MetalFab là giải pháp gia công kim loại chuyên nghiệp kết hợp CNC phay và hàn laser trong một máy. Xử lý nhôm, thép không gỉ, đồng và titan với độ chính xác cao. Phù hợp xưởng cơ khí và kim loại quy mô nhỏ và vừa.',
    power: '200W Laser + CNC', area: '300x300x60mm', speed: '300mm/s',
    specs: [{l:'Chức năng',v:'CNC Routing + Laser Welding'},{l:'Công suất hàn',v:'200W Laser Welder'},{l:'Vùng làm việc',v:'300 x 300 x 60mm (3D)'},{l:'Vật liệu',v:'Nhôm, thép, đồng, titan'},{l:'Độ chính xác CNC',v:'±0.03mm'},{l:'Kết nối',v:'USB, Wi-Fi'},{l:'Phần mềm',v:'xTool Creative Space'}],
    features: ['CNC phay kim loại với độ chính xác ±0.03mm','Hàn laser kim loại không tiêu thụ — bền đẹp','Không cần vật liệu hàn, không khói độc','Xử lý nhôm, thép không gỉ, đồng, titan','Phù hợp xưởng cơ khí nhỏ và medium','Màn hình cảm ứng điều khiển trực quan','Phần mềm xTool Creative Space tích hợp'],
    highlights: ['Kim Loại Chuyên Dụng', 'CNC + Hàn Laser', 'Chuyên Nghiệp'],
  },
  'xtool-wonderpress': {
    name: 'xTool WonderPress', type: 'DTF Printer — In Áo AI',
    tagLine: 'Máy In Chuyển Nhiệt DTF Tích Hợp AI — In Áo Chuyên Nghiệp',
    longDesc: 'xTool WonderPress là máy in chuyển nhiệt DTF thông minh tích hợp AI tạo mẫu thiết kế. In hình lên áo, túi, giày và mũ với chất lượng cao, bền màu, chịu giặt. Phù hợp kinh doanh in áo theo yêu cầu và quà tặng cá nhân hóa.',
    power: 'DTF 1200W Heating', area: '38x38cm', speed: 'N/A',
    specs: [{l:'Công nghệ',v:'DTF Direct-to-Film Transfer'},{l:'Vùng in',v:'38 x 38cm'},{l:'Nhiệt độ',v:'Lên đến 230°C'},{l:'Áp suất',v:'Điều chỉnh tự động'},{l:'AI Design',v:'Tạo mẫu tự động với AI'},{l:'Kết nối',v:'Wi-Fi, App xTool'},{l:'Vật liệu',v:'Áo, túi, vải, giày, mũ'}],
    features: ['In DTF lên áo chất lượng xuất sắc','AI tạo hàng trăm mẫu thiết kế trong vài giây','Không cần cắt chuyển, in trực tiếp lên film','Chịu giặt nhiều lần, màu bền và sắc nét','Phù hợp kinh doanh in áo theo yêu cầu','Kết nối điện thoại qua App xTool','Hàng ngàn mẫu thiết kế có sẵn trong thư viện'],
    highlights: ['In Áo DTF', 'AI Tự Động', 'Kinh Doanh In Ấn'],
  },
  'xtool-uv-laser': {
    name: 'xTool UV Laser', type: 'UV Laser 355nm',
    tagLine: 'Laser UV Khắc Tinh Tế Không Cháy Xém Vật Liệu',
    longDesc: 'Máy khắc laser UV của xTool sử dụng bước sóng 355nm, ít nhiệt hơn nhiều so với laser diode thông thường, không gây cháy xém vật liệu. Lý tưởng để khắc pha lê, thủy tinh, nhựa trong suốt và các vật liệu nhạy nhiệt khác.',
    power: '3W UV 355nm', area: '200x200mm', speed: '300mm/s',
    specs: [{l:'Loại laser',v:'UV 355nm Near-UV'},{l:'Công suất',v:'3W UV'},{l:'Vùng làm việc',v:'200 x 200mm'},{l:'Tốc độ tối đa',v:'300mm/s'},{l:'Nhiệt độ tại điểm',v:'Rất thấp — không cháy'},{l:'Vật liệu đặc biệt',v:'Pha lê, thủy tinh, nhựa trong'}],
    features: ['Không cháy xém vật liệu nhạy nhiệt','Khắc pha lê và thủy tinh siêu mịn và sắc nét','Khắc nhựa trong suốt không làm vàng hay cháy','Khắc giấy và carton cực tinh tế','Độ phân giải cực cao, chi tiết sắc nét','Phù hợp quà tặng cao cấp và đồ kỷ niệm'],
    highlights: ['Không Cháy Xém', 'Pha Lê & Thủy Tinh', 'Quà Tặng Cao Cấp'],
  },
}

const defaultProduct: Product = {
  name: 'Sản Phẩm xTool', type: 'Máy Khắc Laser',
  tagLine: 'Sản Phẩm xTool Chính Hãng Tại Việt Nam',
  longDesc: 'True Color cung cấp đầy đủ các dòng máy khắc laser xTool chính hãng với bảo hành 12 tháng và hỗ trợ kỹ thuật 24/7.',
  power: 'Liên hệ', area: 'Liên hệ', speed: 'Liên hệ',
  specs: [{l:'Bảo hành',v:'12 tháng chính hãng'},{l:'Hỗ trợ kỹ thuật',v:'24/7'}],
  features: ['Sản phẩm chính hãng từ xTool','Bảo hành 12 tháng','Hỗ trợ kỹ thuật 24/7','Giao hàng toàn quốc'],
  highlights: ['Chính Hãng', 'Bảo Hành 12T', '24/7 Hỗ Trợ'],
}

export default function SanPhamChiTiet({ params }: { params: { slug: string } }) {
  const product = productData[params.slug] || defaultProduct
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-gray-950 text-white py-6">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="text-sm text-gray-400 flex items-center gap-2">
              <Link href="/" className="hover:text-[#28BE44] transition-colors">Trang Chủ</Link>
              <span>/</span>
              <Link href="/danh-muc" className="hover:text-[#28BE44] transition-colors">Sản Phẩm</Link>
              <span>/</span>
              <span className="text-white">{product.name}</span>
            </nav>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border border-gray-200">
              <div className="text-center">
                <div className="text-7xl font-black text-gray-200 mb-2">xTool</div>
                <div className="text-3xl font-bold text-gray-400">{product.name.replace('xTool ','')}</div>
                <div className="text-gray-400 mt-2 text-lg">{product.type}</div>
              </div>
            </div>
            <div>
              <span className="inline-block bg-[#e8f9ec] text-[#28BE44] text-sm font-semibold px-3 py-1 rounded-full mb-4">
                {product.type}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-[#28BE44] font-semibold mb-4">{product.tagLine}</p>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">{product.longDesc}</p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                  <div className="font-bold text-gray-900 text-sm">{product.power}</div>
                  <div className="text-gray-500 text-xs mt-1">Công suất</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                  <div className="font-bold text-gray-900 text-sm">{product.area}</div>
                  <div className="text-gray-500 text-xs mt-1">Vùng làm việc</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                  <div className="font-bold text-gray-900 text-sm">{product.speed}</div>
                  <div className="text-gray-500 text-xs mt-1">Tốc độ tối đa</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {product.highlights.map((h, i) => (
                  <span key={i} className="bg-[#e8f9ec] text-[#28BE44] text-sm font-semibold px-3 py-1.5 rounded-lg">{h}</span>
                ))}
              </div>
              <div className="bg-[#e8f9ec] border border-[#28BE44]/20 rounded-xl p-4 mb-6">
                <div className="text-[#1fa338] font-bold mb-1 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  Nhà Phân Phối Chính Thức xTool Tại Việt Nam
                </div>
                <div className="text-green-800 text-sm">Bảo hành 12 tháng chính hãng · Hỗ trợ kỹ thuật 24/7 · Giao hàng toàn quốc · Kỹ thuật viên hỗ trợ tận nơi</div>
              </div>
              <div className="flex gap-3">
                <a href="tel:0901234567" className="flex-1 bg-[#28BE44] text-white px-6 py-4 rounded-xl font-bold text-center hover:bg-[#1fa338] transition-colors shadow-lg shadow-green-200">
                  Liên Hệ Báo Giá Ngay
                </a>
                <a href="https://zalo.me/0901234567" target="_blank" rel="noopener" className="border-2 border-[#28BE44] text-[#28BE44] px-6 py-4 rounded-xl font-bold hover:bg-[#28BE44] hover:text-white transition-colors">
                  Zalo
                </a>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Thông Số Kỹ Thuật</h2>
              <div className="space-y-0">
                {product.specs.map((spec, i) => (
                  <div key={i} className={`flex justify-between py-3 ${i < product.specs.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <span className="text-gray-500 text-sm">{spec.l}</span>
                    <span className="font-semibold text-gray-900 text-sm text-right max-w-[60%]">{spec.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Tính Năng Nổi Bật</h2>
              <ul className="space-y-3">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#28BE44] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm leading-relaxed">{f}</span>
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
