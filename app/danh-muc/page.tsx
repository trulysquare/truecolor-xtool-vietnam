'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const allProducts = [
  // P Series
  {
    slug: 'xtool-p3',
    name: 'xTool P3',
    series: 'P Series',
    type: 'CO2 Laser',
    tagLabel: 'Flagship 80W',
    tagColor: 'bg-gray-900',
    desc: 'Flagship CO2 80W — camera 16MP, AI tự động hóa, tốc độ 1500mm/s, sản xuất quy mô lớn.',
    power: '80W CO2',
    area: '600×400mm',
    speed: '1500mm/s',
    price: 'Liên hệ',
    badge: 'Mới nhất',
    image: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-p3_ca_pc_us-p3mainimage01_2330-8226.webp?v=1763462606',
  },
  {
    slug: 'xtool-p2s',
    name: 'xTool P2S',
    series: 'P Series',
    type: 'CO2 Laser',
    tagLabel: 'Best Seller',
    tagColor: 'bg-blue-600',
    desc: 'CO2 55W desktop tốt nhất — nhanh hơn 60%, camera tích hợp, cắt mica 8mm và gỗ 15mm.',
    power: '55W CO2',
    area: '600×400mm',
    speed: '1000mm/s',
    price: 'Liên hệ',
    badge: 'Bán chạy',
    image: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-baidituyingyong_us_pc_p-black-standalone_5130-129_2291d7b0-a962-466d-89c6-8166e1c383a0.webp?v=1754966102',
  },
  // S Series
  {
    slug: 'xtool-s1',
    name: 'xTool S1',
    series: 'S Series',
    type: 'Laser Diode',
    tagLabel: 'Class 1 Safe',
    tagColor: 'bg-[#28BE44]',
    desc: 'Laser diode đóng gói Class 1 — an toàn tuyệt đối, văn phòng và gia đình, 20W hoặc 40W.',
    power: '20W / 40W',
    area: '498×319mm',
    speed: '600mm/s',
    price: 'Liên hệ',
    badge: 'An toàn',
    image: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-s1zhonggou_us_pc_s1-black_4556-13766.webp?v=1765877452',
  },
  {
    slug: 'xtool-s1-ir',
    name: 'xTool S1 + IR Kit',
    series: 'S Series',
    type: 'Laser Diode',
    tagLabel: 'S1 + IR',
    tagColor: 'bg-[#28BE44]',
    desc: 'xTool S1 kèm module IR 1064nm — khắc kim loại không sơn phủ, kính, và nhựa trong suốt.',
    power: '20W + 2W IR',
    area: '498×319mm',
    speed: '600mm/s',
    price: 'Liên hệ',
    badge: 'Kim loại',
    image: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-s1zhonggou_us_pc_s1-black_4556-13766.webp?v=1765877452',
  },
  // M Series
  {
    slug: 'xtool-m1-ultra',
    name: 'xTool M1 Ultra',
    series: 'M Series',
    type: '4-in-1',
    tagLabel: '4-in-1 Đa Năng',
    tagColor: 'bg-red-600',
    desc: 'Thiết bị 4-in-1 đầu tiên thế giới: Laser + Dao Cắt + Bút Vẽ + Ép Nhiệt. 300+ vật liệu.',
    power: '20W Laser',
    area: '380×300mm',
    speed: '400mm/s',
    price: 'Liên hệ',
    badge: 'Sáng tạo',
    image: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-baidituyingyong_us_pc_m1ultra-whitebackground_5122-70511.webp?v=1747562384',
  },
  // F Series
  {
    slug: 'xtool-f2-ultra',
    name: 'xTool F2 Ultra',
    series: 'F Series',
    type: 'MOPA Fiber',
    tagLabel: 'Chuyên Nghiệp',
    tagColor: 'bg-indigo-600',
    desc: '60W MOPA + 40W Diode — màu sắc trên thép, trang sức, khắc kim loại màu chuyên nghiệp.',
    power: '60W MOPA',
    area: '300×300mm',
    speed: '8000mm/s',
    price: 'Liên hệ',
    badge: 'MOPA',
    image: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-f2ultra_us_pc_f2ultra_595-25304.webp?v=1751441238',
  },
  {
    slug: 'xtool-f2-uv',
    name: 'xTool F2 Ultra UV',
    series: 'F Series',
    type: 'UV Laser',
    tagLabel: 'UV 5W',
    tagColor: 'bg-violet-600',
    desc: 'UV Laser 5W — khắc lạnh không nhiệt, kính, nhựa, thực phẩm, vật liệu nhạy nhiệt.',
    power: '5W UV',
    area: '200×200mm',
    speed: '3000mm/s',
    price: 'Liên hệ',
    badge: 'UV',
    image: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-f2ultrauvchanpinye_us_pc_us-f2uvstandalone_3912-1431.webp?v=1763445251',
  },
  {
    slug: 'xtool-f1-ultra',
    name: 'xTool F1 Ultra',
    series: 'F Series',
    type: 'Fiber Laser',
    tagLabel: 'Dual Laser 20W',
    tagColor: 'bg-[#28BE44]',
    desc: 'Fiber + Diode dual laser 20W — khắc kim loại tốc độ cao nhất, camera AI, vùng 200×200mm.',
    power: '20W Fiber+Diode',
    area: '200×200mm',
    speed: '10000mm/s',
    price: 'Liên hệ',
    badge: 'Dual Laser',
    image: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-baidituyingyong_au_pc_en-f1ultra-whitebackground_5144-593.webp?v=1747646544',
  },
  {
    slug: 'xtool-f1',
    name: 'xTool F1',
    series: 'F Series',
    type: 'Fiber Laser',
    tagLabel: 'Di Động',
    tagColor: 'bg-amber-600',
    desc: 'Fiber laser di động nhỏ nhất thế giới — 1.3kg, pin tích hợp, khắc kim loại 4000mm/s.',
    power: '2W IR Fiber',
    area: '115×115mm',
    speed: '4000mm/s',
    price: 'Liên hệ',
    badge: 'Portable',
    image: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-baidituyingyong_us_pc_f1-whitebackground_5122-69954.webp?v=1747623440',
  },
  // MetalFab
  {
    slug: 'xtool-metalfab',
    name: 'xTool MetalFab',
    series: 'MetalFab',
    type: 'Công Nghiệp',
    tagLabel: 'Hàn + Cắt Kim Loại',
    tagColor: 'bg-slate-700',
    desc: 'Laser welder 1500W + CNC Cutter — hàn thép, nhôm, đồng; cắt kim loại tấm chính xác.',
    power: '1500W Welder',
    area: '600×400mm',
    speed: 'Industrial',
    price: 'Liên hệ',
    badge: 'Công nghiệp',
    image: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-baidituyingyong_eu_pc_metalfab_6646-15287.webp?v=1765880838',
  },
  // Apparel / DTF
  {
    slug: 'xtool-wonderpress',
    name: 'xTool Apparel Printer',
    series: 'Apparel',
    type: 'DTF Printer',
    tagLabel: 'In Áo AI',
    tagColor: 'bg-purple-600',
    desc: 'Máy in chuyển nhiệt DTF tích hợp AI — in hình lên áo, túi, vải với mẫu AI tự động tạo.',
    power: 'DTF Transfer',
    area: '38×38cm',
    speed: 'High Speed',
    price: 'Liên hệ',
    badge: 'AI Print',
    image: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-baidituyingyong_us_pc_us-apparelprinter-whitebackground-en_5001-18348_1461d1d6-65b2-42b0-a2f6-e6fe27a266a4.webp?v=1764842680',
  },
  {
    slug: 'xtool-screen-printer',
    name: 'xTool Screen Printer',
    series: 'Apparel',
    type: 'Lụa In',
    tagLabel: 'In Lụa Laser',
    tagColor: 'bg-pink-600',
    desc: 'Máy in lụa kết hợp laser — tạo khuôn in lụa tự động, in sắc nét lên áo, túi, vải.',
    power: 'Laser + Screen',
    area: 'A3 format',
    speed: 'High Speed',
    price: 'Liên hệ',
    badge: 'Screen Print',
    image: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-baidituyingyong_us_pc_siwangdanji_5122-69807.webp?v=1747561797',
  },
]

const seriesFilters = ['Tất Cả', 'P Series', 'S Series', 'M Series', 'F Series', 'MetalFab', 'Apparel']

export default function DanhMuc() {
  const [active, setActive] = useState('Tất Cả')
  const filtered = active === 'Tất Cả' ? allProducts : allProducts.filter(p => p.series === active)

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-[#e8f9ec] text-[#28BE44] text-sm font-semibold px-3 py-1 rounded-full mb-3">Danh Mục Sản Phẩm</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Toàn Bộ Dòng Sản Phẩm xTool</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            True Color — Nhà phân phối chính thức xTool tại Việt Nam. Bảo hành 12 tháng, hỗ trợ kỹ thuật 24/7.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {seriesFilters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                active === f
                  ? 'bg-[#28BE44] text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#28BE44] hover:text-[#28BE44]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Product count */}
        <p className="text-gray-400 text-sm mb-6">{filtered.length} sản phẩm</p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <div key={p.slug} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group">
              <div className="relative h-52 bg-gray-50 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />
                <span className={`absolute top-3 left-3 ${p.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full z-10`}>
                  {p.tagLabel}
                </span>
                <span className="absolute top-3 right-3 bg-white/90 text-gray-700 text-xs font-medium px-2 py-1 rounded-full z-10 border border-gray-200">
                  {p.series}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-bold text-gray-900">{p.name}</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded ml-2 whitespace-nowrap">{p.type}</span>
                </div>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">{p.desc}</p>
                <div className="grid grid-cols-3 gap-1 mb-4 text-xs text-center">
                  <div className="bg-gray-50 rounded-lg p-1.5">
                    <div className="font-bold text-gray-900 text-xs leading-tight">{p.power}</div>
                    <div className="text-gray-400 text-xs">Công suất</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-1.5">
                    <div className="font-bold text-gray-900 text-xs leading-tight">{p.area}</div>
                    <div className="text-gray-400 text-xs">Vùng khắc</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-1.5">
                    <div className="font-bold text-gray-900 text-xs leading-tight">{p.speed}</div>
                    <div className="text-gray-400 text-xs">Tốc độ</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#28BE44] font-bold text-sm">Liên hệ báo giá</span>
                  <Link href={`/san-pham/${p.slug}`} className="bg-[#28BE44] text-white text-sm px-4 py-2 rounded-xl font-semibold hover:bg-[#1fa338] transition-colors">
                    Xem Chi Tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gray-900 rounded-3xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Cần tư vấn chọn máy phù hợp?</h2>
          <p className="text-gray-400 mb-6">Đội ngũ kỹ thuật True Color sẵn sàng hỗ trợ bạn 24/7</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+84xxxxxxxxx" className="bg-[#28BE44] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#1fa338] transition-colors">
              Gọi Ngay: 0xxx xxx xxx
            </a>
            <a href="https://zalo.me/0xxxxxxxxx" className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Chat Zalo
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}