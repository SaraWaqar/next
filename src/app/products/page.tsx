"use client";

import useTest from "../../../core/hooks/useTest";
import React, { useEffect } from "react";

const Products = () => {
  const { getAll, store } = useTest();
  useEffect(()=>{
    getAll()
  },[])
  return (
    <div className="d-flex">
      {store?.entities?.map((item, key) => {
        const { image, title, price, description, category } = item;
        return (
          <div className="card" key={key}>
            <img src={image} className="img-fluid" />
            <h2>{title}</h2>
            <h4>Category: {category}</h4>
            <h3>Price: ${price}</h3>
            <p>{description?.slice(0, 200)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
