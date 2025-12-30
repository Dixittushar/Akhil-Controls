// src/app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            About ElectroControl Pro
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Your trusted partner in industrial automation and electrical control
            systems since 2000.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Founded in 2000, ElectroControl Pro has grown from a small panel
              shop to a leading provider of advanced control systems across
              industries including manufacturing, oil & gas, water treatment,
              and food processing.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 25 years of experience and 1000+ successful projects, we
              combine engineering excellence with practical field knowledge to
              deliver solutions that are reliable, safe, and future-ready.
            </p>
          </div>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Safety First</h3>
              <p className="text-gray-600">
                Every design prioritizes personnel and equipment protection.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Quality Always</h3>
              <p className="text-gray-600">
                UL 508A certified with rigorous testing at every stage.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Customer Success</h3>
              <p className="text-gray-600">
                Your operational efficiency is our ultimate measure of success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
