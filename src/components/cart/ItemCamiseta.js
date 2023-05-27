function ItemCamiseta({ camiseta, cantidadPedida }) {
  return (
    <>
      <div className="flex flex-row space-x-4">
        <img
          src={"data:image/png;base64," + camiseta.imagen_frente}
          className="rounded-md h-16"
          alt="Camiseta"
        />
        <div className="flex flex-col space-y-2 w-full">
          <p className="text-md hidden sm:inline"> {camiseta.nombre}</p>
          <p className="text-md text-gray-500 hidden sm:inline">
            {camiseta.descripcion}
          </p>
          <p className="text-md inline sm:hidden">
            {camiseta.nombre.length > 16
              ? camiseta.nombre.substring(0, 16) + "..."
              : camiseta.nombre}
          </p>
          <p className="text-md text-gray-500 inline sm:hidden">
            {camiseta.descripcion.length > 16
              ? camiseta.descripcion.substring(0, 16) + "..."
              : camiseta.descripcion}
          </p>
        </div>
        <p className="text-md"> {"X" + cantidadPedida}</p>
        <p className="text-md">
          {" "}
          {"$" + (camiseta.precio * cantidadPedida).toFixed(2)}
        </p>
      </div>
      <hr className="h-0.5 bg-black dark:bg-neutral-50" />
    </>
  );
}

export default ItemCamiseta;
