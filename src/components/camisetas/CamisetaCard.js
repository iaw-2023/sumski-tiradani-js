import React from "react";
import BoxAlt from "../../layouts/BoxAlt";
import ImageHover from "./ImageHover";
import { Link } from "react-router-dom";

function CamisetaCard({ camiseta }) {
  return (
    <BoxAlt>
      <ImageHover
        imagen_frente={camiseta.imagen_frente}
        imagen_atras={camiseta.imagen_atras}
      />
      <p className="font-bold text-xl">{camiseta.nombre}</p>
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
      <Link
        to={"/personalizar-camiseta/" + camiseta.nombre}
        className="flex w-100"
        state={{
          camiseta: camiseta,
        }}
      >
        <button className="w-full inline-flex items-center mt-2 p-2 font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Comprar
        </button>
      </Link>
    </BoxAlt>
  );
}

export default CamisetaCard;
