import PasoLayout from "./PasoLayout";

function DatosPersonales({ compraHook, nextStep }) {
  const PASO = 1;
  const TITULO = "Datos Personales 👤";
  const handleNextStep = () => {
    nextStep();
  };

  const CONTENT = <></>;

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
