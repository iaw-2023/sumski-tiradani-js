import { useEffect, useState } from "react";
import PasoLayout from "./PasoLayout";
import Error from "../Error";
import Loading from "../Loading";

const FinCompra = ({ compraHook }) => {
  const API_URL = process.env.REACT_APP_API_URL;

  const [compra] = compraHook;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const TITULO = loading
    ? "Confirmando compra... ⏳"
    : error === ""
    ? "Compra realizada 😊"
    : "Algo salió mal ☹️";

  useEffect(() => {
    setLoading(true);
    fetch(API_URL + "/comprar", {
      method: "POST",
      headers: {
        "X-CSRF-TOKEN": "",
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(compra),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error de Red");
        else setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError("No se pudo completar la compra, intentalo mas tarde");
      });
  }, [compra, API_URL]);

  const CONTENT = loading ? (
    <Loading />
  ) : error === "" ? (
    <>
      <p className="font-bold">Muchas gracias por confiar en nosotros!</p>
      <p className="font-light">
        Tus productos ya están siendo preparados, cualquier novedad serás
        informado a través del mail proporcionado.
      </p>
    </>
  ) : (
    <Error message={error} />
  );

  return <PasoLayout title={TITULO} content={CONTENT} buttons={null} />;
};

export default FinCompra;
