const features = [
  {
    title: 'Công Nghệ Laser Tiên Tiến',
    desc: 'Sử dụng module laser diode và CO2 thế hệ mới, cho phép khắc và cắt với độ chính xác đến 0.01mm.',
    icon: (
      `<svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>`
    ),
  },
  {
    title: 'Phần Mềm Thông Minh',
    desc: 'Phần mềm xTool Creative Space dễ sử dụng, hỗ trợ hơn 300 định dạng file, tích hợp AI để tạo thiết kế tự động.',
    icon: '',
  },
  {
    title: 'An Toàn Tuyệt Đối',
    desc: 'Hệ thống phát hiện lửa, khóa cửa tự động, bảo vệ mắt Class 1 đảm bảo an toàn cho người dùng và môi trường.',
    icon: '',
  },
  {
    title: 'Đa Dạng Vật Liệu',
    desc: 'Xử lý được hơn 300 loại vật liệu: gỗ, da, mica, vải, kim loại, thủy tinh, gốm sứ và nhiều hơn nữa.',
    icon: '',
  },
]

export default function FeatureSection() {
  return (
    <section className="py-20 bg-gray-900 text-white" id="tinh-nang">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tại Sao Chọn xTool?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Công nghệ vượt trội, thiết kế thông minh, an toàn cho mọi không gian
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-gray-800 hover:bg-gray-700 transition">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Công Nghệ Laser Tiên Tiến</h3>
            <p className="text-gray-400">Sử dụng module laser diode và CO2 thế hệ mới, cho phép khắc và cắt với độ chính xác đến 0.01mm, tốc độ lên đến 600mm/s.</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-800 hover:bg-gray-700 transition">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Phần Mềm Thông Minh</h3>
            <p className="text-gray-400">Phần mềm xTool Creative Space dễ sử dụng, hỗ trợ hơn 300 định dạng file, tích hợp AI để tạo thiết kế tự động chỉ trong vài giây.</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-800 hover:bg-gray-700 transition">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">An Toàn Tuyệt Đối</h3>
            <p className="text-gray-400">Hệ thống phát hiện lửa tự động, khóa cửa an toàn, bảo vệ mắt tiêu chuẩn Class 1 đảm bảo an toàn cho người dùng trong mọi môi trường.</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-800 hover:bg-gray-700 transition">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Đa Dạng Vật Liệu</h3>
            <p className="text-gray-400">Xử lý được hơn 300 loại vật liệu: gỗ, da, mica, vải, kim loại, thủy tinh, gốm sứ và nhiều hơn nữa với một máy duy nhất.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
