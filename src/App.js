import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Camisetas from "./pages/Camisetas";
import { CartContextProvider } from "./contexts/CartContext";
import Comprar from "./pages/Comprar";
import CamisetaIndividual from "./pages/CamisetaIndividual";
import Error404 from "./pages/Error404";
import Perfil from "./pages/Perfil";

const App = () => {
  return (
    <CartContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Perfil />} />
        <Route path="/camisetas" element={<Camisetas />} />
        <Route path="/comprar" element={<Comprar />} />
        <Route path="/camiseta/:nombre?" element={<CamisetaIndividual />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </CartContextProvider>
  );
};

export default App;
