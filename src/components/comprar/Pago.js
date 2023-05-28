import { useContext, useState } from "react";
import PasoLayout from "./PasoLayout";
import { CartContext } from "../../contexts/CartContext";
import Box from "../../layouts/Box";

function Pago({ compraHook, previousStep, nextStep }) {
  const PASO = 3;
  const TITULO = "Pago 💰";

  const [, setCart] = useContext(CartContext);

  const [opcion, setOpcion] = useState("Efectivo");
  const [compra, setCompra] = compraHook;

  const handleSelect = (event) => {
    setOpcion(event.target.value);
  };

  const handlePreviousStep = () => {
    previousStep();
  };

  const handleNextStep = () => {
    setCompra({ ...compra, forma_de_pago: opcion });
    setCart([]);
    nextStep();
  };

  const CONTENT = (
    <>
      <Box>
        <p className="text-lg font-thin">Método de pago:</p>
        <select className="text-black p-4 rounded-md" onChange={handleSelect}>
          <option value="Efectivo">Efectivo en la entrega</option>
          <option value="Transferencia Bancaria">Transferencia Bancaria</option>
        </select>
      </Box>
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
