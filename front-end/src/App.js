import { useState } from "react";
import AllProducts from "./components/AllProducts";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Detailed from "./components/Detailed";
import New from "./components/New";
import Edit from "./components/Edit";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const HandleAdd = (data) => {
    setCart([...cart, data]);
  };

  const HandleDelete = (id) => {
    const remainder = cart.filter((x) => x.id != id);
    console.log(remainder);
    setCart(remainder);
  };
  console.log(cart);
  return (
    <div>
      <Nav count={cart.length} />
      <Routes>
        <Route exact path="/" element={<AllProducts />} />
        <Route exact path="/store/:id" element={<Detailed func={HandleAdd} />} />
        <Route exact path="/store/new" element={<New />} />
        <Route exact path="/store/edit/:id" element={<Edit />} />
        <Route exact path="/store/cart" element={<Cart cart={cart} delete={HandleDelete} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
