import { CartContext } from "../../contexts/CartContext";
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";
import PasoLayout from "./PasoLayout";
import { useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function CardPaymentBrick({ nextStep, previousStep, compraHook }) {
  initMercadoPago("TEST-34738ec6-6b2a-462a-a9ad-3ebca2a3620f", {
    locale: "es",
  });

  const PASO = 3;
  const TITULO = "Pago 💰";
  const API_URL = process.env.REACT_APP_API_URL;
  //const API_URL = local
  const [compra] = compraHook;
  const [cart] = useContext(CartContext);
  const [errorMsg, setErrorMsg] = useState("");
  const [precio] = useState(
    cart.reduce(
      (total, currentItem) =>
        (total =
          total + currentItem.camiseta.precio * currentItem.pedidos.length),
      0
    )
  );

  const { user } = useAuth0();

  const initialization = {
    amount: precio,
    payer: {
      email: user.email,
    },
  };

  const handlePreviousStep = () => {
    previousStep();
  };

  const handleNextStep = () => {
    nextStep();
  };

  const onSubmit = async (formData) => {
    // callback llamado al hacer clic en el botón enviar datos
    return new Promise((resolve, reject) => {
      fetch("/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          handleNextStep();
          // recibir el resultado del pago
          resolve();
        })
        .catch((error) => {
          // manejar la respuesta de error al intentar crear el pago

          reject();
        });
    });
  };

  const onError = async (error) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error);
  };

  const onReady = async () => {
    /*
      Callback llamado cuando Brick está listo.
      Aquí puedes ocultar cargamentos de su sitio, por ejemplo.
    */
  };

  const BUTTONS = (
    <>
      <button
        className="bg-blue-700 p-1 rounded-md w-full text-white font-bold hover:bg-blue-800"
        onClick={handlePreviousStep}
      >
        Paso previo
      </button>
    </>
  );

  const CONTENT = (
    <CardPayment
      initialization={initialization}
      onSubmit={onSubmit}
      onReady={onReady}
      onError={onError}
    />
  );

  return (
    <PasoLayout
      paso={PASO}
      title={TITULO}
      content={CONTENT}
      buttons={BUTTONS}
    />
  );
}
export default CardPaymentBrick;
