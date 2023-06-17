import PasoLayout from "./PasoLayout";
import BoxAlt from "../../layouts/BoxAlt";
import { useState } from "react";

function DatosPersonales({ compraHook, nextStep }) {
  const PASO = 1;
  const TITULO = "Datos Personales 👤";

  const [compra] = compraHook;
  const [email] = useState(compra.cliente);

  const handleNextStep = () => {
    nextStep();
  };

  const CONTENT = (
    <>
      <BoxAlt>
        <p className="text-lg font-thin">Email:</p>
        <div className="flex w-full">
          <p className="w-full bg-neutral-200 text-black p-3 rounded-lg">
            {email}
          </p>
        </div>
        <p className="text-lg font-thin italic">
          Verificá tener acceso a este mail, este es nuestro medio de
          comunicación con vos.
        </p>
      </BoxAlt>
    </>
  );

  const BUTTONS = (
    <>
      <button
        className="bg-blue-900 p-1 rounded-md w-full text-white font-bold"
        disabled
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

export default DatosPersonales;
