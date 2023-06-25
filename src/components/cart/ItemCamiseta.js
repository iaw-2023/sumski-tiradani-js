import { Link } from "react-router-dom";

function ItemCamiseta({ camiseta, cantidadPedida }) {
  return (
    <>
      <div className="flex flex-row space-x-4">
        <img
          src={"data:image/png;base64," + camiseta.imagen_frente}
          className="rounded-md h-16"
          alt="Camiseta"
        />

        <div className="flex-col space-y-2 w-full hidden sm:flex">
          <Link to={"/camiseta/" + camiseta.nombre} className="hover:font-bold">
            <p className="text-md"> {camiseta.nombre}</p>
          </Link>
          <p className="text-md text-gray-700 dark:text-gray-300">
            {camiseta.descripcion}
          </p>
        </div>
        <div className="flex-col space-y-2 w-full flex sm:hidden">
          <Link to={"/camiseta/" + camiseta.nombre}>
            <p className="text-md">
              {camiseta.nombre.length > 16
                ? camiseta.nombre.substring(0, 16) + "..."
                : camiseta.nombre}
            </p>
          </Link>
          <p className="text-md text-gray-700">
            {camiseta.descripcion.length > 16
              ? camiseta.descripcion.substring(0, 16) + "..."
              : camiseta.descripcion}
          </p>
        </div>
        <p className="text-md"> {"X" + cantidadPedida}</p>
        <p className="text-md font-semibold">
          {"$" + (camiseta.precio * cantidadPedida).toFixed(2)}
        </p>
      </div>
      <hr className="h-0.5 bg-black dark:bg-neutral-50" />
    </>
  );
}

export default ItemCamiseta;
