import { useContext, useEffect, useState } from "react";
import PasoLayout from "./PasoLayout";
import Error from "../Error";
import Loading from "../Loading";
import { CartContext } from "../../contexts/CartContext";
import { useAuth0 } from "@auth0/auth0-react";

const FinCompra = ({ compraHook }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const [compra] = compraHook;
  const [, setCart] = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const TITULO = loading
    ? "Confirmando compra... ⏳"
    : errorMsg === ""
    ? "Compra realizada 😊"
    : "Algo salió mal ☹️";

  useEffect(() => {
    if (isAuthenticated) {
      const buy = async () => {
        setLoading(true);
        const token = await getAccessTokenSilently();
        await fetch(API_URL + "/comprar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            accept: "application/json",
          },
          body: JSON.stringify(compra),
        })
          .then((response) => {
            if (response.ok) {
              setCart([]);
              setLoading(false);
            }
            if (response.status === 422) return response.json();
          })
          .then((data) => {
            const responseError = data.message;
            if (responseError.includes("forma_de_pago")) {
              setLoading(false);
              setErrorMsg("Hubo un problema con el pago, intentalo más tarde");
            } else {
              setCart([]);
              setLoading(false);
              setErrorMsg(
                "Algunos de los productos de tu carrito no estaban disponibles"
              );
            }
          })
          .catch((error) => {
            setErrorMsg(
              "No se pudo completar la compra, error de red o autenticación"
            );
            setLoading(false);
          });
      };
      if (!user.email_verified) {
        setErrorMsg(
          "No se pudo realizar la compra, el mail no está verificado"
        );
        setLoading(false);
      } else buy();
    }
  }, [compra, setCart, API_URL, user, getAccessTokenSilently, isAuthenticated]);

  const CONTENT = loading ? (
    <Loading />
  ) : errorMsg === "" ? (
    <>
      <p className="font-bold">Muchas gracias por confiar en nosotros!</p>
      <p className="font-light">
        Tus productos ya están siendo preparados, cualquier novedad serás
        informado a través del mail proporcionado.
      </p>
    </>
  ) : (
    <Error message={errorMsg} />
  );

  return <PasoLayout title={TITULO} content={CONTENT} buttons={null} />;
};

export default FinCompra;
