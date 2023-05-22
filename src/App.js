import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import FetchData from "./components/FetchData";
import ResponsiveGridLayout from "./layouts/ResponsiveGridLayout";
import CenteredContent from "./layouts/CenteredContent";
import Camisetas from "./pages/Camisetas";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Camisetas />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prueba" element={<Link to="/">VOLVER</Link>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
