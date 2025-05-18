"use client";

import { Dispatch, SetStateAction } from "react";
import { useCart } from "../context";
import { CardCookie } from "../types/CardCookie";
import { FaRegFaceSadCry } from "react-icons/fa6";
import { utils } from "../utils"; // Usamos el archivo utils para formatear el precio
import CartItem from "./CardItem";

const CartPanel = ({
  openCart,
  setOpenCart,
}: {
  openCart: boolean;
  setOpenCart: Dispatch<SetStateAction<boolean>>;
}) => {
  const { cart } = useCart();

  const groupedProducts = cart.reduce(
    (acc: CardCookie[], product: CardCookie) => {
      const existingProduct = acc.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1; // Aumentamos la cantidad si ya existe
      } else {
        acc.push({ ...product, quantity: 1 }); // Si no existe, lo añadimos con cantidad 1
      }
      return acc;
    },
    []
  );

  // Calculamos el total de la compra
  const total = groupedProducts.reduce((acc: number, product: CardCookie) => {
    return acc + product.price * product.quantity; // Multiplicamos el precio por la cantidad
  }, 0);

  const createWhatsAppMessage = () => {
    let message = "¡Hola! Quisiera comprar: \n";
    groupedProducts.forEach((product: CardCookie) => {
      message += `${product.quantity} x ${product.name} - ${utils.formatPrice(
        product.price * product.quantity
      )}\n`; // Añadimos el nombre del producto y la cantidad
    });
    message += `\nTotal: ${utils.formatPrice(total)}`;
    return message;
  };

  // Enlace a WhatsApp con el mensaje
  const handleProceedToCheckout = () => {
    const message = createWhatsAppMessage();
    const phoneNumber = "573133627654"; // Reemplaza con el número de WhatsApp de tu empresa
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      {openCart && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-50 z-50 ring-2 ring-black text-[#592616]"
          onClick={() => setOpenCart(false)}
        >
          <div
            className="fixed right-0 top-0 h-full w-80 bg-white p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Tu Carrito</h2>
              <button
                title="Cerrar carrito"
                className="text-[#592616] cursor-pointer font-bold"
                onClick={() => setOpenCart(false)}
              >
                X
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16">
                <p>Tu carrito está vacío.</p>
                <FaRegFaceSadCry size={50} />
              </div>
            ) : (
              <div>
                {groupedProducts.map((product: CardCookie, index: number) => (
                  <CartItem key={index} product={product} />
                ))}
              </div>
            )}

            {/* Total de la compra */}
            <div className="mt-4 border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <p className="text-lg font-semibold">Total</p>
                <p className="text-lg font-semibold">
                  {utils.formatPrice(total)}{" "}
                  {/* Usamos el formateo para mostrar el total */}
                </p>
              </div>
            </div>

            {cart.length > 0 && (
              <button
                onClick={handleProceedToCheckout}
                className="mt-4 p-2 px-8 bg-[#FFD3B2] text-[#592616] rounded-full font-bold cursor-pointer"
              >
                Continuar con tu pedidoo
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CartPanel;
