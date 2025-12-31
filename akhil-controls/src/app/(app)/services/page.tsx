// src/app/services/page.tsx
import { Settings, Shield, Wrench, Phone } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Panel Design & Engineering",
    description:
      "Custom electrical schematics, CAD drawings, and BOM using EPLAN and AutoCAD.",
  },
  {
    icon: Wrench,
    title: "Manufacturing & Assembly",
    description:
      "UL 508A certified facility with in-house wiring, testing, and quality control.",
  },
  {
    icon: Shield,
    title: "Commissioning & Startup",
    description:
      "On-site installation, testing, and commissioning with certified technicians.",
  },
  {
    icon: Phone,
    title: "24/7 Support & Maintenance",
    description:
      "Remote diagnostics, preventive maintenance, and emergency repair services.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end solutions from design to lifelong support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
