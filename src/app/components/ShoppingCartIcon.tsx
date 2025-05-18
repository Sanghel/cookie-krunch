"use client";

import React, { Dispatch, SetStateAction } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context";

const CartIcon = ({
  setOpenCart,
}: {
  setOpenCart: Dispatch<SetStateAction<boolean>>;
}) => {
  const { getCartCount } = useCart(); // Obtenemos la cantidad de productos en el carrito

  return (
    <div
      className="relative cursor-pointer text-[#FFD3B2]"
      title="Ver carrito"
      onClick={() => setOpenCart(true)}
    >
      <FaShoppingCart size={30} />
      {getCartCount() > 0 && (
        <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white rounded-full text-xs px-2 py-1">
          {getCartCount()}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
