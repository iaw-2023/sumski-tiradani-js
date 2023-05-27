import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import BoxAlt from "../../layouts/BoxAlt";
import Box from "../../layouts/Box";
import { Link } from "react-router-dom";

function InfoCompra({ finalizada }) {
  const [cart] = useContext(CartContext);

  const [precio] = useState(
    cart
      .reduce(
        (total, currentItem) =>
          (total =
            total + currentItem.camiseta.precio * currentItem.pedidos.length),
        0
      )
      .toFixed(2)
  );
  const [cantidad] = useState(
    cart.reduce(
      (total, currentItem) => (total = total + currentItem.pedidos.length),
      0
    )
  );

  return (
    <BoxAlt>
      <p className="text-2xl font-bold">Resumen</p>
      <Box>
        <div className="flex flex-row">
          <p className="text-lg font-bold mr-auto">Productos:</p>
          <p className="text-lg font-semibold">{cantidad}</p>
        </div>
      </Box>
      <Box>
        <div className="flex flex-row">
          <p className="text-lg font-bold mr-auto">Total:</p>
          <p className="text-lg font-semibold">{"$" + precio}</p>
        </div>
      </Box>
      {!finalizada ? (
        <>
          <Link to="/cart" className="w-auto">
            <button className="bg-yellow-700 p-1 rounded-md w-full text-white font-bold hover:bg-yellow-900">
              Volver al carrito
            </button>
          </Link>
          <Link to="/" className="w-auto">
            <button className="bg-red-700 p-1 rounded-md w-full text-white font-bold hover:bg-red-900">
              Cancelar compra
            </button>
          </Link>
        </>
      ) : (
        <Link to="/" className="w-auto">
          <button className="bg-blue-700 p-1 rounded-md w-full text-white font-bold hover:bg-blue-900">
            Volver a home
          </button>
        </Link>
      )}
    </BoxAlt>
  );
}

export default InfoCompra;
