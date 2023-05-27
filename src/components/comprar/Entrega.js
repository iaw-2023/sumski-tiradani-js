import PasoLayout from "./PasoLayout";

function Entrega({ compraHook, previousStep, nextStep }) {
  const PASO = 2;
  const TITULO = "Datos de Entrega 🚛";

  const handlePreviousStep = () => {
    previousStep();
  };
  const handleNextStep = () => {
    nextStep();
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
