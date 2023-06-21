import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import CenteredContent from "../layouts/CenteredContent";
import Error from "../components/Error";
import Box from "../layouts/Box";
import CompraLayout from "../components/comprar/CompraLayout";
import InfoCompra from "../components/comprar/InfoCompra";
import DatosPersonales from "../components/comprar/DatosPersonales";
import Entrega from "../components/comprar/Entrega";
import Pago from "../components/comprar/Pago";
import FinCompra from "../components/comprar/FinCompra";
import { useAuth0 } from "@auth0/auth0-react";
import CardPaymentBrick from "../components/comprar/CardPaymentBrick";

const Comprar = () => {
  const [cart] = useContext(CartContext);
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();

  const [compra, setCompra] = useState({
    cliente: user ? user.email : "",
    forma_de_pago: "",
    direccion_de_entrega: "",
    pedidos: cart
      .map((item) =>
        item.pedidos.map((pedido) => {
          return {
            nombre_camiseta: item.camiseta.nombre,
            nombre_a_estampar: pedido.nombre_a_estampar,
            numero_a_estampar: pedido.numero_a_estampar,
            talle_elegido: pedido.talle,
          };
        })
      )
      .flatMap((arr) => arr),
  });

  const [paso, setPaso] = useState(1);

  if (isAuthenticated)
    return (
      <CenteredContent>
        <p className="text-3xl font-bold">Comprar...</p>
        {cart.length > 0 || paso === 4 ? (
          <CompraLayout>
            <Box>
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
                <CardPaymentBrick
                  compraHook={[compra, setCompra]}
                  previousStep={() => setPaso(paso - 1)}
                  nextStep={() => setPaso(paso + 1)}
                />
              )}
              {paso === 4 && <FinCompra compraHook={[compra, setCompra]} />}
            </Box>
            <InfoCompra finalizada={paso === 4} />
          </CompraLayout>
        ) : (
          <Error message="No se puede comprar con el carrito vacío :c" />
        )}
      </CenteredContent>
    );
  else return loginWithRedirect();
};

export default Comprar;
