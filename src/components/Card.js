import React from "react";

function Card({
  nombre,
  descripcion,
  precio,
  imagen_frente,
  imagen_atras,
  talles_disponibles,
  categorias,
}) {
  return (
    <div class="max-w-sm rounded-lg overflow-hidden shadow-lg px-2 py-2">
      <img class="w-full rounded-t-lg" src={imagen_frente} alt="Camiseta" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{nombre}</div>
        <p class="text-gray-700 text-base">{descripcion}</p>
      </div>
      <div class="px-6 pt-4 pb-2">{categorias}</div>

      <a
        href="/prueba"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
      </a>
    </div>
  );
}

export default Card;
