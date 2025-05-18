"use client";

import React from "react";
import Card from "./CardCookie"; // Asegúrate de que el componente Card esté importado correctamente
import { CardCookie } from "../types/CardCookie";

const ProductGrid = ({ products }: { products: CardCookie[] }) => {
  return (
    <section className="py-16 mx-auto bg-[#FFD3B2]">
      <h2 className="text-3xl font-semibold text-center mb-8 text-[#592616]">
        Las galletas más top de Cúcuta 🍪
      </h2>
      <section className=" px-4 w-[80%] mx-auto">
        {/* Contenedor del grid con clases responsivas de Tailwind */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card product={product} />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ProductGrid;
