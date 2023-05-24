import { useState, useEffect } from "react";
import CenteredContent from "../layouts/CenteredContent";
import ResponsiveGridLayout from "../layouts/ResponsiveGridLayout";
import Card from "../components/Card";
import CategoriesSideBar from "../components/CategoriesSideBar";
import Loading from "../components/Loading";

const Camisetas = () => {
  const [camisetas, setCamisetas] = useState([]);
  const [camisetasToShow, setCamisetasToShow] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelected, setCategoriaSelected] = useState("%");
  const [loadingCamisetas, setLoadingCamisetas] = useState(true);
  const [loadingCategorias, setLoadingCategorias] = useState(true);

  useEffect(() => {
    setLoadingCamisetas(true);
    setLoadingCategorias(true);
    obtenerCategorias();
    obtenerCamisetas();
  }, []);

  useEffect(() => {
    if (categoriaSelected === "%") {
      setCamisetasToShow(camisetas);
    } else {
      const camToShow = camisetas.filter((camiseta) => {
        return camiseta.categorias
          .map((categoria) => categoria.name)
          .includes(categoriaSelected);
      });
      setCamisetasToShow(camToShow);
    }
  }, [camisetas, categoriaSelected]);

  const obtenerCamisetas = async () => {
    const data = await fetch(
      "https://tucasaca-laravel-git-correcciones-entrega2-sumski-tiradani.vercel.app/_api/camisetas"
    );
    const entries = await data.json();
    setCamisetas(entries);
    setCamisetasToShow(entries);
    setLoadingCamisetas(false);
  };

  const obtenerCategorias = async () => {
    const data = await fetch(
      "https://tucasaca-laravel-git-correcciones-entrega2-sumski-tiradani.vercel.app/_api/categorias"
    );
    const entries = await data.json();
    setCategorias(entries);
    setLoadingCategorias(false);
  };

  const onCategoriaChange = (event) => {
    setCategoriaSelected(event.target.value);
  };

  return (
    <CenteredContent>
      {(loadingCamisetas || loadingCategorias) && <Loading />}

      {!loadingCategorias && !loadingCamisetas && (
        <ResponsiveGridLayout>
          <CategoriesSideBar>
            <label className="flex flex-row label cursor-pointer">
              <span className="label-text text-base">Todo</span>
              <input
                id="categoria-todo"
                type="radio"
                name="radio-1"
                className="radio ml-auto"
                defaultChecked={true}
                value="%"
                onChange={onCategoriaChange}
              />
            </label>
            {categorias.map((item, itemkey) => (
              <label
                className="flex flex-row label cursor-pointer"
                key={itemkey}
              >
                <span className="label-text text-base">
                  {item.name.length > 20
                    ? item.name.substring(0, 20) + "..."
                    : item.name}
                </span>
                <input
                  type="radio"
                  name="radio-1"
                  className="radio ml-auto"
                  value={item.name}
                  onChange={onCategoriaChange}
                />
              </label>
            ))}
          </CategoriesSideBar>

          {camisetasToShow.length > 0 ? (
            camisetasToShow.map((item, itemkey) => (
              <Card
                key={itemkey}
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
            ))
          ) : (
            <div className="h-screen w-full m-auto">
              <p className="font-bold text-4xl">{"Ups :("}</p>
              <p className="text-lg">
                Lo sentimos, no tenemos camisetas de esta categoría
              </p>
            </div>
          )}
        </ResponsiveGridLayout>
      )}
    </CenteredContent>
  );
};

export default Camisetas;
