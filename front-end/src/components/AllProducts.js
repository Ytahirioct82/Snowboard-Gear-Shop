import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AllProducts.css";

const API = process.env.REACT_APP_API_URL;

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/store`)
      .then(
        (response) => {
          setProducts(response.data);
          setCategories(response.data);
        },
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);

  let reviews = "";

  const display = products.map((product) => {
    if (product.rating === 1) {
      reviews = `⭐️ ${product.rating} Reviews`;
    }
    if (product.rating === 2) {
      reviews = `⭐️⭐️ ${product.rating} Reviews`;
    }
    if (product.rating === 3) {
      reviews = `⭐️⭐️⭐️ ${product.rating} Reviews`;
    }
    if (product.rating === 4) {
      reviews = `⭐️⭐️⭐️⭐️ ${product.rating} Reviews`;
    }
    if (product.rating === 5) {
      reviews = `⭐️⭐️⭐️⭐️⭐️ ${product.rating} Reviews`;
    }

    return (
      <div className="container" key={product.id}>
        <Link to={`/index/${product.id}`}>
          <img className="fit-picture" src={product.img} alt={product.name}></img>
          <p>{product.name}</p>
          <p>{product.category}</p>
          <p>{reviews}</p>
          <h4>${product.price}</h4>
        </Link>
      </div>
    );
  });
  const handleChange = (event) => {
    axios.get(`${API}/store?name=${event.target.value}`).then((response) => {
      event.target.value !== "All Products" ? setProducts(response.data) : setProducts(categories);
    });
  };
  const exist = [];
  const option = [];

  categories.forEach((product) => {
    if (!exist.includes(product.category)) {
      exist.push(product.category);
      option.push(<option value={product.category}>{product.category}</option>);
    }
  });

  return (
    <section className="body">
      <div className="selection">
        <select onChange={handleChange} name="Products" id="Products">
          <option value="All Products">All Products</option>
          {option}
        </select>
      </div>

      <div className="display">{display}</div>
    </section>
  );
}

export default AllProducts;
