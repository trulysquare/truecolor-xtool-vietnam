import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const allProducts = [
  // P Series
  { slug:'xtool-p3', name:'xTool P3', series:'P Series', type:'CO2 Laser', tagColor:'bg-gray-900',
    desc:'Flagship CO2 80W với camera 16MP và tự động hóa AI. Sản xuất công nghiệp quy mô lớn.',
    power:'80W CO2', area:'600x400mm', speed:'1500mm/s', badge:'Flagship' },
  { slug:'xtool-p2s', name:'xTool P2S', series:'P Series', type:'CO2 Laser', tagColor:'bg-blue-600',
    desc:'CO2 55W desktop tốt nhất — nhanh hơn 60%, camera 5MP, cắt mica 8mm và gỗ 15mm 1 lần đi.',
    power:'55W CO2', area:'600x400mm', speed:'1000mm/s', badge:'Best CO2' },
  // S Series
  { slug:'xtool-s1', name:'xTool S1', series:'S Series', type:'Laser Diode', tagColor:'bg-[#28BE44]',
    desc:'Laser diode đóng gói Class 1 — an toàn cho nhà và văn phòng. 20W hoặc 40W tùy chọn.',
    power:'20W / 40W', area:'498x319mm', speed:'600mm/s', badge:'Class 1 Safe' },
  { slug:'xtool-s1-ir-kit', name:'xTool S1 + IR Kit', series:'S Series', type:'Laser Diode', tagColor:'bg-purple-700',
    desc:'xTool S1 với module 1064nm IR — khắc rõ nét trên gỗ tối màu, nhựa đen và vật liệu phản chiếu.',
    power:'20W + 1064nm IR', area:'498x319mm', speed:'600mm/s', badge:'Gỗ Tối Màu' },
  // M Series
  { slug:'xtool-m1-ultra', name:'xTool M1 Ultra', series:'M Series', type:'4-in-1 Đa Năng', tagColor:'bg-red-600',
    desc:'4-in-1 đầu tiên thế giới: Laser + Dao Cắt + Bút Vẽ + Ép Nhiệt. Hơn 300 loại vật liệu.',
    power:'20W + Dao CNC', area:'380x300mm', speed:'400mm/s', badge:'4-in-1' },
  // F Series
  { slug:'xtool-f2', name:'xTool F2', series:'F Series', type:'Fiber Laser', tagColor:'bg-[#28BE44]',
    desc:'Fiber di động thế hệ mới — 10W, vùng 150x150mm, tốc độ 6000mm/s. Mạnh hơn F1 tới 5 lần.',
    power:'10W IR Fiber', area:'150x150mm', speed:'6000mm/s', badge:'Mới 2024' },
  { slug:'xtool-f1', name:'xTool F1', series:'F Series', type:'Fiber Laser', tagColor:'bg-amber-600',
    desc:'Fiber laser di động nhỏ nhất thế giới — 1.3kg, có pin, khắc kim loại tốc độ 4000mm/s.',
    power:'2W IR Fiber', area:'115x115mm', speed:'4000mm/s', badge:'Di Động' },
  // D Series
  { slug:'xtool-d1-pro', name:'xTool D1 Pro', series:'D Series', type:'Laser Diode', tagColor:'bg-[#28BE44]',
    desc:'Laser diode mở phổ biến nhất — khung nhôm cứng, dễ lắp ráp, mở rộng được. 10-40W.',
    power:'10W / 20W / 40W', area:'432x406mm', speed:'600mm/s', badge:'Phổ Biến Nhất' },
  // MetalFab
  { slug:'xtool-metalfab', name:'xTool MetalFab', series:'MetalFab', type:'CNC + Laser Welder', tagColor:'bg-gray-700',
    desc:'CNC phay + hàn laser kim loại chuyên nghiệp — nhôm, thép không gỉ, đồng với độ chính xác cao.',
    power:'200W Laser + CNC', area:'300x300x60mm', speed:'300mm/s', badge:'Kim Loại' },
  // DTF
  { slug:'xtool-wonderpress', name:'xTool WonderPress', series:'WonderPress', type:'DTF Printer', tagColor:'bg-purple-600',
    desc:'Máy in DTF tích hợp AI — in hình lên áo, túi, giày chất lượng cao với mẫu AI tự động.',
    power:'DTF Transfer', area:'38x38cm', speed:'N/A', badge:'In Áo AI' },
  // UV Laser
  { slug:'xtool-uv-laser', name:'xTool UV Laser', series:'UV Series', type:'UV Laser', tagColor:'bg-indigo-600',
    desc:'Laser UV 355nm không cháy xém — khắc pha lê, thủy tinh và nhựa trong suốt siêu tinh tế.',
    power:'3W UV 355nm', area:'200x200mm', speed:'300mm/s', badge:'Không Cháy' },
]

const seriesGroups = ['Tất Cả', 'P Series', 'S Series', 'M Series', 'F Series', 'D Series', 'MetalFab', 'WonderPress', 'UV Series']

export default function DanhMuc() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gray-950 text-white py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <a href="/" className="hover:text-[#28BE44]">Trang Chủ</a>
              <span>/</span>
              <span className="text-white">Sản Phẩm</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Danh Mục Sản Phẩm xTool</h1>
            <p className="text-gray-400 text-lg">True Color phân phối chính thức {allProducts.length} dòng sản phẩm xTool tại Việt Nam</p>
          </div>
        </section>
        <section className="py-10 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              {seriesGroups.map(s => (
                <button key={s} className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:border-[#28BE44] hover:text-[#28BE44] transition-colors font-medium text-sm">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProducts.map((p) => (
                <div key={p.slug} className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden group">
                  <div className="relative h-52 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-black text-gray-200 mb-1">xTool</div>
                      <div className="text-xl font-bold text-gray-400">{p.name.replace('xTool ','')}</div>
                      <div className="text-sm text-gray-400 mt-1">{p.type}</div>
                    </div>
                    <span className={`absolute top-3 left-3 ${p.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>{p.badge}</span>
                    <span className="absolute top-3 right-3 bg-gray-900/70 text-white text-xs px-2 py-1 rounded-full">{p.series}</span>
                  </div>
                  <div className="p-5">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#28BE44] transition-colors">{p.name}</h2>
                    <p className="text-gray-500 text-sm mb-5 leading-relaxed line-clamp-2">{p.desc}</p>
                    <div className="grid grid-cols-3 gap-2 mb-5 text-xs text-center">
                      <div className="bg-gray-50 rounded-lg p-2.5">
                        <div className="font-bold text-gray-900 leading-tight">{p.power}</div>
                        <div className="text-gray-400 mt-0.5">Công suất</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2.5">
                        <div className="font-bold text-gray-900 leading-tight">{p.area}</div>
                        <div className="text-gray-400 mt-0.5">Vùng làm việc</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2.5">
                        <div className="font-bold text-gray-900 leading-tight">{p.speed}</div>
                        <div className="text-gray-400 mt-0.5">Tốc độ</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#28BE44] font-semibold text-sm">Liên hệ báo giá</span>
                      <Link href={`/san-pham/${p.slug}`} className="bg-[#28BE44] text-white text-sm px-5 py-2.5 rounded-lg font-semibold hover:bg-[#1fa338] transition-colors">
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
