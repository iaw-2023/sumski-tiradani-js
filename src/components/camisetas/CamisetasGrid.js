import CamisetaCard from "./CamisetaCard";

function CamisetasGrid({ camisetas, cantidad, pageSize, page }) {
  const from = (page - 1) * pageSize;
  const to = Math.min((page - 1) * pageSize + pageSize, cantidad);

  const noCamisetasAvailableMessage = (
    <div className="w-full m-auto">
      <p className="font-bold text-4xl">{"Ups :("}</p>
      <p className="text-lg">
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
