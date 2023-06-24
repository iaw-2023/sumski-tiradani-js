import { render } from "@testing-library/react";
import BoxAlt from "../../layouts/BoxAlt";
import PasoLayout from "./PasoLayout";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Entrega({ compraHook, previousStep, nextStep }) {
  const PASO = 2;
  const TITULO = "Datos de Entrega 🚛";

  const GEO_API_KEY = "1511c9681a4c49d48e6fbc58c9afa4bf";
  const GEO_API_URL = "https://api.geoapify.com/v1/geocode/reverse?";
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [data, setData] = useState([]);
  const [request, setRequest] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (latitude !== "" && longitude !== "") {
      // Setting up the request for the API fetch
      setRequest(
        GEO_API_URL +
          "lat=" +
          latitude +
          "&lon=" +
          longitude +
          "&format=json&apiKey=" +
          GEO_API_KEY
      );

      // Map rendering
      const position = [latitude, longitude];
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (request !== "") {
      console.log(longitude);
      console.log(latitude);
      console.log(request);

      fetch(request)
        .then((response) => {
          if (!response.ok) throw new Error("Error de red");
          return response.json();
        })
        .then((data) => {
          setData(data.results[0]);
        })
        .catch((error) => {
          setError("No se pudo obtener la localizacion");
          console.log(latitude);
          console.log(longitude);
        });
    }
  }, [request]);

  const [compra, setCompra] = compraHook;
  const [ciudad, setCiudad] = useState(
    compra.direccion_de_entrega.split("|")[0] || ""
  );
  const [calle, setCalle] = useState(
    compra.direccion_de_entrega.split("|")[1] || ""
  );
  const [numero, setNumero] = useState(
    compra.direccion_de_entrega.split("|")[2] || ""
  );
  const [error, setError] = useState("");

  const handleInputCiudad = (event) => {
    setCiudad(event.target.value);
    setError("");
  };
  const handleInputCalle = (event) => {
    setCalle(event.target.value);
    setError("");
  };
  const handleInputNumero = (event) => {
    setNumero(event.target.value);
    setError("");
  };

  const handlePreviousStep = () => {
    previousStep();
  };

  const handleNextStep = () => {
    if (ciudad === "" || !/^[A-zÀ-ú\s,.]+$/i.test(ciudad))
      setError("Se requiere un nombre válido de ciudad");
    else if (calle === "" || !/^[A-zÀ-ú\s.]+$/i.test(calle))
      setError("Se requiere un nombre válido de calle");
    else if (numero === "" || !/^\d{1,}$/i.test(numero))
      setError("El número de calle tiene que ser válido");
    else {
      setCompra({
        ...compra,
        direccion_de_entrega: ciudad + "|" + calle + "|" + numero,
      });
      nextStep();
    }
  };

  const CONTENT = (
    <>
      <BoxAlt>
        <p className="text-lg font-thin">Ciudad:</p>
        <div className="flex w-full">
          <input
            className="w-full text-black p-3 rounded-lg"
            onChange={handleInputCiudad}
            placeholder="Ciudad"
            defaultValue={data.city}
          ></input>
        </div>
      </BoxAlt>
      <BoxAlt>
        <p className="text-lg font-thin">Dirección:</p>
        <div className="flex w-full space-x-2">
          <input
            className="w-full text-black p-3 rounded-lg"
            onChange={handleInputCalle}
            placeholder="Calle"
            defaultValue={data.street}
          ></input>
          <input
            className="w-full text-black p-3 rounded-lg"
            onChange={handleInputNumero}
            placeholder="Número"
            defaultValue={data.housenumber}
          ></input>
        </div>
        <div>
          {/* <MapContainer
            center={[latitude, longitude]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer> */}
        </div>
      </BoxAlt>
      {error ? (
        <BoxAlt>
          <p className="text-red-600 italic">{error}</p>
        </BoxAlt>
      ) : null}
    </>
  );

  const BUTTONS = (
    <>
      <button
        className="bg-blue-700 p-1 rounded-md w-full text-white font-bold hover:bg-blue-800"
        onClick={handlePreviousStep}
      >
        Paso previo
      </button>

      <button
        className="bg-blue-700 p-1 rounded-md w-full text-white font-bold hover:bg-blue-800"
        onClick={handleNextStep}
      >
        Siguiente paso
      </button>
    </>
  );

  return (
    <PasoLayout
      paso={PASO}
      title={TITULO}
      content={CONTENT}
      buttons={BUTTONS}
    />
  );
}

export default Entrega;
