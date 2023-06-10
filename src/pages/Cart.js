import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CenteredContent from "../layouts/CenteredContent";
import Item from "../components/cart/Item";
import Box from "../layouts/Box";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useContext(CartContext);
  const cant_productos = (
    <div className="flex flex-row">
      <p className="font-bold">Productos: </p>
      <p className="font-bold ml-auto">
        {cart.reduce(
          (total, currentItem) => (total = total + currentItem.pedidos.length),
          0
        )}
      </p>
    </div>
  );
  const precio_total = (
    <div className="flex flex-row">
      <p className="text-lg font-bold mr-auto">Total:</p>
      <p className="text-lg font-semibold">
        {"$" +
          cart
            .reduce(
              (total, currentItem) =>
                (total =
                  total +
                  currentItem.camiseta.precio * currentItem.pedidos.length),
              0
            )
            .toFixed(2)}
      </p>
    </div>
  );

  return (
    <CenteredContent>
      <p className="text-3xl font-bold">Carrito</p>
      {cart.length === 0 ? (
        <p className="text-xl">Tenés 0 productos en tu carrito :c</p>
      ) : (
        <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">
          <div className="w-full md:w-2/3 space-y-2">
            {cart.map((item, idx) => (
              <Item camiseta={item.camiseta} pedidos={item.pedidos} key={idx} />
            ))}
            <Box>{cant_productos}</Box>
            <Box>{precio_total}</Box>
          </div>
          <div className="w-full md:w-1/3 space-y-4">
            <Box>
              <Link to="/comprar" className="w-auto">
                <button className="bg-green-700 p-4 rounded-md w-full text-white font-bold text-xl hover:bg-green-900">
                  Finalizar compra
                </button>
              </Link>
              <Link to="/camisetas" className="w-auto">
                <button className="bg-yellow-700 p-1 rounded-md w-full text-white font-bold hover:bg-yellow-900">
                  Seguir comprando
                </button>
              </Link>
              <button
                className="bg-red-700 p-1 rounded-md w-auto text-white font-bold hover:bg-red-900"
                onClick={() => setCart([])}
              >
                Limpiar carrito
              </button>
            </Box>
          </div>
        </div>
      )}
    </CenteredContent>
  );
}

export default Cart;
