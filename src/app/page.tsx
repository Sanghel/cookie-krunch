// pages/index.js

import Hero from "./components/Hero";
import ProductCarousel from "./components/CarrouselCookies";
import Footer from "./components/Footer";
import kchips from "../../public/kchips.jpg";
import arequipito from "../../public/arequipito.jpg";
import chocolatier from "../../public/chocolatier.jpg";
import red from "../../public/red.jpg";
import cheesecake from "../../public/cheese.jpg";
import chocoRed from "../../public/chocored.jpg";
import churro from "../../public/churro.jpg";
import kinder from "../../public/kinder.jpg";
import { CartProvider } from "./context";
import Header from "./components/Header";

const cookies = [
  {
    id: 1,
    name: "Krunch Chips",
    description:
      "Galleta de 100gr, su base es de vainilla con chips de chocolate negro.",
    price: 6500,
    imageUrl: kchips.src,
    quantity: 0,
  },
  // {
  //   name: "Krunch S’more",
  //   description:
  //     "Galleta de 115gr, su sabor es de vainilla con chips de chocolate y relleno de marshmallow.",
  //   price: 9300,
  //   imageUrl: "https://via.placeholder.com/400x400?text=Krunch+S'more",
  // },
  {
    id: 2,
    name: "Arequipito",
    description:
      "Galleta de 115gr, su base es de vainilla con chips de chocolate negro y relleno de arequipe.",
    price: 13000,
    imageUrl: arequipito.src,
    quantity: 0,
  },
  {
    id: 3,
    name: "Chocolatier",
    description:
      "Galleta de 115gr, su base es de vainilla con chips de chocolate negro con relleno de nutella.",
    price: 9500,
    imageUrl: chocolatier.src,
    quantity: 0,
  },
  {
    id: 4,
    name: "Red Velvet",
    description: "Galleta de 100gr, su base es de cocoa.",
    price: 6500,
    imageUrl: red.src,
    quantity: 0,
  },
  {
    id: 5,
    name: "Cheesecake",
    description:
      "Galleta de 100gr, su base es de red velvet, con chips de chocolate blanco tiene un exquisito relleno de queso crema.",
    price: 8500,
    imageUrl: cheesecake.src,
    quantity: 0,
  },
  {
    id: 6,
    name: "Choco-Red",
    description:
      "Galleta de 115gr, su base es de red velvet con relleno de nutella.",
    price: 9500,
    imageUrl: chocoRed.src,
    quantity: 0,
  },
  // {
  //   name: "Arequipito Red",
  //   description:
  //     "Galleta de 115gr, su base es de red velvet con relleno de arequipe.",
  //   price: 12000,
  //   imageUrl: "https://via.placeholder.com/400x400?text=Arequipito+Red",
  // },
  // {
  //   name: "Blueberry Krunch",
  //   description:
  //     "Galleta de 115gr, su base es de vainilla con chips de chocolate blanco y arándano con un delicioso topping de chocolate blanco.",
  //   price: 9500,
  //   imageUrl: "https://via.placeholder.com/400x400?text=Blueberry+Krunch",
  // },
  {
    id: 7,
    name: "Kinder Bueno",
    description:
      "Galleta de 115gr, su base es vainilla con chips de chocolate negro, tiene trozos de kinder y para darle un toque un delicioso topping de kinder bueno.",
    price: 10000,
    imageUrl: kinder.src,
    quantity: 0,
  },
  // {
  //   name: "Oreo Chips",
  //   description:
  //     "Galleta de 115gr, su base es de red velvet, tiene trozos de galleta oreo y chips de chocolate blanco como topping pequeños trozos de oreo.",
  //   price: 7000,
  //   imageUrl: "https://via.placeholder.com/400x400?text=Oreo+Chips",
  // },
  // {
  //   name: "Choco S’more",
  //   description:
  //     "Galleta de 115gr, su sabor es de vainilla con chips de chocolate y relleno es marshmallow cubierto de chocolate.",
  //   price: 10000,
  //   imageUrl: "https://via.placeholder.com/400x400?text=Choco+S'more",
  // },
  // {
  //   name: "Jumbo Cookie",
  //   description:
  //     "Galleta de 115gr, su sabor es de chocolatina jumbo, tiene chips de chocolate y maní.",
  //   price: 8500,
  //   imageUrl: "https://via.placeholder.com/400x400?text=Jumbo+Cookie",
  // },
  {
    id: 8,
    name: "Churro",
    description:
      "Galleta de 115gr, su base es de canela, topping de crema especial al estilo cookie krunch.",
    price: 8000,
    imageUrl: churro.src,
    quantity: 0,
  },
];

const LandingPage = () => {
  return (
    <div>
      <CartProvider>
        <Header />
        <Hero />
        <ProductCarousel products={cookies} />
        <Footer />
      </CartProvider>
      {/* <main>
        <h1>Bienvenido a nuestra Galletería</h1>
        <p>Disfruta de nuestras deliciosas galletas artesanales.</p>
        <Link href="/catalogo">Visitar el catálogo de productos</Link>
      </main> */}
    </div>
  );
};

export default LandingPage;
