import { CartContext } from "../../contexts/CartContext";
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";
import PasoLayout from "./PasoLayout";
import { useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../Loading";
import Error from "../Error";

function Pago({ compraHook, previousStep, nextStep }) {
  const API_URL = process.env.REACT_APP_API_URL;
  const MP_KEY = process.env.REACT_APP_MP_KEY;

  initMercadoPago(MP_KEY, {
    locale: "es",
  });

  const [compra, setCompra] = compraHook;
  const [cart] = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [shown, setShown] = useState(false);

  const [precio] = useState(
    cart.reduce(
      (total, currentItem) =>
        (total =
          total + currentItem.camiseta.precio * currentItem.pedidos.length),
      0
    )
  );

  const { user, getAccessTokenSilently } = useAuth0();

  const PASO = 3;
  const TITULO = "Pago 💰";

  const initialization = {
    amount: precio,
    payer: {
      email: user.email,
    },
  };

  const customization = {
    paymentMethods: {
      maxInstallments: 1,
    },
    visual: {
      style: {
        customVariables: {
          baseColor: "#166534",
          baseColorFirstVariant: "#158015",
          baseColorSecondVariant: "#16a34a",
        },
      },
    },
  };

  const handlePreviousStep = () => {
    previousStep();
  };

  const handleNextStep = () => {
    nextStep();
  };

  const onSubmit = async (formData) => {
    const token = await getAccessTokenSilently();
    return new Promise((resolve, reject) => {
      fetch(API_URL + "/comprar/auth", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) throw new Error("Error");
          return response.json();
        })
        .then((data) => {
          if (data.status !== undefined && data.status === "approved") {
            setCompra({ ...compra, forma_de_pago: "MercadoPago #" + data.id });
          }
          handleNextStep();
        })
        .then((response) => {
          resolve();
        })
        .catch((error) => {
          handleNextStep();
          reject();
        });
    });
  };

  const onError = async (error) => {
    handleNextStep();
  };

  const onReady = async () => {
    setLoading(false);
    setShown(true);
  };

  const CONTENT = (
    <>
      {loading && <Loading />}

      <div className={shown ? "block space-y-2" : "hidden"}>
        <p className="text-md font-bold">Mercado Pago</p>
        <p className="font-thin italic pb-2">
          Tus datos están seguros dentro de esta ventana ✔️
        </p>
        <CardPayment
          initialization={initialization}
          customization={customization}
          onSubmit={onSubmit}
          onReady={onReady}
          onError={onError}
        />
      </div>
    </>
  );

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

  return (
    <PasoLayout
      paso={PASO}
      title={TITULO}
      content={CONTENT}
      buttons={BUTTONS}
    />
  );
}
export default Pago;
