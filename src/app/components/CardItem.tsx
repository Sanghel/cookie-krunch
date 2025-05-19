"use client";

import React, { useState } from "react";
import { useCart } from "../context"; // Usamos el contexto de carrito
import { CardCookie } from "../types/CardCookie";
import { FaTrashAlt } from "react-icons/fa"; // Icono de la papelera
import { utils } from "../utils";

const CartItem = ({ product }: { product: CardCookie }) => {
  const { removeFromCart, cart, addToCart } = useCart();
  const [quantity, setQuantity] = useState(
    cart.filter((item: CardCookie) => item.id === product.id).length
  );

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(e.target.value);
    const currentQuantity = cart.filter(
      (item: CardCookie) => item.id === product.id
    ).length;

    // Si la nueva cantidad es mayor, añadimos el producto al carrito
    if (newQuantity > currentQuantity) {
      for (let i = currentQuantity; i < newQuantity; i++) {
        addToCart(product);
      }
    } else if (newQuantity < currentQuantity) {
      removeFromCart(product.id);
      for (let i = 0; i < newQuantity; i++) {
        addToCart(product);
      }
    }

    // Actualizamos el estado local
    setQuantity(newQuantity);
  };

  const handleRemoveClick = () => {
    removeFromCart(product.id); // Elimina el producto del carrito
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 border-b border-gray-200">
      {/* Imagen del producto */}
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-20 h-20 object-cover rounded-md"
      />

      {/* Información del producto */}
      <div className="flex-1 mx-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p>{utils.formatPrice(product.price)}</p>
      </div>

      {/* Cantidad */}
      <div className="flex items-center space-x-2">
        <select
          value={quantity}
          onChange={handleQuantityChange}
          className="w-12  border rounded-md text-center text-[#592616]"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Icono de eliminar */}
        <button
          onClick={handleRemoveClick}
          className="text-red-500 hover:text-red-700 transition-colors cursor-pointer"
          title="Eliminar"
        >
          <FaTrashAlt size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
