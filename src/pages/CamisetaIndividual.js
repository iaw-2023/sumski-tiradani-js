import { useContext, useEffect, useRef, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import CenteredContent from "../layouts/CenteredContent";
import Box from "../layouts/Box";
import BoxAlt from "../layouts/BoxAlt";
import ImageHover from "../components/camisetas/ImageHover";
import Form from "react-bootstrap/Form";
import CloseIcon from "@mui/icons-material/Close";
import FancyButton from "../components/buttons/FancyButton";
import FancyButtonAlt from "../components/buttons/FancyButtonAlt";
import Loading from "../components/Loading";
import Error from "../components/Error";

function CamisetaIndividual() {
  const [, setCart] = useContext(CartContext);
  const { nombre } = useParams();
  const [camiseta, setCamiseta] = useState(null);
  const navigate = useNavigate();
  // Fetch
  const API_URL = process.env.REACT_APP_API_URL;
  const [camisetas, setCamisetas] = useState(
    sessionStorage.getItem("camisetas") !== null
      ? JSON.parse(sessionStorage.getItem("camisetas"))
      : []
  );
  const [fetchingError, setFetchingError] = useState(false);
  // Input
  const input_nombre_a_estampar = useRef(null);
  const input_numero_a_estampar = useRef(null);
  const [talle, setTalleSelected] = useState("");
  const onTalleChange = (event) => setTalleSelected(event.target.value);
  // Error And Loading
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState("");
  const [added, setAdded] = useState("");

  // Fetch and search
  useEffect(() => {
    if (camisetas.length === 0) {
      setLoading(true);
      fetch(API_URL + "/camisetas")
        .then((response) => {
          if (!response.ok) throw new Error("Error de Red");
          return response.json();
        })
        .then((data) => {
          setLoading(false);
          setCamisetas(data);
          sessionStorage.setItem("camisetas", JSON.stringify(data));
        })
        .catch((error) => {
          setLoading(true);
          setFetchingError("No se pudieron cargar las camisetas");
        });
    }
  }, [camisetas, API_URL]);

  useEffect(() => {
    if (camisetas.length !== 0) {
      const camisetaFound = camisetas.find((c) => c.nombre === nombre) || null;
      setCamiseta(camisetaFound);
    }
  }, [nombre, camisetas]);

  const addToCart = (redirect) => {
    const pedido = {
      nombre_a_estampar:
        input_nombre_a_estampar.current.value !== ""
          ? input_nombre_a_estampar.current.value
          : "NO ESTAMPAR",
      numero_a_estampar:
        input_numero_a_estampar.current.value !== ""
          ? input_numero_a_estampar.current.value
          : "0",
      talle: talle,
    };

    if (!/^[A-Z\s]+$/i.test(pedido.nombre_a_estampar))
      setInputError("El nombre a estampar no es válido");
    else if (!/^\d+$/.test(pedido.numero_a_estampar))
      setInputError("El número a estampar no es válido");
    else if (pedido.talle === "") setInputError("Elegí un talle");
    else {
      setInputError("");
      setCart((cart) => {
        const itemExists = cart.find(
          (item) => item.camiseta.nombre === camiseta.nombre
        );
        if (itemExists) {
          return cart.map((item) => {
            if (item.camiseta.nombre === camiseta.nombre)
              return { ...item, pedidos: [...item.pedidos, pedido] };
            else return item;
          });
        } else {
          return [...cart, { camiseta: camiseta, pedidos: [pedido] }];
        }
      });
      setAdded("Producto añadido.");
      if (redirect) {
        navigate("/cart");
      }
    }
  };

  return (
    <CenteredContent>
      {loading && <Loading /> /* Cargando camisetas desde API */}
      {
        !loading && fetchingError && (
          <Error message={fetchingError} />
        ) /* Error de API o RED */
      }
      {
        !loading && camiseta === null && (
          <div className="w-full m-auto">
            <p className="font-bold text-4xl text-center">{"Ups :("}</p>
            <p className="text-lg text-center">
              Lo sentimos, no tenemos esa camiseta
            </p>
          </div>
        ) /* la camiseta del link no existe */
      }
      {!loading && camiseta !== null && (
        <>
          <Box>
            <div className="flex flex-row space-x-2">
              <Link className="hover:font-bold" to="/camisetas">
                {"Camisetas"}
              </Link>
              <p>{">"}</p>
              <p className="font-bold">{nombre}</p>
            </div>
          </Box>
          <Box>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="w-full sm:w-1/3">
                <BoxAlt>
                  <ImageHover
                    imagen_frente={camiseta.imagen_frente}
                    imagen_atras={camiseta.imagen_atras}
                  />
                </BoxAlt>
              </div>

              <div className="w-full sm:w-2/3">
                <BoxAlt>
                  <p class="font-bold text-2xl pb-6"> {nombre} </p>
                  <p class="font-bold text-4xl pb-6">
                    {" "}
                    {"$" + Number.parseFloat(camiseta.precio).toFixed(2)}{" "}
                  </p>
                  <div class="pb-4">
                    <label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                      Nombre a estampar
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      ref={input_nombre_a_estampar}
                      id="nombre_a_estampar"
                      type="text"
                      placeholder="Nombre a estampar (Opcional)"
                      disabled={!camiseta.activo}
                    ></input>
                  </div>
                  <div class="pb-4">
                    <label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                      Número a estampar
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      ref={input_numero_a_estampar}
                      id="numero_a_estampar"
                      type="text"
                      placeholder="Número a estampar (Opcional)"
                      disabled={!camiseta.activo}
                    ></input>
                  </div>
                  <Form className="">
                    <label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                      Talle
                    </label>
                    {camiseta.talles_disponibles
                      .split(", ")
                      .map((talle, idx) => (
                        <div className="mb-3 inline-block pr-2 ">
                          <Form.Check
                            inline
                            label={" " + talle}
                            name="talle"
                            type="radio"
                            key={idx}
                            value={talle}
                            onChange={onTalleChange}
                            disabled={!camiseta.activo}
                          />
                        </div>
                      ))}
                  </Form>
                  {inputError && (
                    <Box>
                      <p className="text-red-600 italic">{inputError}</p>
                    </Box>
                  )}
                  {added && (
                    <Box>
                      <div className="flex flex-row">
                        <p className="text-green-600 italic">{added}</p>
                        <button
                          className="ml-auto text-green-600 hover:text-black"
                          onClick={() => setAdded("")}
                        >
                          <CloseIcon />
                        </button>
                      </div>
                    </Box>
                  )}

                  {camiseta.activo ? (
                    <div className="flex flex-col pt-2 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2 place-content-end">
                      <div className="w-full sm:w-fit" to="/cart">
                        <FancyButtonAlt
                          text="Comprar"
                          onClick={() => addToCart(true)}
                        />
                      </div>
                      <div className="w-full sm:w-fit">
                        <FancyButton
                          onClick={() => addToCart(false)}
                          text="Añadir al carrito"
                        />
                      </div>
                    </div>
                  ) : (
                    <p className="text-xl font-bold text-red-600 italic">
                      {"Sin stock"}
                    </p>
                  )}
                </BoxAlt>
              </div>
            </div>
          </Box>
          <Box>
            <p className="text-center text-2xl">⚽Descripción⚽</p>
            <p>{camiseta.descripcion}</p>
          </Box>
        </>
      )}
    </CenteredContent>
  );
}

export default CamisetaIndividual;
