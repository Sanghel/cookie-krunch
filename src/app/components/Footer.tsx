import React from "react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#592616] text-white py-8">
      <div className="container mx-auto px-6">
        {/* Información de contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold mb-2">Dirección</h3>
            <p className="text-center sm:text-left">
              Villa del Rosario, Norte de Santander, Colombia
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold mb-2">Teléfonos</h3>
            <p className="text-center sm:text-left">+57 313 362 7654</p>
            <p className="text-center sm:text-left"></p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold mb-2">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/cookiekrunch.co?igsh=MTBxNnhoYnd0em93OA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFD3B2]"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@cookiekrunch.co?_t=ZM-8wRikGpfzqI&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFD3B2]"
              >
                <FaTiktok size={24} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=573133627654&text=Holaaa!%20Quiero%20pedir%20Galletas%20%F0%9F%8D%AA%E2%9C%A8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFD3B2]"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>&copy; {2022} Cookie Krunch. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
