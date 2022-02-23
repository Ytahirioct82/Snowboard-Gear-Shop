const express = require("express");
const store = express.Router();
const { getAll, getCategory, getProduct, deleteProduct, createProduct, updateProduct } = require("../queries/shop.js");

function formatName(name) {
  const newName = name.split(" ");
  for (let i = 0; i < newName.length; i++) {
    newName[i] = newName[i].charAt(0).toUpperCase() + newName[i].slice(1).toLowerCase();
  }
  return newName.join(" ");
}

store.get("/", async (req, res) => {
  const { name } = req.query;
  let allProducts = null;

  try {
    if (!!name && name !== "All Product") {
      allProducts = await getCategory(name);
    } else {
      allProducts = await getAll();
    }
    res.status(200).json(allProducts);
  } catch (err) {
    res.status(404).json(err);
  }
});

store.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProduct(id);
    product.id && res.status(200).json(product);
  } catch (err) {
    res.status(404).json(err);
  }
});

store.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await deleteProduct(id);
    res.status(200).json(deletedProduct);
  } catch (err) {
    res.status(404).json(err);
  }
});

store.post("/", async (req, res) => {
  const product = req.body;
  product.name = formatName(product.name);
  product.category = formatName(product.category);
  try {
    if (
      product.name &&
      product.category &&
      product.img &&
      product.description &&
      product.price >= 0 &&
      product.rating >= 0
    ) {
      console.log("triggered");
      const newProduct = await createProduct(product);
      console.log(newProduct);
      res.status(200).json(newProduct);
    } else {
      res.json({ name: "error" });
    }
  } catch (err) {
    res.status(404).json(err);
  }
});

store.put("/:id", async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  product.name = formatName(product.name);
  product.category = formatName(product.category);
  console.log(product);

  try {
    if (!Object.values(product).includes("")) {
      const updatedProduct = await updateProduct(id, product);
      console.log(updatedProduct);
      res.status(200).json(updatedProduct);
    } else {
      res.json({ name: "error" });
    }
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = store;
