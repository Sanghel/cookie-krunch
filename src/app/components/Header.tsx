"use client";

import React, { useState } from "react";
import Image from "next/image";
import CookieLogoWhite from "../../../public/CookieLogoWhite.png";
import CartIcon from "./ShoppingCartIcon";
import CartPanel from "./CartPanel";

export default function Header() {
  const [openCart, setOpenCart] = useState<boolean>(false);
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#592616] text-white py-4">
        <div className="flex justify-between items-center px-6">
          {/* Logo en el centro */}
          <div className="flex-1 text-center">
            <Image
              src={CookieLogoWhite} // Cambia esto con la URL de  tu logo
              alt="Logo"
              className="w-32 h-auto mx-auto"
            />
          </div>

          <CartIcon setOpenCart={setOpenCart} />
        </div>
      </header>
      {openCart && <CartPanel openCart={openCart} setOpenCart={setOpenCart} />}
    </>
  );
}
