import React from "react";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import ProductData from "../../data/productsData";

function ProductsTab() {
  return (
    <div className="container">
      {ProductData.map((product) =>
        product.type === "left" ? (
          <LeftImage
            key={product.id}
            productName={product.name}
            productdescription={product.description}
            imageURL={product.imageURL}
            sublink1={product.sublink1}
            sublink2={product.sublink2}
          />
        ) : (
          <RightImage
            key={product.id}
            productName={product.name}
            productdescription={product.description}
            imageURL={product.imageURL}
            sublink1={product.sublink1}
            sublink2={product.sublink2}
          />
        )
      )}
      <div className="row text-center fs-4 text-body-secondary">
        <p>Want to know more about our technology stack? Check out the <a href="#">Zerodha.tech</a> blog.</p>
      </div>
    </div>
  );
}

export default ProductsTab;
