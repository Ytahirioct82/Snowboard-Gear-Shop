import { useState, useEffect } from "react";
import "./Cart.css";

function Cart(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log(props.cart);
    setProducts(props.cart);
  }, [props.cart.length]);

  const HandleDelete = (event) => {
    props.delete(event.target.id);
  };
  let total = 0;

  const result = products.map((x) => {
    total += x.price;
    return (
      <div className="cart" key={x.id}>
        <p>{x.name}</p>
        <p>${x.price}</p>
        <button onClick={HandleDelete} id={x.id}>
          x
        </button>
      </div>
    );
  });

  let tax = total * 0.0875;
  let grand = total + tax;

  return (
    <div className="main">
      <h2>Cart Items</h2>
      {result}
      <h4>
        TOTAL <span>${total}</span>
      </h4>
      <h4>
        TAX <span>${tax.toFixed(2)}</span>
      </h4>
      <h4>
        GRAND TOTAL <span>${grand.toFixed(2)}</span>
      </h4>
    </div>
  );
}

export default Cart;
