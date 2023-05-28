import PasoLayout from "./PasoLayout";
import Box from "../../layouts/Box";
import { useEffect, useState } from "react";

function DatosPersonales({ compraHook, nextStep }) {
  const PASO = 1;
  const TITULO = "Datos Personales 👤";

  const [compra, setCompra] = compraHook;
  const [email, setEmail] = useState(compra.cliente);
  const [error, setError] = useState("");

  const handleInput = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const handleNextStep = () => {
    if (email === "") {
      setError("Se requiere un email para hacer una compra");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setError("El mail no corresponde a un formato válido");
    } else {
      setCompra({ ...compra, cliente: email });
      nextStep();
    }
  };

  const CONTENT = (
    <>
      <Box>
        <p className="text-lg font-thin">Email:</p>
        <div className="flex w-full">
          <input
            className="w-full text-black p-3 rounded-lg"
            type="email"
            onChange={handleInput}
            placeholder="Ingresa tu correo electrónico"
            defaultValue={email}
          ></input>
        </div>
      </Box>
      {error ? (
        <Box>
          <p className="text-red-600 italic">{error}</p>
        </Box>
      ) : null}
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
