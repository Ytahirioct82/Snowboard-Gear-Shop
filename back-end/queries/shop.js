const { as } = require("pg-promise");
const db = require("../db/dbConfig.js");

const getAll = async () => {
  try {
    const allProducts = await db.any("SELECT * FROM snowboard ORDER BY category");
    return allProducts;
  } catch (err) {
    return err;
  }
};

const getCategory = async (name) => {
  try {
    const allProducts = await db.any("SELECT * FROM snowboard WHERE category=$1", name);
    return allProducts;
  } catch (err) {
    return err;
  }
};

const getProduct = async (id) => {
  try {
    const product = await db.one("SELECT * FROM snowboard WHERE id=$1", id);

    return product;
  } catch (err) {
    return err;
  }
};

const deleteProduct = async (id) => {
  try {
    const deletedProduct = await db.one("DELETE FROM snowboard WHERE id=$1 RETURNING *", id);
    return deletedProduct;
  } catch (err) {
    return err;
  }
};

const createProduct = async (product) => {
  const { category, name, img, description, price, rating, featured } = product;
  try {
    const newProduct = await db.one(
      "INSERT INTO snowboard (category, name, img, description, price, rating, featured) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [category, name, img, description, price, rating, featured]
    );
    console.log(newProduct);
    return newProduct;
  } catch (err) {
    return err;
  }
};

const updateProduct = async (id, product) => {
  const { category, name, img, description, price, rating, featured } = product;
  try {
    const updatedProduct = await db.one(
      "UPDATE snowboard SET category=$1, name=$2, img=$3, description=$4, price=$5, rating=$6, featured=$7 WHERE id=$8 RETURNING *",
      [category, name, img, description, price, rating, featured, id]
    );

    return updatedProduct;
  } catch (err) {
    return err;
  }
};

module.exports = { getAll, getCategory, getProduct, deleteProduct, createProduct, updateProduct };
