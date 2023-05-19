import logo from "../assets/logo.svg";
import "../App.css";
import DarkModeButton from "../components/DarkModeButton";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header transition-colors bg-slate-500 dark:bg-black">
        <img src={logo} className="App-logo" alt="logo" />
        <DarkModeButton />
        <p>
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
