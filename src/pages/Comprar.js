import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import CenteredContent from "../layouts/CenteredContent";
import Error from "../components/Error";
import Box from "../layouts/Box";
import BoxAlt from "../layouts/BoxAlt";
import CompraLayout from "../components/comprar/CompraLayout";
import InfoCompra from "../components/comprar/InfoCompra";
import DatosPersonales from "../components/comprar/DatosPersonales";
import Entrega from "../components/comprar/Entrega";
import Pago from "../components/comprar/Pago";
import FinCompra from "../components/comprar/FinCompra";

const Comprar = () => {
  const [cart] = useContext(CartContext);

  const [compra, setCompra] = useState({
    cliente: "",
    forma_de_pago: "",
    direccion_de_entrega: "",
    pedidos: [],
  });

  const [paso, setPaso] = useState(1);

  return (
    <CenteredContent>
      <p className="text-3xl font-bold">Comprar...</p>
      <Box>
        {cart.length > 0 || paso === 4 ? (
          <CompraLayout>
            <BoxAlt>
              {paso === 1 && (
                <DatosPersonales
                  compraHook={[compra, setCompra]}
                  nextStep={() => setPaso(paso + 1)}
                />
              )}
              {paso === 2 && (
                <Entrega
                  compraHook={[compra, setCompra]}
                  previousStep={() => setPaso(paso - 1)}
                  nextStep={() => setPaso(paso + 1)}
                />
              )}
              {paso === 3 && (
                <Pago
                  compraHook={[compra, setCompra]}
                  previousStep={() => setPaso(paso - 1)}
                  nextStep={() => setPaso(paso + 1)}
                />
              )}
              {paso === 4 && <FinCompra />}
            </BoxAlt>
            <InfoCompra finalizada={paso === 4} />
          </CompraLayout>
        ) : (
          <Error message="No se puede comprar con el carrito vacío :c" />
        )}
      </Box>
    </CenteredContent>
  );
};

export default Comprar;
