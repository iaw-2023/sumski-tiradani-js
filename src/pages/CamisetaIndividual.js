import { useContext, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ImageHover from "../components/camisetas/ImageHover";
import Form from "react-bootstrap/Form";
import { CartContext } from "../contexts/CartContext";

import CenteredContent from "../layouts/CenteredContent";
import { Input } from "@mui/base";

function CamisetaIndividual() {
  const [, setCart] = useContext(CartContext);

  const input_nombre_a_estampar = useRef(null);
  const input_numero_a_estampar = useRef(null);

  const { nombre } = useParams();
  const location = useLocation();
  const { estado } = location.state;
  const talles = estado.talles_disponibles.split(", ");
  const [talle, setTalleSelected] = useState("");

  const onTalleChange = (event) => {
    setTalleSelected(event.target.value);
    //console.log(event.target.value);
  };

  const addToCart = () => {
    const pedido = {
      nombre_a_estampar: input_nombre_a_estampar.current.value,
      numero_a_estampar: input_numero_a_estampar.current.value,
      talle: talle,
    };

    setCart((cart) => {
      const itemExists = cart.find(
        (item) => item.camiseta.nombre === estado.nombre
      );
      if (itemExists) {
        return cart.map((item) => {
          if (item.camiseta.nombre === estado.nombre)
            return { ...item, pedidos: [...item.pedidos, pedido] };
          else return item;
        });
      } else {
        return [...cart, { camiseta: estado, pedidos: [pedido] }];
      }
    });
  };

  return (
    <CenteredContent>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <ImageHover
          imagen_frente={estado.imagen_frente}
          imagen_atras={estado.imagen_atras}
        />
        <div>
          <h1 class="font-bold text-2xl pb-6"> {nombre} </h1>
          <h1 class="font-bold text-4xl pb-6"> {"$" + estado.precio} </h1>
          <div class="pb-4">
            <label
              class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
              for="nombre"
            >
              Nombre a estampar
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ref={input_nombre_a_estampar}
              id="nombre_a_estampar"
              type="text"
              placeholder="Nombre a estampar"
            ></input>
          </div>
          <div class="pb-4">
            <label
              class="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
              for="username"
            >
              Número a estampar
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ref={input_numero_a_estampar}
              id="numero_a_estampar"
              type="number"
              placeholder="Número a estampar"
            ></input>
          </div>
          <Form className="">
            {talles.map((talle) => (
              <div key={"inline-${talle}"} className="mb-3 inline-block pl-2 ">
                <Form.Check
                  inline
                  label={" " + talle}
                  name="talle"
                  type="radio"
                  id={`inline-${talle}`}
                  value={talle}
                  onChange={onTalleChange}
                />
              </div>
            ))}
          </Form>
          <div className="flex flex-row place-content-end pt-4">
            <a
              onClick={addToCart}
              class="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
            >
              <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
              <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
              </span>
              <span class="relative text-white dark:text-gray-700">
                Añadir al carrito
              </span>
            </a>
          </div>
        </div>
      </div>
      <hr></hr>
      <h2 className="text-center">Descripción</h2>
      <h3>{"⚽ " + estado.descripcion}</h3>
    </CenteredContent>
  );
}

export default CamisetaIndividual;
