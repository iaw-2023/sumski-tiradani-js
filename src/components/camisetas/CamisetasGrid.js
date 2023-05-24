import Card from "../Card";

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
            .map((item, itemkey) => (
              <Card
                key={itemkey}
                nombre={item.nombre}
                descripcion={item.descripcion}
                precio={item.precio}
                imagen_frente={item.imagen_frente}
                imagen_atras={item.imagen_atras}
                talles_disponibles={item.talles_disponibles}
                categorias={item.categorias}
              ></Card>
            ))
        : noCamisetasAvailableMessage}
    </>
  );
}

export default CamisetasGrid;
