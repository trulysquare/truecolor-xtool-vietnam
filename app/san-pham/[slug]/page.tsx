import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const productData: Record<string, {
  name: string; series: string; tagline: string; mainImage: string;
  gallery: string[]; category: string; badge: string; badgeColor: string;
  specs: Record<string, string>; highlights: string[]; desc: string; useCases: string[];
}> = {
  'xtool-p3': {
    name: 'xTool P3', series: 'P Series', tagline: 'Flagship CO2 80W — Sản Xuất Công Nghiệp',
    mainImage: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-p3_ca_pc_us-p3mainimage01_2330-8226.webp?v=1763462606',
    gallery: ['https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-p3_us_pc_us-p3mainimage19_4388-1515.webp?v=1769743358','https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-p3_us_pc_p3mainimageen18_3821-2770.webp?v=1770032287','https://cdn.shopify.com/s/files/1/0467/7985/9095/files/P3_Main_image_EN_03.jpg?v=1770032287'],
    category: 'CO2 Laser', badge: 'Flagship 2024', badgeColor: 'bg-gray-900',
    specs: { 'Công suất':'80W CO2', 'Vùng làm việc':'600×400mm', 'Tốc độ':'1500mm/s', 'Độ chính xác':'±0.01mm', 'Trọng lượng':'35kg', 'Phần mềm':'xTool Creative Space' },
    highlights: ['Camera AI 16MP tự động nhận diện vật liệu','Tự động lấy nét và canh chỉnh','Cắt gỗ 18mm, mica 10mm chỉ 1 lần đi','Sản xuất liên tục 24/7 không dừng','Module laser thêm cho da, kim loại'],
    desc: 'xTool P3 là flagship CO2 80W mạnh nhất trong dòng P Series. Với camera AI 16MP tích hợp, máy tự động nhận diện vật liệu, canh chỉnh độ sâu, và tối ưu công suất cho từng lần khắc/cắt. Phù hợp cho xưởng sản xuất và doanh nghiệp chuyên nghiệp cần năng suất cao.',
    useCases: ['Khắc và cắt gỗ quy mô lớn','Sản xuất biển hiệu, bảng tên','Gia công mica, acrylic, da thuộc','Làm hàng craft và quà tặng cao cấp'],
  },
  'xtool-p2s': {
    name: 'xTool P2S', series: 'P Series', tagline: 'CO2 55W Desktop — Tốt Nhất Phân Khúc',
    mainImage: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-baidituyingyong_us_pc_p-black-standalone_5130-129_2291d7b0-a962-466d-89c6-8166e1c383a0.webp?v=1754966102',
    gallery: ['https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-p2-p2s-v30_us_pc_zhutuduibi_9359-6635.webp?v=1765261068','https://cdn.shopify.com/s/files/1/0467/7985/9095/files/a6c45de613053afb5c6825bb741f1389_ff65b0ec-536b-46fd-a1b7-aaeac41cd0f4.jpg?v=1765261068','https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-p2-p2s-v30_us_pc_shuangshexiugai-_10181-1806.webp?v=1765261068'],
    category: 'CO2 Laser', badge: 'Best Seller', badgeColor: 'bg-blue-600',
    specs: { 'Công suất':'55W CO2', 'Vùng làm việc':'600×400mm', 'Tốc độ':'1000mm/s', 'Độ chính xác':'±0.01mm', 'Trọng lượng':'28kg', 'Phần mềm':'xTool Creative Space' },
    highlights: ['Nhanh hơn 60% so với thế hệ trước','Camera tích hợp chụp toàn vùng làm việc','Cắt mica 8mm và gỗ 15mm 1 lần đi','Hệ thống làm mát nước tích hợp sẵn','Đầu laser kép độc lập (dual head)'],
    desc: 'xTool P2S là máy khắc CO2 55W desktop tốt nhất trong phân khúc của mình. Thiết kế gọn, camera tích hợp, và hiệu suất vượt trội giúp bạn tạo ra sản phẩm chất lượng cao với năng suất lớn.',
    useCases: ['Khắc gỗ và cắt mica/acrylic','Làm biển hiệu và bảng tên doanh nghiệp','Sản xuất đồ thủ công và quà tặng','Khắc da, vải, cao su, giấy'],
  },
  'xtool-s1': {
    name: 'xTool S1', series: 'S Series', tagline: 'Laser Diode Class 1 — An Toàn Tuyệt Đối',
    mainImage: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-s1zhonggou_us_pc_s1-black_4556-13766.webp?v=1765877452',
    gallery: ['https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-a-s1_us_pc_en-s1inthebox_5008-4244_a65c6f20-1657-44c0-b52b-750b153983c9.webp?v=1773806566','https://cdn.shopify.com/s/files/1/0467/7985/9095/files/fe6168b058ee64b6bc8d62be793cabca_141d54ee-6b9e-4799-8ed0-47a59889f5ae.jpg?v=1773806566','https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-baidituyingyong_us_pc_s1-10w-black-standalone_5088-28649.webp?v=1773806566'],
    category: 'Laser Diode', badge: 'Class 1 Safe', badgeColor: 'bg-[#28BE44]',
    specs: { 'Công suất':'20W hoặc 40W', 'Vùng làm việc':'498×319mm', 'Tốc độ':'600mm/s', 'Độ chính xác':'±0.01mm', 'Trọng lượng':'14.5kg', 'Phần mềm':'xTool Creative Space' },
    highlights: ['Đóng gói Class 1 — không cần kính bảo hộ','Hoạt động trong nhà an toàn','Cắt gỗ 10mm (40W) với 1 lần đi','Camera AI tích hợp nhận diện vật liệu','Nâng cấp lên 40W hoặc thêm module IR'],
    desc: 'xTool S1 là laser diode đóng gói Class 1 đầu tiên — hoạt động hoàn toàn an toàn trong văn phòng và gia đình. Công suất 20W hoặc 40W, cắt và khắc chính xác trên hàng trăm loại vật liệu.',
    useCases: ['Khắc và cắt trong văn phòng an toàn','Làm đồ thủ công cá nhân tại nhà','Sản xuất sản phẩm loạt nhỏ hoặc lớn','Giáo dục và đào tạo'],
  },
  'xtool-s1-ir': {
    name: 'xTool S1 + IR Kit', series: 'S Series', tagline: 'S1 Class 1 Thêm Module IR 1064nm',
    mainImage: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-s1zhonggou_us_pc_s1-black_4556-13766.webp?v=1765877452',
    gallery: ['https://cdn.shopify.com/s/files/1/0467/7985/9095/files/Listofitems.jpg?v=1760497672','https://cdn.shopify.com/s/files/1/0467/7985/9095/files/c4196b811d11a840ef66d1bf69998bb7.jpg?v=1760497672'],
    category: 'Laser Diode + IR', badge: 'Diode + IR', badgeColor: 'bg-teal-600',
    specs: { 'Công suất':'20W + 2W IR', 'Vùng làm việc':'498×319mm', 'Tốc độ':'600mm/s', 'Độ chính xác':'±0.01mm', 'Trọng lượng':'15.5kg', 'Phần mềm':'xTool Creative Space' },
    highlights: ['Tất cả tính năng S1 + module IR 1064nm','IR khắc kim loại không sơn phủ','Khắc vàng, bạc, thép không gỉ trực tiếp','Xử lý kính, nhựa trong suốt','Bộ đôi hoàn hảo cho studio đa năng'],
    desc: 'xTool S1 + IR Kit là bộ combo S1 Class 1 kèm module IR 1064nm. Module IR cho phép khắc trực tiếp lên kim loại không sơn phủ, thủy tinh, và nhựa trong suốt.',
    useCases: ['Khắc kim loại trực tiếp','Cá nhân hóa đồ kim loại cao cấp','Khắc thủy tinh và nhựa trong suốt','Studio đa năng nhiều vật liệu'],
  },
  'xtool-m1-ultra': {
    name: 'xTool M1 Ultra', series: 'M Series', tagline: 'Thiết Bị 4-in-1 Đầu Tiên Thế Giới',
    mainImage: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-baidituyingyong_us_pc_m1ultra-whitebackground_5122-70511.webp?v=1747562384',
    gallery: ['https://cdn.shopify.com/s/files/1/0467/7985/9095/files/20241122-154508.jpg?v=1775301721','https://cdn.shopify.com/s/files/1/0467/7985/9095/files/8_0dd6ef18-e309-45c7-ab9d-cfcbf356c4bf.jpg?v=1775301721'],
    category: '4-in-1 Machine', badge: '4-in-1 Đa Năng', badgeColor: 'bg-red-600',
    specs: { 'Công suất':'20W Laser', 'Vùng làm việc':'380×300mm', 'Tốc độ':'400mm/s', 'Độ chính xác':'±0.05mm', 'Trọng lượng':'12kg', 'Phần mềm':'xTool Creative Space' },
    highlights: ['Laser khắc & cắt — hàng trăm vật liệu','Dao cắt vinyl, giấy, vải','Bút vẽ & plotter đồ họa','Ép nhiệt (heat press) in áo, vải','Hơn 300 loại vật liệu tương thích'],
    desc: 'xTool M1 Ultra là thiết bị craft 4-in-1 đầu tiên thế giới: Laser + Dao Cắt Vinyl + Bút Vẽ + Ép Nhiệt. Phù hợp studio sáng tạo và doanh nghiệp in ấn đa năng.',
    useCases: ['Studio thiết kế và in ấn','Làm sticker, decal, nhãn dán','In áo và trang trí vải','Craft thủ công cao cấp'],
  },
  'xtool-f1': {
    name: 'xTool F1', series: 'F Series', tagline: 'Fiber Laser Di Động Nhỏ Nhất Thế Giới',
    mainImage: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-baidituyingyong_us_pc_f1-whitebackground_5122-69954.webp?v=1747623440',
    gallery: ['https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-a-f1lite_us_pc_us-f1_2169-6702.webp?v=1774948816','https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-f1litechanpinye_us_pc_us-portable_97-700.webp?v=1774948816'],
    category: 'Fiber Laser', badge: 'Portable Fiber', badgeColor: 'bg-amber-600',
    specs: { 'Công suất':'2W IR Fiber', 'Vùng làm việc':'115×115mm', 'Tốc độ':'4000mm/s', 'Độ chính xác':'±0.003mm', 'Trọng lượng':'1.3kg', 'Phần mềm':'xTool Creative Space' },
    highlights: ['Nhỏ gọn 1.3kg — dễ mang di chuyển','Pin tích hợp — không cần ổ điện','Khắc kim loại, vàng, bạc siêu mịn','Tốc độ 4000mm/s nhanh nhất phân khúc','Module IR thêm cho vật liệu đặc biệt'],
    desc: 'xTool F1 là fiber laser di động nhỏ nhất thế giới (1.3kg). Pin tích hợp, mang đến bất kỳ đâu. Khắc kim loại, trang sức với độ chính xác cao.',
    useCases: ['Khắc trang sức và phụ kiện kim loại','Đánh dấu dụng cụ và thiết bị','Quà tặng kim loại cao cấp','Triển lãm và sự kiện thực địa'],
  },
  'xtool-f1-ultra': {
    name: 'xTool F1 Ultra', series: 'F Series', tagline: 'Dual Laser 20W — Fiber + Diode',
    mainImage: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-baidituyingyong_au_pc_en-f1ultra-whitebackground_5144-593.webp?v=1747646544',
    gallery: ['https://cdn.shopify.com/s/files/1/0467/7985/9095/files/f1-ultra-vs-other-fiber.jpg?v=1765259857','https://cdn.shopify.com/s/files/1/0467/7985/9095/files/F_fdf16462-fe1a-4c14-a016-dfb052bb7d23.webp?v=1769139180'],
    category: 'Dual Fiber Laser', badge: 'F Series Mạnh Nhất', badgeColor: 'bg-[#28BE44]',
    specs: { 'Công suất':'20W Fiber + 20W Diode', 'Vùng làm việc':'200×200mm', 'Tốc độ':'10000mm/s', 'Độ chính xác':'±0.003mm', 'Trọng lượng':'3.5kg', 'Phần mềm':'xTool Creative Space' },
    highlights: ['Dual laser: 20W Fiber + 20W Diode','Tốc độ 10,000mm/s vượt trội','Camera AI nhận diện tự động','Vùng 200×200mm rộng hơn F1','Khắc kim loại màu chuyên nghiệp'],
    desc: 'xTool F1 Ultra là phiên bản mạnh nhất F Series với dual laser 20W Fiber + 20W Diode. Tốc độ 10,000mm/s, camera AI tích hợp.',
    useCases: ['Gia công kim loại hàng loạt','Khắc màu trên thép anodized','Trang sức và phụ kiện cao cấp','Sản xuất công nghiệp chi tiết'],
  },
  'xtool-f2-ultra': {
    name: 'xTool F2 Ultra', series: 'F Series', tagline: '60W MOPA + 40W Diode — Khắc Màu Kim Loại',
    mainImage: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-f2ultra_us_pc_f2ultra_595-25304.webp?v=1751441238',
    gallery: ['https://cdn.shopify.com/s/files/1/0467/7985/9095/files/image_-8_1_f4c1d870-c2f5-407a-b6be-22f9704109df.jpg?v=1751962031','https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-f2ultra_us_pc_image-1_545-24685.webp?v=1769139066'],
    category: 'MOPA Fiber Laser', badge: 'MOPA 60W', badgeColor: 'bg-indigo-600',
    specs: { 'Công suất':'60W MOPA + 40W Diode', 'Vùng làm việc':'300×300mm', 'Tốc độ':'8000mm/s', 'Độ chính xác':'±0.003mm', 'Trọng lượng':'8kg', 'Phần mềm':'xTool Creative Space' },
    highlights: ['MOPA 60W — khắc màu trên thép không gỉ','16 triệu màu sắc có thể tạo','Vùng khắc lớn 300×300mm','Tốc độ 8000mm/s sản xuất lớn','Diode 40W cho phi kim loại'],
    desc: 'xTool F2 Ultra dùng MOPA 60W + Diode 40W — khắc màu sắc trên thép không gỉ, titan với hơn 16 triệu màu. Lựa chọn hàng đầu cho trang sức và gia công kim loại màu.',
    useCases: ['Khắc màu sắc trên kim loại','Trang sức và phụ kiện bạch kim','Đánh dấu công nghiệp đa màu','Gia công y tế và hàng không'],
  },
  'xtool-f2-uv': {
    name: 'xTool F2 Ultra UV', series: 'F Series', tagline: 'UV Laser 5W — Khắc Lạnh Không Nhiệt',
    mainImage: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-f2ultrauvchanpinye_us_pc_us-f2uvstandalone_3912-1431.webp?v=1763445251',
    gallery: ['https://cdn.shopify.com/s/files/1/0467/7985/9095/files/F_fdf16462-fe1a-4c14-a016-dfb052bb7d23.webp?v=1769139180','https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-f2ultrauvchanpinye_us_pc_image1_1966-213_41885224-a188-485a-8634-095d34e4abce.webp?v=1769139154'],
    category: 'UV Laser', badge: 'UV 5W', badgeColor: 'bg-violet-600',
    specs: { 'Công suất':'5W UV (355nm)', 'Vùng làm việc':'200×200mm', 'Tốc độ':'3000mm/s', 'Độ chính xác':'±0.002mm', 'Trọng lượng':'5kg', 'Phần mềm':'xTool Creative Space' },
    highlights: ['UV 355nm — không gây nhiệt','Khắc thủy tinh, kính, pha lê','Nhựa nhạy nhiệt, silicon, cao su','Khắc thực phẩm và y tế','Độ phân giải 0.002mm cực cao'],
    desc: 'xTool F2 Ultra UV dùng bước sóng UV 355nm — không sinh nhiệt. Phù hợp thủy tinh, nhựa nhạy nhiệt, thực phẩm và sản phẩm y tế.',
    useCases: ['Khắc thủy tinh và pha lê','Thiết bị y tế và dược phẩm','Thực phẩm và đóng gói','Nhựa nhạy nhiệt và silicon'],
  },
  'xtool-metalfab': {
    name: 'xTool MetalFab', series: 'MetalFab', tagline: 'Laser Welder 1500W + CNC Cutter Công Nghiệp',
    mainImage: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-baidituyingyong_eu_pc_metalfab_6646-15287.webp?v=1765880838',
    gallery: ['https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-hanqieji_us_pc_hanqiejitaotu-en18_5437-1379.webp?v=1767607596','https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-hanqieji_us_pc_hanqiejitaotu-en15_1261-5801.webp?v=1767607709','https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-hanqieji_us_pc_86_1261-4709_a29bf49f-02ba-4e69-85f2-c7f16f3d8ff4.webp?v=1767607709'],
    category: 'Industrial Metal', badge: 'Hàn Laser + CNC', badgeColor: 'bg-slate-700',
    specs: { 'Công suất':'1500W Fiber Welder', 'Vùng làm việc':'600×400mm', 'Tốc độ':'Industrial', 'Độ chính xác':'±0.05mm', 'Trọng lượng':'120kg', 'Phần mềm':'xTool MetalFab Software' },
    highlights: ['Laser Welder 1500W — hàn thép, nhôm, đồng','CNC Cutter — cắt tấm kim loại chính xác','Kết hợp hàn và cắt trong 1 thiết bị','Khung thép công nghiệp chịu tải nặng','Xưởng cơ khí, ô tô, nội thất kim loại'],
    desc: 'xTool MetalFab kết hợp Laser Welder 1500W và CNC Cutter công nghiệp. Hàn thép, nhôm, đồng chất lượng cao; cắt tấm kim loại với độ chính xác vượt trội.',
    useCases: ['Hàn laser cho cơ khí và chế tạo','Cắt tấm thép nhôm cho nội thất','Gia công chi tiết ô tô và xe máy','Sản xuất thiết bị công nghiệp'],
  },
  'xtool-wonderpress': {
    name: 'xTool Apparel Printer', series: 'Apparel', tagline: 'Máy In DTF Tích Hợp AI — In Áo Chuyên Nghiệp',
    mainImage: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-baidituyingyong_us_pc_us-apparelprinter-whitebackground-en_5001-18348_1461d1d6-65b2-42b0-a2f6-e6fe27a266a4.webp?v=1764842680',
    gallery: ['https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-dtf_us_pc_images-en-1_7521-77.webp?v=1764842680','https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-dtf_us_pc_images-en-2_7041-1428.webp?v=1764842680','https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-a-dtf_us_pc_images-en-3_13173-391.webp?v=1775208396'],
    category: 'DTF Apparel Printer', badge: 'AI In Áo', badgeColor: 'bg-purple-600',
    specs: { 'Công nghệ':'DTF Transfer', 'Vùng in':'38×38cm', 'Tốc độ':'High Speed', 'Độ phân giải':'600 DPI', 'Trọng lượng':'25kg', 'Phần mềm':'xTool Creative Space + AI' },
    highlights: ['AI tạo mẫu thiết kế tự động từ văn bản','In DTF lên áo, túi, vải, mũ','Màu sắc bền lâu không bong tróc','Không giới hạn màu và thiết kế phức tạp','Không cần tách màu như in lụa truyền thống'],
    desc: 'xTool Apparel Printer là máy in DTF tích hợp AI. Mô tả bằng chữ, AI tự tạo mẫu và in trực tiếp lên áo, vải. Phù hợp cơ sở in ấn thời trang và quà tặng cá nhân hóa.',
    useCases: ['In áo thun theo yêu cầu','Trang trí túi vải thời trang','Sản xuất đồng phục doanh nghiệp','In quà tặng cá nhân hóa'],
  },
  'xtool-screen-printer': {
    name: 'xTool Screen Printer', series: 'Apparel', tagline: 'In Lụa Kết Hợp Laser — Hiện Đại Nhất',
    mainImage: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-baidituyingyong_us_pc_siwangdanji_5122-69807.webp?v=1747561797',
    gallery: ['https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-siwangyinshuaji_us_pc_1_7771-3035_914a27e7-27e4-4a62-aed6-0b7d50ba71e8.webp?v=1748402023','https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-siwangyinshuaji_us_pc_5_7782-519_5b779fd6-ba7b-4ea4-89e2-e4e338de6d3f.webp?v=1748402023'],
    category: 'Screen Printer + Laser', badge: 'In Lụa + Laser', badgeColor: 'bg-pink-600',
    specs: { 'Công nghệ':'Laser + Screen Print', 'Khổ in':'A3 Format', 'Tốc độ':'High Speed', 'Chất lượng':'High Detail', 'Trọng lượng':'18kg', 'Phần mềm':'xTool Creative Space' },
    highlights: ['Laser tự động tạo khuôn in lụa chính xác','In lụa nhiều lớp màu sắc','Phù hợp in số lượng lớn','Tiết kiệm chi phí khuôn','Laser khắc + in lụa trong 1 thiết bị'],
    desc: 'xTool Screen Printer kết hợp laser với in lụa truyền thống. Laser tự động tạo khuôn lụa, sau đó in đa màu lên áo, túi, vải.',
    useCases: ['In lụa áo thun số lượng lớn','Đồng phục và quần áo thời trang','In túi vải, canvas','Xưởng in ấn chuyên nghiệp'],
  },
  'xtool-d1-pro': {
    name: 'xTool D1 Pro', series: 'D Series', tagline: 'Laser Diode Mở — Phổ Biến Và Linh Hoạt',
    mainImage: 'https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-baidituyingyong_us_pc_s1-10w-black-standalone_5088-28649.webp?v=1773806566',
    gallery: ['https://cdn.shopify.com/s/files/1/0467/7985/9095/files/mk-s1zhonggou_us_pc_s1-black_4556-13766.webp?v=1765877452'],
    category: 'Laser Diode Mở', badge: 'Phổ Biến Nhất', badgeColor: 'bg-[#28BE44]',
    specs: { 'Công suất':'10W đến 40W', 'Vùng làm việc':'432×406mm', 'Tốc độ':'600mm/s', 'Độ chính xác':'±0.01mm', 'Trọng lượng':'5.5kg', 'Phần mềm':'xTool Creative Space / LightBurn' },
    highlights: ['Thiết kế mở dễ lắp ráp và nâng cấp','Tương thích LightBurn và xTool Creative Space','Mở rộng vùng với extension kit','Giá thành tốt cho maker và người mới','Dễ bảo trì và thay thế linh kiện'],
    desc: 'xTool D1 Pro là laser diode mở phổ biến nhất — dễ lắp ráp, tương thích LightBurn. Phù hợp người mới bắt đầu và maker khởi nghiệp.',
    useCases: ['Khởi nghiệp craft và kinh doanh nhỏ','Khắc gỗ, da và vật liệu mềm','Học tập và tìm hiểu laser','Prototype và thử nghiệm sản phẩm'],
  },
}

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({ slug }))
}

export default function ProductPage({ params }: Props) {
  const product = productData[params.slug]
  if (!product) notFound()

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link href="/" className="hover:text-[#28BE44]">Trang Chủ</Link>
            <span>/</span>
            <Link href="/danh-muc" className="hover:text-[#28BE44]">Sản Phẩm</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Product Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div>
            <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-4 border border-gray-100">
              <Image
                src={product.mainImage}
                alt={product.name}
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                unoptimized
              />
              <span className={`absolute top-4 left-4 ${product.badgeColor} text-white text-sm font-bold px-3 py-1.5 rounded-full z-10`}>
                {product.badge}
              </span>
            </div>
            {product.gallery.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {product.gallery.slice(0, 3).map((img, i) => (
                  <div key={i} className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                    <Image
                      src={img}
                      alt={`${product.name} ảnh ${i + 2}`}
                      fill
                      className="object-contain p-2"
                      sizes="150px"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold bg-[#e8f9ec] text-[#28BE44] px-3 py-1 rounded-full">{product.series}</span>
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{product.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-lg text-[#28BE44] font-semibold mb-4">{product.tagline}</p>
            <p className="text-gray-600 leading-relaxed mb-6">{product.desc}</p>

            {/* Highlights */}
            <div className="bg-gray-50 rounded-2xl p-5 mb-6">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Điểm Nổi Bật</h3>
              <ul className="space-y-2">
                {product.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#28BE44] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+84xxxxxxxxx" className="flex-1 bg-[#28BE44] text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-[#1fa338] transition-colors">
                Gọi Tư Vấn Ngay
              </a>
              <a href="https://zalo.me/0xxxxxxxxx" className="flex-1 border-2 border-[#28BE44] text-[#28BE44] text-center py-4 rounded-xl font-bold text-lg hover:bg-[#28BE44] hover:text-white transition-colors">
                Chat Zalo
              </a>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="bg-green-50 rounded-xl p-3">
                <div className="text-lg">🛡️</div>
                <div className="text-xs font-semibold text-gray-700 mt-1">Bảo hành 12 tháng</div>
              </div>
              <div className="bg-green-50 rounded-xl p-3">
                <div className="text-lg">🚚</div>
                <div className="text-xs font-semibold text-gray-700 mt-1">Giao hàng toàn quốc</div>
              </div>
              <div className="bg-green-50 rounded-xl p-3">
                <div className="text-lg">🔧</div>
                <div className="text-xs font-semibold text-gray-700 mt-1">Hỗ trợ 24/7</div>
              </div>
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Thông Số Kỹ Thuật</h2>
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
            <table className="w-full">
              <tbody>
                {Object.entries(product.specs).map(([key, val], i) => (
                  <tr key={key} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-700 w-1/3">{key}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ứng Dụng Tiêu Biểu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.useCases.map((uc, i) => (
              <div key={i} className="flex items-center gap-3 bg-gradient-to-r from-[#e8f9ec] to-white rounded-xl p-4 border border-[#c5f0d0]">
                <div className="w-8 h-8 bg-[#28BE44] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">{i + 1}</span>
                </div>
                <span className="text-gray-800 font-medium">{uc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products Nav */}
        <div className="bg-gray-900 rounded-3xl p-8 text-center text-white">
          <h2 className="text-xl font-bold mb-2">Xem Thêm Sản Phẩm Khác</h2>
          <p className="text-gray-400 text-sm mb-5">Khám phá toàn bộ dòng sản phẩm xTool tại True Color</p>
          <Link href="/danh-muc" className="inline-flex items-center gap-2 bg-[#28BE44] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#1fa338] transition-colors">
            Xem Tất Cả Sản Phẩm
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  )
}