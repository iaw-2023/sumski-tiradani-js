import React from "react";
import { Link } from "react-router-dom";

function Card({ camiseta }) {
  return (
    <div className="flex flex-col sm:max-w-sm p-4 space-y-2 shadow-md rounded-lg overflow-hidden transition-colors bg-neutral-300 dark:bg-slate-700 text-black dark:text-white">
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
        to="/prueba"
        className="inline-flex items-center mt-2 p-2 font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Comprar
      </Link>
    </div>
  );
}

export default Card;
