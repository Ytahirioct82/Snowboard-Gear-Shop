import react from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  const navigate = useNavigate();
  return (
    <div className="Nav">
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate("/store/new");
        }}
      >
        Add Product
      </button>
      <button
        onClick={() => {
          navigate("/store/cart");
        }}
      >
        Shopping Cart: {props.count}
      </button>
    </div>
  );
}

export default Nav;
