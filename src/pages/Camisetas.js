import { useState, useEffect } from "react";
import CenteredContent from "../layouts/CenteredContent";
import ResponsiveGridLayout from "../components/camisetas/ResponsiveGridLayout";
import Loading from "../components/Loading";
import CategoriasSelector from "../components/camisetas/CategoriasSelector";
import CamisetasGrid from "../components/camisetas/CamisetasGrid";
import CamisetasPaginator from "../components/camisetas/CamisetasPaginator";

const Camisetas = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const DEFAULT_CATEGORIA = "%";
  const PAGE_SIZE = 8;
  // Fetch
  const [camisetas, setCamisetas] = useState(
    JSON.parse(sessionStorage.getItem("camisetas")) || []
  );
  const [categorias, setCategorias] = useState(
    JSON.parse(sessionStorage.getItem("categorias")) || []
  );
  // Loading
  const [loading, setLoading] = useState({
    categorias: false,
    camisetas: false,
  });
  // View
  const [categoriaSelected, setCategoriaSelected] = useState("%");
  const [camisetasByCategoria, setCamisetasByCategoria] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (categorias === []) {
      setLoading((loading) => ({ ...loading, categorias: true }));
      fetch(API_URL + "/categorias")
        .then((response) => {
          if (!response.ok) throw new Error("Error de Red");
          return response.json();
        })
        .then((data) => {
          setLoading((loading) => ({ ...loading, categorias: false }));
          setCategorias(data);
          sessionStorage.setItem("categorias", JSON.stringify(data));
        })
        .catch((error) => {
          setLoading((loading) => ({ ...loading, categorias: false }));
          // MANEJO DE ERROR
        });
    }
  }, [categorias, API_URL]);

  useEffect(() => {
    if (camisetas === []) {
      setLoading((loading) => ({ ...loading, camisetas: true }));
      fetch(API_URL + "/camisetas")
        .then((response) => {
          if (!response.ok) throw new Error("Error de Red");
          return response.json();
        })
        .then((data) => {
          setLoading((loading) => ({ ...loading, camisetas: false }));
          setCamisetas(data);
          sessionStorage.setItem("camisetas", JSON.stringify(data));
        })
        .catch((error) => {
          setLoading((loading) => ({ ...loading, camisetas: false }));
          // MANEJO DE ERROR
        });
    }
  }, [camisetas, API_URL]);

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
          <CategoriasSelector
            categorias={categorias}
            categoriaSelected={categoriaSelected}
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
