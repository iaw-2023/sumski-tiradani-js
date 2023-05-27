import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CenteredContent from "../layouts/CenteredContent";
import Item from "../components/cart/Item";
import Box from "../layouts/Box";

function Cart() {
  const [cart, setCart] = useContext(CartContext);
  const precio_total = (
    <div className="flex flex-row">
      <p className="text-lg font-bold mr-auto">Total:</p>
      <p className="text-lg">
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
        <>
          {cart.map((item, idx) => (
            <Item camiseta={item.camiseta} pedidos={item.pedidos} key={idx} />
          ))}
          <Box>
            <p className="font-semibold">{precio_total}</p>
          </Box>
          <Box>
            <button className="bg-green-700 p-4 rounded-md w-auto text-white font-bold text-xl hover:bg-green-900">
              Finalizar compra
            </button>
            <button className="bg-yellow-700 p-1 rounded-md w-auto text-white font-bold hover:bg-yellow-900">
              Seguir comprando
            </button>
            <button
              className="bg-red-700 p-1 rounded-md w-auto text-white font-bold hover:bg-red-900"
              onClick={() => setCart([])}
            >
              Limpiar carrito
            </button>
          </Box>
        </>
      )}
    </CenteredContent>
  );
}

export default Cart;
