// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Thank you! We'll get back to you soon.");
      setFormData({ name: "", email: "", company: "", message: "" });
    } else {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your next project? We're here to help.
          </p>
        </motion.div>

        {/* Form & Contact Info Grid with Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Form Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none text-black placeholder-black"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none text-black placeholder-black"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Company (Optional)"
                className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none text-black placeholder-black"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                required
                className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none text-black placeholder-black resize-none"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
              {status && <p className="text-center mt-4 text-lg">{status}</p>}
            </form>
            <p className="mt-6 text-sm text-gray-500">
              We'll never share your information. Messages go to our team
              directly.
            </p>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Contact Information
            </h2>
            <div className="space-y-8">
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-6"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl text-black font-semibold">Phone</h3>
                  <p className="text-gray-600">+91 9900568857, 9448132831</p>
                  <p className="text-gray-600">Mon–Sat, 8AM–6PM IST</p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-6"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl text-black font-semibold">Email</h3>
                  <p className="text-gray-600">akhilcontrols@gmail.com</p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-6"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl text-black font-semibold">Location</h3>
                  <p className="text-gray-600">
                    SN 271/237, M. T. Sagar Industrial Estate, Gokul Road
                  </p>
                  <p className="text-gray-600">
                    Hubli, Dharwad-580030, Karnataka, India
                  </p>
                  {/* Embedded Google Map */}
                  {/* <div className="w-full h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg mt-6">
                    <iframe
                      src="https://www.google.com/maps/place/M.T+SAGAR,+Industrial+Estate,+Hubballi,+Karnataka+580030/@15.3545792,75.1102302,17z/data=!4m15!1m8!3m7!1s0x3bb8d72662f01dbd:0x6ccc89c121489315!2sM.T+SAGAR,+Industrial+Estate,+Hubballi,+Karnataka+580030!3b1!8m2!3d15.354574!4d75.1128051!16s%2Fg%2F11x91qdyrc!3m5!1s0x3bb8d72662f01dbd:0x6ccc89c121489315!8m2!3d15.354574!4d75.1128051!16s%2Fg%2F11x91qdyrc?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Akhil Controls Location"
                    ></iframe>
                  </div> */}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
