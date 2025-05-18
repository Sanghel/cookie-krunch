"use client";

import React, { createContext, useState, useContext } from "react";
import { CardCookie } from "../types/CardCookie";

// Crear el contexto
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CartContext = createContext<any>({
  cart: [],
  addToCart: () => {},
  getCartCount: () => 0,
  removeFromCart: () => {},
});

// Crear el proveedor del contexto
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CardCookie[]>([]); // Estado que guarda los productos del carrito

  // Función para añadir un producto al carrito
  const addToCart = (product: CardCookie) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Función para obtener el número de productos en el carrito
  const getCartCount = () => cart.length;

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, getCartCount, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acceder al carrito
export const useCart = () => useContext(CartContext);
