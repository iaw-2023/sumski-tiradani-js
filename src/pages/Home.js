import logo from "../assets/logo.svg";
import "../Home.css";
import DarkModeButton from "../components/DarkModeButton";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header transition-colors bg-white dark:bg-slate-800">
        <img src={logo} className="App-logo" alt="logo" />
        <DarkModeButton />
        <p className="text-black dark:text-white">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link className="App-link" to="/prueba">
          Prueba Rutas
        </Link>
      </header>
    </div>
  );
}

export default Home;
