import Box from "../../layouts/Box";
import ItemCamiseta from "./ItemCamiseta";
import ItemPedido from "./ItemPedido";

const Item = ({ camiseta, pedidos }) => {
  return (
    <Box>
      <ItemCamiseta camiseta={camiseta} cantidadPedida={pedidos.length} />
      <div className="space-y-2">
        {pedidos.map((pedido, idx) => (
          <ItemPedido camiseta={camiseta} pedido={pedido} key={idx} />
        ))}
      </div>
    </Box>
  );
};

export default Item;
