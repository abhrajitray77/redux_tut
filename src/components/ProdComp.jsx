import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProdComp = () => {
  const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
  return (
    <div className="" key={id}>
        <Link to={`/product/${id}`}>
      <div>
        <img src={image} alt="pic" />
      </div>
      <div>
        <div>
            {title}
        </div>
        <div>
            $ {price}
        </div>
        <div>
            {category}
        </div>
      </div>
      </Link>
    </div>

  )});

  return <>{renderList}</>;
};

export default ProdComp;
