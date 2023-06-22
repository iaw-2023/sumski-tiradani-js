import Box from "../../layouts/Box";
import Purchase from "./Purchase";
import Loading from "../Loading";

const PurchaseHistory = ({ history, loading, errorMessage }) => {
  return (
    <>
      {loading && <Loading />}
      {errorMessage !== "" ? (
        <Box>
          <p className="text-lg italic text-red-700">{errorMessage}</p>
        </Box>
      ) : (
        <>
          {history
            .slice(0)
            .reverse()
            .map((purchase, key) => {
              return (
                <Purchase
                  cantidad={purchase.pedidos.length}
                  pedidos={purchase.pedidos}
                  direccion={purchase.direccion_de_entrega}
                  pago={purchase.forma_de_pago}
                  precio={purchase.precio_total}
                  fecha={purchase.fecha_hora}
                  estado={purchase.estado}
                  key={key}
                />
              );
            })}
        </>
      )}
    </>
  );
};

export default PurchaseHistory;
