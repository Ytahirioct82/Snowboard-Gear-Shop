import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./New.css";

const API = process.env.REACT_APP_API_URL;

function New() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: "",
    category: "",
    name: "",
    img: "",
    description: "",
    price: "",
    rating: "",
    featured: false,
  });

  const HandleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setProduct({ ...product, featured: !product.featured });
  };

  const HandleSubmit = (event) => {
    event.preventDefault();

    axios.post(`${API}/store`, product).then((response) => {
      if (response.data.id) {
        setProduct(response.data);
        navigate("/");
      } else alert("must include all input");
    });
  };

  return (
    <div className="New">
      <h4>CREAT NEW PRODUCT</h4>
      <form onSubmit={HandleSubmit}>
        <label className="label" htmlFor="category">
          Category
        </label>
        <br />
        <input type="text" onChange={HandleChange} placeholder="category" name="category" value={product.category} />
        <br />
        <br />
        <label className="label" htmlFor="name">
          Name
        </label>
        <br />
        <input type="text" onChange={HandleChange} placeholder="name" name="name" value={product.name} />
        <br />
        <br />
        <label className="label" htmlFor="img">
          Image
        </label>
        <br />
        <input type="text" onChange={HandleChange} placeholder="img" name="img" value={product.img} />
        <br />
        <br />
        <label className="label" htmlFor="description">
          Description
        </label>
        <br />
        <textarea
          type="text"
          onChange={HandleChange}
          placeholder="description"
          name="description"
          value={product.description}
        />
        <br />
        <br />
        <label htmlFor="price">Price</label>
        <br />
        <input type="number" min="0" onChange={HandleChange} placeholder="price" name="price" value={product.price} />
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <br />
        <input
          type="number"
          min="0"
          max="5"
          onChange={HandleChange}
          placeholder="rating"
          name="rating"
          value={product.rating}
        />
        <br />
        <br />
        <label htmlFor="featured">Featured:</label>
        <input
          id="featured"
          type="checkbox"
          onChange={handleCheckboxChange}
          name="featured"
          checked={product.featured}
        />
        <br />
        <br />
        <button type="submit">CREATE PRODUCT</button>
      </form>
    </div>
  );
}

export default New;
