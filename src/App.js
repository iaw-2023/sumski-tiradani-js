import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prueba" element={<Link to="/">VOLVER</Link>} />
      </Routes>
    </>
  );
};

export default App;
