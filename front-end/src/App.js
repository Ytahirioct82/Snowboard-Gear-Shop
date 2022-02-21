import AllProducts from "./components/AllProducts";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<AllProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
