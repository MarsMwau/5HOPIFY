import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
const ProductList = () => {
  const [originalProducts, setOriginalProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [clickedProduct, setClickedProduct] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setOriginalProducts(data);
        setProducts(data)
      })
      .catch((error) => console.log(error));
  }, []);
  const handleClick = (product) => {
    setClickedProduct(product);
  };
  const resetClickedProduct = () => {
    setClickedProduct(null);
  };
  const handleFilter = (category) => {
    if (category === "All") {
      setProducts(originalProducts);
    } else {
      const filteredData = originalProducts.filter((product) =>
        product.category.includes(category)
      );
      setProducts(filteredData);
    }
  };
  return (
    <div className="row">
      {clickedProduct ? (
        <div className="col-md-12">
          <ProductItem
            product={clickedProduct}
            resetClickedProduct={resetClickedProduct}
          />
        </div>
      ) : (
        <>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="display 6 fw-bolder text-center">Products in Stock</h1>
              <hr />
            </div>
          </div>
          <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
              className="btn btn-outline-dark me-2"
              onClick={() => handleFilter("All")}
            >
              All
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => handleFilter("electronics")}
            >
              Electronics
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => handleFilter("jewelery")}
            >
              Jewelry
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => handleFilter("men's clothing")}
            >
              Men's Clothing
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => handleFilter("women's clothing")}
            >
              Women's Clothing
            </button>
          </div>
          <div className="row">
            {products.map((product) => (
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="card h-100 text-center p-4">
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p className="card-text">${product.price}</p>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-outline-dark"
                        onClick={() => handleClick(product)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ProductList;