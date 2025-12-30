// src/app/products/page.tsx
import { Zap, Shield, Settings } from "lucide-react";

const products = [
  {
    title: "PLC Control Panels",
    description:
      "Advanced programmable logic controllers for industrial automation and process control.",
    features: ["IEC 61131-3 compliant", "HMI integration", "Remote monitoring"],
    icon: Zap,
  },
  {
    title: "Motor Control Centers",
    description:
      "Intelligent MCCs with variable frequency drives and soft starters for motor protection.",
    features: ["Overload protection", "Energy monitoring", "Modbus/TCP"],
    icon: Settings,
  },
  {
    title: "Power Distribution Panels",
    description:
      "Main LT panels with ACB/MCCB for safe and efficient power distribution.",
    features: [
      "Automatic transfer switch",
      "Power factor correction",
      "Surge protection",
    ],
    icon: Shield,
  },
  {
    title: "Custom Automation Panels",
    description:
      "Tailored solutions for unique industrial requirements with full documentation.",
    features: ["UL 508A certified", "Custom enclosures", "SCADA ready"],
    icon: Settings,
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading electrical control panels engineered for
            reliability, safety, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-12 flex items-center justify-center">
                <product.icon className="w-24 h-24 text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
