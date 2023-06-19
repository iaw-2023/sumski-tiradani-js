import PasoLayout from "./PasoLayout";
import BoxAlt from "../../layouts/BoxAlt";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function DatosPersonales({ compraHook, nextStep }) {
  const PASO = 1;
  const TITULO = "Datos Personales 👤";

  const [compra] = compraHook;
  const [email] = useState(compra.cliente);
  const { user } = useAuth0();

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
        {!user.email_verified && (
          <p className="font-bold italic text-red-700 align-bottom">
            Verificá tu mail para poder realizar compras
          </p>
        )}
        <p className="text-lg font-thin italic">
          Recordá que este es nuestro método de comunicación con vos.
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

      {user.email_verified && (
        <button
          className="bg-blue-700 p-1 rounded-md w-full text-white font-bold hover:bg-blue-800"
          onClick={handleNextStep}
        >
          Siguiente paso
        </button>
      )}

      {!user.email_verified && (
        <button
          className="bg-blue-900 p-1 rounded-md w-full text-white font-bold"
          disabled
        >
          Siguiente paso
        </button>
      )}
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
