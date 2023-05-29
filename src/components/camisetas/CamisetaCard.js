import React, { useContext } from "react";
import BoxAlt from "../../layouts/BoxAlt";
import ImageHover from "./ImageHover";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import Camisetas from "../../pages/Camisetas";

function CamisetaCard({ camiseta }) {
  const [, setCart] = useContext(CartContext);

  // TO-DO
  // Correr esto de aca, a la pag de Camiseta Individual
  const addToCart = () => {
    const z = Math.floor(Math.random() * (66 - 21 + 1)) + 21;
    const pedido = {
      nombre_a_estampar: "Prueba",
      numero_a_estampar: z,
      talle: "M",
    };

    setCart((cart) => {
      const itemExists = cart.find(
        (item) => item.camiseta.nombre === camiseta.nombre
      );
      if (itemExists) {
        return cart.map((item) => {
          if (item.camiseta.nombre === camiseta.nombre)
            return { ...item, pedidos: [...item.pedidos, pedido] };
          else return item;
        });
      } else {
        return [...cart, { camiseta: camiseta, pedidos: [pedido] }];
      }
    });
  };

  return (
    <BoxAlt>
      <ImageHover
        imagen_frente={camiseta.imagen_frente}
        imagen_atras={camiseta.imagen_atras}
      />
      <Link
        to={"/personalizar-camiseta/" + camiseta.nombre}
        state={{
          estado: {
            nombre: camiseta.nombre,
            imagen_frente: camiseta.imagen_frente,
            imagen_atras: camiseta.imagen_atras,
            descripcion: camiseta.descripcion,
            talles_disponibles: camiseta.talles_disponibles,
          },
        }}
      >
        <p className="font-bold text-xl">{camiseta.nombre}</p>
      </Link>
      <p className="font-thin">
        {camiseta.descripcion.length > 16
          ? camiseta.descripcion.substring(0, 16) + "..."
          : camiseta.descripcion}
      </p>

      <div className="mt-auto">
        <p className="font-bold text-lg">
          {"$" + Number.parseFloat(camiseta.precio).toFixed(2)}
        </p>
      </div>
      <button
        onClick={addToCart}
        className="inline-flex items-center mt-2 p-2 font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Comprar
      </button>
    </BoxAlt>
  );
}

export default CamisetaCard;
