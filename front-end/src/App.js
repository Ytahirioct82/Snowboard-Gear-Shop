import AllProducts from "./components/AllProducts";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Detailed from "./components/Detailed";
import New from "./components/New";
import Edit from "./components/Edit";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<AllProducts />} />
        <Route exact path="/store/:id" element={<Detailed />} />
        <Route exact path="/store/new" element={<New />} />
        <Route exact path="/store/edit/:id" element={<Edit />} />
        <Route exact path="/store/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
