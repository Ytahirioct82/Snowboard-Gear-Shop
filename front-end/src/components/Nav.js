import react from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <button>Home</button>
      <button>Add Product</button>
      <button>Shopping Cart: 0</button>
    </div>
  );
}

export default Nav;
