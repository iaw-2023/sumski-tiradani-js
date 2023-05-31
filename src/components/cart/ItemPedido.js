import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function ItemPedido({ camiseta, pedido }) {
  const [, setCart] = useContext(CartContext);

  const deleteFromCart = () => {
    setCart((cart) => {
      if (
        cart.find((item) => item.camiseta.nombre === camiseta.nombre).pedidos
          .length === 1
      ) {
        return cart.filter((item) => item.camiseta.nombre !== camiseta.nombre);
      } else
        return cart.map((item) => {
          if (item.camiseta.nombre === camiseta.nombre) {
            const pedidosRestantes = item.pedidos.filter((p) => p !== pedido);
            return { ...item, pedidos: pedidosRestantes };
          } else {
            return item;
          }
        });
    });
  };

  return (
    <div className="flex flex-row pl-20">
      <div className="flex flex-col lg:flex-row lg:space-x-4 w-full">
        <p className="text-sm">{"Nombre: " + pedido.nombre_a_estampar}</p>
        <p className="text-sm">
          {"Número: " +
            (pedido.numero_a_estampar !== "0"
              ? pedido.numero_a_estampar
              : "NO ESTAMPAR")}
        </p>
        <p className="text-sm">{"Talle: " + pedido.talle}</p>
      </div>
      <button
        className="text-neutral-900 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-slate-700"
        onClick={deleteFromCart}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default ItemPedido;
