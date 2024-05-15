import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Resume from "./pages/Resume";
import User from "./pages/User";
import Navbar from "./components/navbar/Navbar";
import { CartProvider } from "./components/cart/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
