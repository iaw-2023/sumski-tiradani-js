import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CenteredContent from "../layouts/CenteredContent";
import Item from "../components/cart/Item";
import Box from "../layouts/Box";

function Cart() {
  const [cart] = useContext(CartContext);
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
        cart.map((item, idx) => (
          <Item camiseta={item.camiseta} pedidos={item.pedidos} />
        ))
      )}
      {cart.length > 0 && <Box>{precio_total}</Box>}
    </CenteredContent>
  );
}

export default Cart;
