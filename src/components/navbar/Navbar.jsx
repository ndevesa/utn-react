import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";
import { BiLogoCodepen } from "react-icons/bi";
import Cart from "../cart/Cart";
import { CartContext } from "../cart/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <header>
      <Link to="/">
        <BiLogoCodepen size="70" title="E-commerce Logo" />
      </Link>

      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return isActive ? { color: "#535bf2" } : {};
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          style={({ isActive }) => {
            return isActive ? { color: "#535bf2" } : {};
          }}
        >
          Our Products
        </NavLink>
      </nav>

      <div className="actions">
        <NavLink to="/user">
          <LuUser2 size="25" title="Account" />
        </NavLink>
        <NavLink to="/resume">
          <Cart itemCount={cart.length} />
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
