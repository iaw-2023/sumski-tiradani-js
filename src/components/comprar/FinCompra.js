import { useState } from "react";
import PasoLayout from "./PasoLayout";
import Error from "../Error";
import Loading from "../Loading";

const FinCompra = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const TITULO = loading
    ? "Realizando pago... 🤑"
    : error === ""
    ? "Compra realizada 😊"
    : "Algo salió mal ☹️";

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
    <Error message={"No se pudo completar la compra, intentalo mas tarde"} />
  );

  return <PasoLayout title={TITULO} content={CONTENT} buttons={null} />;
};

export default FinCompra;
