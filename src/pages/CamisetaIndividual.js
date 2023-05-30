import { useContext, useRef, useState } from "react";
import { useLocation, useParams, Navigate, Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import CenteredContent from "../layouts/CenteredContent";
import Box from "../layouts/Box";
import BoxAlt from "../layouts/BoxAlt";
import ImageHover from "../components/camisetas/ImageHover";
import Form from "react-bootstrap/Form";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import FancyButton from "../components/buttons/FancyButton";
import FancyButtonAlt from "../components/buttons/FancyButtonAlt";

function CamisetaIndividual() {
  const [, setCart] = useContext(CartContext);
  // Parametros
  const { nombre } = useParams();
  const location = useLocation();
  const [camiseta] = useState(location.state ? location.state.camiseta : {});
  const talles = camiseta.talles_disponibles
    ? camiseta.talles_disponibles.split(", ")
    : [];
  // Input
  const [talle, setTalleSelected] = useState("");
  const input_nombre_a_estampar = useRef(null);
  const input_numero_a_estampar = useRef(null);
  const [error, setError] = useState("");
  const [added, setAdded] = useState("");

  if (!location.state) {
    return <Navigate to="/" />;
  }

  const onTalleChange = (event) => {
    setTalleSelected(event.target.value);
  };

  const addToCart = () => {
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
      setError("El nombre a estampar no es válido");
    else if (!/^\d+$/.test(pedido.numero_a_estampar))
      setError("El número a estampar no es válido");
    else if (pedido.talle === "") setError("Elegí un talle");
    else {
      setError("");
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
      setAdded("Producto añadido. Finaliza compra?");
    }
  };

  return (
    <CenteredContent>
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
                ></input>
              </div>
              <Form className="">
                <label class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                  Talle
                </label>
                {talles.map((talle, idx) => (
                  <div className="mb-3 inline-block pr-2 ">
                    <Form.Check
                      inline
                      label={" " + talle}
                      name="talle"
                      type="radio"
                      key={idx}
                      value={talle}
                      onChange={onTalleChange}
                    />
                  </div>
                ))}
              </Form>
              {error ? (
                <Box>
                  <p className="text-red-600 italic">{error}</p>
                </Box>
              ) : null}
              {added ? (
                <Box>
                  <div className="flex flex-row">
                    <p className="text-green-600 italic">{added}</p>
                    <Link
                      className="text-green-600 hover:text-black ml-auto"
                      to="/cart"
                    >
                      <CheckIcon />
                    </Link>
                    <button
                      className="text-green-600 hover:text-black"
                      onClick={() => setAdded("")}
                    >
                      <CloseIcon />
                    </button>
                  </div>
                </Box>
              ) : null}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2 place-content-end">
                <div className="w-full sm:w-fit" to="/cart">
                  <FancyButtonAlt onClick={addToCart} text="Comprar" />
                </div>
                <div className="w-full sm:w-fit">
                  <FancyButton onClick={addToCart} text="Añadir al carrito" />
                </div>
              </div>
            </BoxAlt>
          </div>
        </div>
      </Box>
      <Box>
        <p className="text-center text-2xl">⚽Descripción⚽</p>
        <p>{camiseta.descripcion}</p>
      </Box>
    </CenteredContent>
  );
}

export default CamisetaIndividual;
