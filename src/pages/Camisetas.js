import React from "react";
import CenteredContent from "../layouts/CenteredContent";
import ResponsiveGridLayout from "../layouts/ResponsiveGridLayout";
import Card from "../components/Card";
import CategoriesSideBar from "../components/CategoriesSideBar";

const Camisetas = () => {
  const [camisetas, setCamisetas] = React.useState([]);
  const [categorias, setCategorias] = React.useState([]);

  React.useEffect(() => {
    obtenerCamisetas();
    obtenerCategorias();
  }, []);

  const obtenerCamisetas = async () => {
    const data = await fetch(
      "https://tucasaca-laravel-git-correcciones-entrega2-sumski-tiradani.vercel.app/_api/camisetas"
    );
    const entries = await data.json();
    console.log(entries);
    setCamisetas(entries);
  };

  const obtenerCategorias = async () => {
    const data = await fetch(
      "https://tucasaca-laravel-git-correcciones-entrega2-sumski-tiradani.vercel.app/_api/categorias"
    );
    const entries = await data.json();
    setCategorias(entries);
  };

  return (
    <CenteredContent>
      <ResponsiveGridLayout>
        <CategoriesSideBar>
          <label className="flex flex-row label cursor-pointer">
            <span className="label-text text-base">Todo</span>
            <input
              id="categoria-todo"
              type="radio"
              name="radio-1"
              className="radio ml-auto"
              autoComplete
            />
          </label>
          {categorias.map((item) => (
            <label className="flex flex-row label cursor-pointer">
              <span className="label-text text-base">
                {item.name.length > 20
                  ? item.name.substring(0, 20) + "..."
                  : item.name}
              </span>
              <input type="radio" name="radio-1" className="radio ml-auto" />
            </label>
          ))}
        </CategoriesSideBar>

        {camisetas.map((item) => (
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
