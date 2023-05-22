import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import History from "./pages/History";
import Camisetas from "./pages/Camisetas";

const App = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/history" element={<History />} />
        <Route path="/camisetas" element={<Camisetas />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
