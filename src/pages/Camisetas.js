import { useState, useEffect } from "react";
import CenteredContent from "../layouts/CenteredContent";
import ResponsiveGridLayout from "../layouts/ResponsiveGridLayout";
import Loading from "../components/Loading";
import CategoriesSideBar from "../components/camisetas/CategoriesSideBar";
import CamisetasGrid from "../components/camisetas/CamisetasGrid";
import CamisetasPaginator from "../components/camisetas/CamisetasPaginator";

const Camisetas = () => {
  const DEFAULT_CATEGORIA = "%";
  const PAGE_SIZE = 8;
  // Fetch
  const [camisetas, setCamisetas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  // Loading
  const [loading, setLoading] = useState({
    categorias: true,
    camisetas: true,
  });
  // View
  const [categoriaSelected, setCategoriaSelected] = useState("%");
  const [camisetasByCategoria, setCamisetasByCategoria] = useState([]);
  const [page, setPage] = useState(1);

  const obtenerCamisetas = async () => {
    const data = await fetch(
      "https://tucasaca-laravel-git-correcciones-entrega2-sumski-tiradani.vercel.app/_api/camisetas"
    );
    const entries = await data.json();
    setCamisetas(entries);
    setCamisetasByCategoria(entries);
    setLoading((loading) => ({ ...loading, camisetas: false }));
  };

  const obtenerCategorias = async () => {
    const data = await fetch(
      "https://tucasaca-laravel-git-correcciones-entrega2-sumski-tiradani.vercel.app/_api/categorias"
    );
    const entries = await data.json();
    setCategorias(entries);
    setLoading((loading) => ({ ...loading, categorias: false }));
  };

  useEffect(() => {
    setLoading((loading) => ({ ...loading, camisetas: true }));
    setLoading((loading) => ({ ...loading, categorias: true }));
    obtenerCategorias();
    obtenerCamisetas();
  }, []);

  useEffect(() => {
    if (categoriaSelected === DEFAULT_CATEGORIA) {
      setCamisetasByCategoria(camisetas);
    } else {
      setCamisetasByCategoria(
        camisetas.filter((camiseta) => {
          return camiseta.categorias
            .map((categoria) => categoria.name)
            .includes(categoriaSelected);
        })
      );
    }
    setPage(1);
  }, [camisetas, categoriaSelected]);

  return (
    <CenteredContent>
      {(loading.camisetas || loading.categorias) && <Loading />}

      {!loading.categorias && !loading.camisetas && (
        <ResponsiveGridLayout>
          <CategoriesSideBar
            categorias={categorias}
            setCategoriaSelected={(c) => setCategoriaSelected(c)}
          />
          <CamisetasGrid
            camisetas={camisetasByCategoria}
            cantidad={camisetasByCategoria.length}
            pageSize={PAGE_SIZE}
            page={page}
          />
          <CamisetasPaginator
            cantidad={camisetasByCategoria.length}
            pageSize={PAGE_SIZE}
            setPage={setPage}
          />
        </ResponsiveGridLayout>
      )}
    </CenteredContent>
  );
};

export default Camisetas;
