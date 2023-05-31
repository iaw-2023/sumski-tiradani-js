import Box from "../../layouts/Box";
import ItemCamiseta from "./ItemCamiseta";
import ItemPedido from "./ItemPedido";

const Item = ({ camiseta, pedidos }) => {
  return (
    <Box>
      <ItemCamiseta camiseta={camiseta} cantidadPedida={pedidos.length} />
      <div className="space-y-2">
        {pedidos.map((pedido, idx) => (
          <>
            <ItemPedido camiseta={camiseta} pedido={pedido} key={idx} />
            {idx !== pedidos.length - 1 && (
              <hr className="bg-black dark:bg-neutral-50" />
            )}
          </>
        ))}
      </div>
    </Box>
  );
};

export default Item;
