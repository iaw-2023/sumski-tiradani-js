import { useState } from "react";
import Box from "../layouts/Box";
import CenteredContent from "../layouts/CenteredContent";
import SearchIcon from "@mui/icons-material/Search";
import Purchase from "../components/Purchase";
import Loading from "../components/Loading";

const History = () => {
  const [email, setEmail] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const url =
    "https://tucasaca-laravel-git-correcciones-entrega2-sumski-tiradani.vercel.app/_api/compras/";

  const handleInput = (event) => {
    setEmail(event.target.value);
    setErrorMessage("");
  };

  const handleClick = (event) => {
    event.preventDefault();
    setHistory([]);
    if (email === "") {
      setErrorMessage("Se requiere un email para hacer una búsqueda");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setErrorMessage("El mail no corresponde a un formato válido");
    } else {
      setErrorMessage("");
      setLoading(true);
      fetchData();
    }
  };

  const fetchData = async () => {
    const response = await fetch(url + email);
    try {
      const responseJson = await response.json();
      setHistory(responseJson);
    } catch (e) {
      setErrorMessage("Este email no ha realizado compras todavía :(");
    }
    setLoading(false);
  };

  return (
    <CenteredContent>
      <Box>
        <p className="text-3xl font-bold">Buscá tu historial de compras</p>
        <p className="text-lg">
          Ingresá tu e-mail para ver tus compras anteriores
        </p>
      </Box>
      <Box>
        <div className="flex sm:min-w-min ">
          <input
            className="w-full text-black p-3 rounded-lg"
            type="email"
            onChange={handleInput}
            placeholder="Ingresa tu correo electrónico"
          ></input>
          <button
            className="ml-2 dark:text-neutral-50 hover:text-neutral-50 dark:hover:text-slate-700"
            onClick={handleClick}
          >
            <SearchIcon fontSize="large" />
          </button>
        </div>
      </Box>
      {loading && <Loading />}
      {errorMessage !== "" ? (
        <Box>
          <p className="text-lg italic text-red-700">{errorMessage}</p>
        </Box>
      ) : (
        <>
          {history.length !== 0 && (
            <Box>
              <div className="grid grid-cols-5 md:grid-cols-9 p-1 md:p-4 space-x-4 ">
                <p className="font-medium hidden md:inline"></p>
                <p className="font-medium inline md:hidden">Cant.</p>
                <p className="font-medium hidden md:inline">Cantidad</p>
                <p className="font-medium inline md:hidden">Desc.</p>
                <p className="font-medium hidden md:inline">Descripcion</p>
                <p className="font-medium">Precio</p>
                <p className="font-medium hidden md:inline">Forma de Pago</p>
                <p className="font-medium hidden md:inline">
                  Direccion de Entrega
                </p>
                <p className="font-medium hidden md:inline">Fecha</p>
                <p className="font-medium">Estado</p>
                <p className="font-medium">Ver detalle</p>
              </div>
            </Box>
          )}
          {history.map((purchase, key) => {
            return (
              <Purchase
                cantidad={purchase.pedidos.length}
                pedidos={purchase.pedidos.slice(0, 2)}
                direccion={purchase.direccion_de_entrega}
                pago={purchase.forma_de_pago}
                precio={purchase.precio_total}
                fecha={purchase.fecha_hora}
                estado={purchase.estado}
                key={key}
              />
            );
          })}
        </>
      )}
    </CenteredContent>
  );
};

export default History;
