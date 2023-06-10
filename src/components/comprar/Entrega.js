import BoxAlt from "../../layouts/BoxAlt";
import PasoLayout from "./PasoLayout";
import { useState } from "react";

function Entrega({ compraHook, previousStep, nextStep }) {
  const PASO = 2;
  const TITULO = "Datos de Entrega 🚛";

  const [compra, setCompra] = compraHook;
  const [ciudad, setCiudad] = useState(
    compra.direccion_de_entrega.split("|")[0] || ""
  );
  const [calle, setCalle] = useState(
    compra.direccion_de_entrega.split("|")[1] || ""
  );
  const [numero, setNumero] = useState(
    compra.direccion_de_entrega.split("|")[2] || ""
  );
  const [error, setError] = useState("");

  const handleInputCiudad = (event) => {
    setCiudad(event.target.value);
    setError("");
  };
  const handleInputCalle = (event) => {
    setCalle(event.target.value);
    setError("");
  };
  const handleInputNumero = (event) => {
    setNumero(event.target.value);
    setError("");
  };

  const handlePreviousStep = () => {
    previousStep();
  };

  const handleNextStep = () => {
    if (ciudad === "" || !/^[A-zÀ-ú\s,.]+$/i.test(ciudad))
      setError("Se requiere un nombre válido de ciudad");
    else if (calle === "" || !/^[A-zÀ-ú\s.]+$/i.test(calle))
      setError("Se requiere un nombre válido de calle");
    else if (numero === "" || !/^\d{1,}$/i.test(numero))
      setError("El número de calle tiene que ser válido");
    else {
      setCompra({
        ...compra,
        direccion_de_entrega: ciudad + "|" + calle + "|" + numero,
      });
      nextStep();
    }
  };

  const CONTENT = (
    <>
      <BoxAlt>
        <p className="text-lg font-thin">Ciudad:</p>
        <div className="flex w-full">
          <input
            className="w-full text-black p-3 rounded-lg"
            onChange={handleInputCiudad}
            placeholder="Ciudad"
            defaultValue={ciudad}
          ></input>
        </div>
      </BoxAlt>
      <BoxAlt>
        <p className="text-lg font-thin">Dirección:</p>
        <div className="flex w-full space-x-2">
          <input
            className="w-full text-black p-3 rounded-lg"
            onChange={handleInputCalle}
            placeholder="Calle"
            defaultValue={calle}
          ></input>
          <input
            className="w-full text-black p-3 rounded-lg"
            onChange={handleInputNumero}
            placeholder="Número"
            defaultValue={numero}
          ></input>
        </div>
      </BoxAlt>
      {error ? (
        <BoxAlt>
          <p className="text-red-600 italic">{error}</p>
        </BoxAlt>
      ) : null}
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
        className="bg-blue-700 p-1 rounded-md w-full text-white font-bold hover:bg-blue-800"
        onClick={handleNextStep}
      >
        Siguiente paso
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

export default Entrega;
