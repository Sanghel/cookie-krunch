"use client";

import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context";
import { CardCookie } from "../types/CardCookie";
import { utils } from "../utils";

const Card = ({ product }: { product: CardCookie }) => {
  const { addToCart, cart, removeFromCart } = useCart();

  const handleAddToCart = (product: CardCookie) => {
    addToCart(product);
  };

  const handleRemoveToCart = (id: number) => {
    removeFromCart(id);
  };

  const isProductInCart = cart.some(
    (item: CardCookie) => item.id === product.id
  );

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col h-[500px]">
      {/* Establecemos una altura fija para las cards */}
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-2 flex-1">
          {product.description}
        </p>
        <p className="text-lg font-semibold text-gray-900 mt-4">
          {utils.formatPrice(product.price)}
        </p>

        <button
          onClick={
            isProductInCart
              ? () => handleRemoveToCart(product.id)
              : () => handleAddToCart(product)
          }
          className={`mt-4 w-full ${
            isProductInCart
              ? "bg-[#592616] text-[#FFD3B2]"
              : "bg-[#FFD3B2] text-[#592616]"
          } py-2 rounded-full font-semibold hover:bg-[#FFC1A8] flex items-center justify-center`}
        >
          <FaShoppingCart size={20} className="mr-2" />
          {isProductInCart ? "Eliminar del carrito" : "Añadir al carrito"}
        </button>
      </div>
    </div>
  );
};

export default Card;
