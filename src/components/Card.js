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
    <div class="max-w-sm rounded-lg overflow-hidden shadow-lg flex flex-col ">
      <img
        class="w-full rounded-t-lg group-hover:hidden"
        src={imagen_frente}
        alt="Camiseta"
      />
      <div class="mx-4">
        <p class="font-bold md:text-lg lg:text-xl">{nombre}</p>
      </div>
      <div class="mx-4">
        <p class="text-gray-700 ">{descripcion}</p>
      </div>
      <div class="mt-auto py-2 px-2">
        <a
          href="/prueba"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default Card;
