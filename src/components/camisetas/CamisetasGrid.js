import CamisetaCard from "./CamisetaCard";

function CamisetasGrid({ camisetas, cantidad, pageSize, page }) {
  const from = (page - 1) * pageSize;
  const to = Math.min((page - 1) * pageSize + pageSize, cantidad);

  const noCamisetasAvailableMessage = (
    <div className="flex flex-col w-full">
      <p className="font-bold text-4xl text-center">{"Ups :("}</p>
      <p className="text-lg text-center">
        Lo sentimos, no tenemos camisetas disponibles para la categoría
        seleccionada.
      </p>
    </div>
  );

  return (
    <>
      {camisetas.length > 0
        ? camisetas
            .slice(from, to)
            .map((camiseta, key) => (
              <CamisetaCard key={key} camiseta={camiseta} />
            ))
        : noCamisetasAvailableMessage}
    </>
  );
}

export default CamisetasGrid;
