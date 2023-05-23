import React from "react";
import CenteredContent from "../layouts/CenteredContent";
import ResponsiveGridLayout from "../layouts/ResponsiveGridLayout";
import Card from "../components/Card";

const Camisetas = () => {
  const [entradas, setEntries] = React.useState([]);

  React.useEffect(() => {
    obtenerData();
  }, []);

  const obtenerData = async () => {
    const data = await fetch(
      "https://tucasaca-laravel-git-correcciones-entrega2-sumski-tiradani.vercel.app/_api/camisetas"
    );
    const entries = await data.json();
    console.log(entries);
    setEntries(entries);
  };

  return (
    <CenteredContent>
      <ResponsiveGridLayout>
        <div>Categorias</div>
        {entradas.map((item) => (
          <Card
            key={item.nombre}
            nombre={item.nombre}
            descripcion={
              item.descripcion.length > 16
                ? item.descripcion.substring(0, 16) + "..."
                : item.descripcion
            }
            precio={item.precio}
            imagen_frente={"data:image/png;base64," + item.imagen_frente}
            imagen_atras={item.imagen_atras}
            talles_disponibles={item.talles_disponibles}
            categorias={item.categorias.map((categoria, key) => (
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                key={key}
              >
                {categoria.name}
              </span>
            ))}
          ></Card>
        ))}
      </ResponsiveGridLayout>
    </CenteredContent>
  );
};

export default Camisetas;
