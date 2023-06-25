import Box from "../../layouts/Box";
import BoxAlt from "../../layouts/BoxAlt";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const Purchase = ({
  cantidad,
  pedidos,
  direccion,
  pago,
  precio,
  fecha,
  estado,
}) => {
  const [detalleShown, setDetalleShown] = useState(false);

  const groupBy = (array, property) =>
    Object.entries(
      array.reduce((grouped, element) => {
        const key = element[property];
        if (!grouped[key]) {
          grouped[key] = [];
        }
        grouped[key].push(element);
        return grouped;
      }, {})
    ).map(([key, value]) => ({ [property]: key, elements: value }));

  const pedidosGrouped = groupBy(pedidos, "camiseta_id");

  return (
    <Box>
      <BoxAlt>
        <div className="flex flex-row w-full">
          <p className="font-bold w-full">Ticket de compra</p>
          <p className="w-full ml-auto text-right">{fecha}</p>
        </div>
        <div className="hidden md:flex flex-row space-x-4">
          <p className="font-medium w-full">{cantidad + " camiseta/s"}</p>
          <p className="font-medium w-full">{"$" + precio}</p>
          <p className="font-medium w-full">{pago}</p>
          <p className="font-medium w-full">
            {direccion.replaceAll("|", ", ")}
          </p>
          <p className="font-medium w-full text-right">{estado}</p>
        </div>
        <div className="flex flex-col md:hidden">
          <div className="flex flex-row w-full">
            <p className="font-medium w-full">{cantidad + " camiseta/s"}</p>
            <p className="font-medium w-full ml-auto text-right">
              {"$" + precio}
            </p>
          </div>
          <div className="flex flex-row w-full">
            <p className="font-medium w-full">
              {direccion.replaceAll("|", ", ")}
            </p>
          </div>
          <div className="flex flex-row w-full">
            <p className="font-medium text-left">{pago}</p>
            <p className="font-medium ml-auto text-right">{estado}</p>
          </div>
        </div>
      </BoxAlt>
      <BoxAlt>
        <div className="flex flex-row">
          <p className="font-bold">Detalle</p>
          <button
            className="ml-auto hover:text-neutral-500 dark:hover:text-slate-700"
            onClick={() => setDetalleShown(!detalleShown)}
            aria-label="Mostrar detalle de compra"
          >
            {detalleShown ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </button>
        </div>
        {detalleShown &&
          pedidosGrouped.map((pedido, idx) => (
            <div className="space-y-4" key={idx}>
              <div className="flex flex-row">
                <p className="font-semibold">{pedido.camiseta_id}</p>
                <p className="ml-auto">{"x" + pedido.elements.length}</p>
              </div>
              {pedido.elements.map((detalle, idx2) => (
                <div className="flex flex-row space-x-4" key={idx2}>
                  <p className="text-xs">
                    {"Nombre a estampar: " + detalle.nombre_a_estampar}
                  </p>
                  <p className="text-xs">
                    {"Número a estampar: " + detalle.numero_a_estampar}
                  </p>
                  <p className="text-xs">
                    {"Talle elegido: " + detalle.talle_elegido}
                  </p>
                  <p className="text-xs">{"$" + detalle.precio}</p>
                </div>
              ))}
              {idx !== pedidosGrouped.length - 1 && (
                <hr className="border-black dark:border-neutral-50 bg-black dark:bg-neutral-50" />
              )}
            </div>
          ))}
      </BoxAlt>
    </Box>
  );
};

export default Purchase;
