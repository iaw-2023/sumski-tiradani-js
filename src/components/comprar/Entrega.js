import BoxAlt from "../../layouts/BoxAlt";
import PasoLayout from "./PasoLayout";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";

function Entrega({ compraHook, previousStep, nextStep }) {
  const PASO = 2;
  const TITULO = "Datos de Entrega 🚛";

  const GEO_API_URL = process.env.REACT_APP_GEO_API_URL;
  const GEO_API_KEY = process.env.REACT_APP_GEO_API_KEY;
  const GEO_API_REVERSE_KEY = process.env.REACT_APP_GEO_API_REVERSE_KEY;

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [reverseRequest, setReverseRequest] = useState("");
  const [request, setRequest] = useState("");

  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    if (calle === "" && numero === "" && ciudad === "") {
      if (!navigator.geolocation) {
        return;
      }
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);

        setReverseRequest(
          GEO_API_URL +
            "reverse?" +
            "lat=" +
            position.coords.latitude +
            "&lon=" +
            position.coords.longitude +
            "&format=json&apiKey=" +
            GEO_API_REVERSE_KEY
        );
      });
    }
  }, [calle, numero, ciudad, GEO_API_URL, GEO_API_REVERSE_KEY]);

  useEffect(() => {
    if (reverseRequest !== "") {
      setLoading(true);
      fetch(reverseRequest)
        .then((response) => {
          if (!response.ok) throw new Error("Error de red");
          return response.json();
        })
        .then((data) => {
          setCalle(data.results[0].street);
          setNumero(data.results[0].housenumber);
          setCiudad(data.results[0].city);
          setLoading(false);
        })
        .catch((error) => {
          setError("No se pudo obtener la localizacion");
          setLoading(false);
        });
    }
  }, [reverseRequest]);

  useEffect(() => {
    if (request !== "") {
      setLoading(true);
      fetch(request)
        .then((response) => {
          if (!response.ok) throw new Error("Error de red");
          return response.json();
        })
        .then((data) => {
          setCalle(data.results[0].street ? data.results[0].street : "");
          setNumero(
            data.results[0].housenumber ? data.results[0].housenumber : ""
          );
          setCiudad(data.results[0].city ? data.results[0].city : "");
          setLatitude(data.results[0].lat);
          setLongitude(data.results[0].lon);
          setLoading(false);
        })
        .catch((error) => {
          setError("No se pudo obtener la localizacion");
          setLoading(false);
        });
    }
  }, [request]);

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

  const handleSearch = () => {
    if (ciudad === "" || !/^[A-zÀ-ú\s,.]+$/i.test(ciudad))
      setError("Se requiere un nombre válido de ciudad");
    else if (calle === "" || !/^[A-zÀ-ú\s.]+$/i.test(calle))
      setError("Se requiere un nombre válido de calle");
    else if (numero === "" || !/^\d{1,}$/i.test(numero))
      setError("El número de calle tiene que ser válido");
    else {
      setRequest(
        GEO_API_URL +
          "search?housenumber=" +
          numero +
          "&street=" +
          calle +
          "&city=" +
          ciudad +
          "&country=Argentina&format=json&apiKey=" +
          GEO_API_KEY
      );
    }
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

  const RecenterMapOnUpdate = ({ lat, lng }) => {
    const map = useMap();
    useEffect(() => {
      map.setView([lat, lng]);
    }, [map, lat, lng]);
    return null;
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
            value={ciudad}
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
            value={calle}
          ></input>
          <input
            className="w-full text-black p-3 rounded-lg"
            onChange={handleInputNumero}
            placeholder="Número"
            value={numero}
          ></input>
        </div>
      </BoxAlt>
      {error ? (
        <BoxAlt>
          <p className="text-red-800 dark:text-red-500 italic">{error}</p>
        </BoxAlt>
      ) : null}

      <BoxAlt>
        <button
          className="bg-sky-700 p-1 mb-2 rounded-md w-full text-white font-bold hover:bg-sky-800"
          onClick={handleSearch}
        >
          {"Mostrar en el mapa" + (loading ? "... ⌛" : " 📍")}
        </button>
        <MapContainer
          className="h-96 w-full z-0"
          center={{
            lat: latitude !== "" ? latitude : -38.71,
            lng: longitude !== "" ? longitude : -62.27,
          }}
          zoom={13}
          scrollWheelZoom={true}
          zoomAnimation={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {latitude !== "" && longitude !== "" && (
            <Marker
              position={{ lat: latitude, lng: longitude }}
              icon={
                new Icon({
                  iconUrl: markerIconPng,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })
              }
            >
              <RecenterMapOnUpdate lat={latitude} lng={longitude} />
              <Popup>
                Dirección de entrega <br /> {calle + " " + numero}{" "}
              </Popup>{" "}
            </Marker>
          )}
        </MapContainer>
      </BoxAlt>
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
