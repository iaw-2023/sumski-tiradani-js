import React from "react";
import { Link } from "react-router-dom";
import BoxAlt from "../../layouts/BoxAlt";

function Card({ camiseta }) {
  return (
    <BoxAlt>
      <img
        className="w-full rounded-t-lg group-hover:hidden"
        src={"data:image/png;base64," + camiseta.imagen_frente}
        alt="Camiseta"
      />
      <p className="font-bold text-xl">{camiseta.nombre}</p>
      <p className="font-thin">
        {camiseta.descripcion.length > 16
          ? camiseta.descripcion.substring(0, 16) + "..."
          : camiseta.descripcion}
      </p>

      <div className="mt-auto">
        <p className="font-bold text-lg">{"$" + camiseta.precio}</p>
      </div>
      <Link
        to={"camiseta/" + camiseta.nombre}
        className="inline-flex items-center mt-2 p-2 font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Comprar
      </Link>
    </BoxAlt>
  );
}

export default Card;
