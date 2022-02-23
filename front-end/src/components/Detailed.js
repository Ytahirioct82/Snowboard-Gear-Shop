import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import "./Detailed.css";

const API = process.env.REACT_APP_API_URL;

function Detailed(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/store/${id}`)
      .then(
        (response) => {
          setProduct(response.data);
        },
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);

  const HandleDelete = () => {
    axios.delete(`${API}/store/${id}`).then(() => {
      navigate("/");
    });
  };

  const HandleAdd = () => {
    props.func(product);
    navigate(`/`);
  };

  let reviews = "";

  if (product.rating === 1) {
    reviews = `⭐️ ${product.rating} Stars`;
  }
  if (product.rating === 2) {
    reviews = `⭐️⭐️ ${product.rating} Stars`;
  }
  if (product.rating === 3) {
    reviews = `⭐️⭐️⭐️ ${product.rating} Stars`;
  }
  if (product.rating === 4) {
    reviews = `⭐️⭐️⭐️⭐️ ${product.rating} Stars`;
  }
  if (product.rating === 5) {
    reviews = `⭐️⭐️⭐️⭐️⭐️ ${product.rating} Stars`;
  }
  const result = Object.values(product).length > 0 && (
    <div className="index" key={product.id}>
      <img className="fit-picture" src={product.img} alt={product.name}></img>
      <p>{product.name}</p>
      <p>{product.category}</p>
      <p>{reviews}</p>
      {product.featured && <p className="red">Featured</p>}
      {product.featured ? <h4 className="price">${product.price}</h4> : <h4>${product.price}</h4>}
      <h4>ITEM DESCRIPTION</h4>
      <p>{product.description}</p>
      <div className="modify">
        <button onClick={HandleAdd}>Add To Cart</button>
        <button onClick={HandleDelete}>Delete</button>
        <button
          onClick={() => {
            navigate(`/store/edit/${id}`);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
  return result;
}

export default Detailed;
