import React from "react";
import Image from "next/image";
import CookieIsotipo from "../../../public/CookieIsotipo.png";
const Hero = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Sección de hero */}
      <div className="relative bg-gradient-to-r from-[#AD816B] to-[#FFC1A8] text-white py-24">
        <Image
          src={CookieIsotipo}
          alt="CookieIsotipo"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            ¿Cómo quieres recibirlo?
          </h1>
          <p className="mt-4 text-xl">
            ¡Haz tu pedido ahora y disfruta de nuestras galletas!
          </p>
          <button className="mt-8 bg-[#FFD3B2] text-[#592616] py-2 px-6 rounded-full font-semibold hover:bg-[#FFC1A8] cursor-pointer">
            <a
              href="https://api.whatsapp.com/send?phone=573133627654&text=Holaaa!%20Quiero%20pedir%20Galletas%20%F0%9F%8D%AA%E2%9C%A8"
              target="_blank"
            >
              Hacer un pedido
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
