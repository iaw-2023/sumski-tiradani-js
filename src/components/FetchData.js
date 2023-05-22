import React from "react";

const FetchData = async () => {
  const [entradas, setEntries] = React.useState([]);

  React.useEffect(() => {
    obtenerData();
  }, []);

  const obtenerData = async () => {
    const data = await fetch(
      "https://tucasaca-laravel-git-correcciones-entrega2-sumski-tiradani.vercel.app/_api/camisetas"
    );
    const entries = await data.json();
    console.log(entries);
    setEntries(entries);
  };

  return {
    /* <div>
      <ul>
        {entradas.map((item) => (
          <li key={item.nombre}>{item.nombre}</li>
        ))}
      </ul>
    </div> */
  };
};

export default FetchData;
