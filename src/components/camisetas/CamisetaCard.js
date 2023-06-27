import React from "react";
import BoxAlt from "../../layouts/BoxAlt";
import ImageHover from "./ImageHover";
import { Link } from "react-router-dom";
import FancyButton from "../buttons/FancyButton";

function CamisetaCard({ camiseta }) {
  return (
    <BoxAlt>
      <div className="flex flex-col h-full">
        <ImageHover
          nombre={camiseta.nombre}
          imagen_frente={camiseta.imagen_frente}
          imagen_atras={camiseta.imagen_atras}
        />
        <Link
          to={"/camiseta/" + camiseta.nombre}
          className="flex hover:underline"
        >
          <p className="font-bold text-xl mt-2">{camiseta.nombre}</p>
        </Link>
        <p className="font-thin mt-2">
          {camiseta.descripcion.length > 16
            ? camiseta.descripcion.substring(0, 16) + "..."
            : camiseta.descripcion}
        </p>

        <div className="mt-auto">
          <p className="font-bold text-lg pb-2">
            {"$" + Number.parseFloat(camiseta.precio).toFixed(2)}
          </p>
          <Link to={"/camiseta/" + camiseta.nombre} className="flex">
            <FancyButton text="Comprar" />
          </Link>
        </div>
      </div>
    </BoxAlt>
  );
}

export default CamisetaCard;
