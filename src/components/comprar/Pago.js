import { useContext } from "react";
import PasoLayout from "./PasoLayout";
import { CartContext } from "../../contexts/CartContext";

function Pago({ compraHook, previousStep, nextStep }) {
  const PASO = 3;
  const TITULO = "Pago 💰";

  const [, setCart] = useContext(CartContext);

  const handlePreviousStep = () => {
    previousStep();
  };

  const handleNextStep = () => {
    nextStep();
    setCart([]);
  };

  const CONTENT = <></>;

  const BUTTONS = (
    <>
      <button
        className="bg-blue-700 p-1 rounded-md w-full text-white font-bold hover:bg-blue-800"
        onClick={handlePreviousStep}
      >
        Paso previo
      </button>

      <button
        className="bg-green-700 p-1 rounded-md w-full text-white font-bold hover:bg-green-800"
        onClick={handleNextStep}
      >
        Comprar
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
