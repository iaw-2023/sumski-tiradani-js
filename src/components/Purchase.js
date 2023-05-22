import { Link } from "react-router-dom";
import Box from "../layouts/Box";
import Shop2Icon from "@mui/icons-material/Shop2";
import InfoIcon from "@mui/icons-material/Info";

const Purchase = ({
  cantidad,
  pedidos,
  direccion,
  pago,
  precio,
  fecha,
  estado,
}) => {
  const pedidosString = pedidos.map((item) => `${item.camiseta_id}`).join(", ");
  const pedidosStringShort =
    pedidosString.length > 40
      ? pedidosString.substring(0, 37) + "..."
      : pedidosString;
  const pedidosStringShorter =
    pedidosString.length > 20
      ? pedidosString.substring(0, 17) + "..."
      : pedidosString;
  return (
    <Box>
      <div className="flex flex-row md:grid md:grid-cols-9 p-4 space-x-4 ">
        <Shop2Icon fontSize="large" />
        <p className="font-medium hidden md:inline">
          {cantidad + " camisetas"}
        </p>
        <p className="font-medium inline md:hidden">{"X" + cantidad}</p>
        <p className="font-medium hidden md:inline">{pedidosStringShort}</p>
        <p className="font-medium inline md:hidden">{pedidosStringShorter}</p>
        <p className="font-medium">{"$" + precio}</p>
        <p className="font-medium hidden md:inline">{pago}</p>
        <p className="font-medium hidden md:inline">{direccion}</p>
        <p className="font-medium hidden md:inline">{fecha}</p>
        <p className="font-medium">{estado}</p>
        <Link>
          <button
            className="bg-blue-600 rounded-md font-medium p-2 hidden md:inline transition-colors text-white"
            title="Ver detalle"
          >
            Ver detalle
          </button>
          <button
            className="bg-blue-600 rounded-md font-medium p-2 inline md:hidden transition-colors text-white"
            title="Ver detalle"
          >
            <InfoIcon />
          </button>
        </Link>
      </div>
    </Box>
  );
};

export default Purchase;
