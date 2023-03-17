import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProdComp from "./ProdComp";
import axios from "axios";
import { setProd } from "../redux/actions/prodActions";

const ProdList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProd = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProd(response.data));
  };

  useEffect(() => {
    fetchProd();
  }, []);
  console.log("Products", products);
  return (
    <div>
      <ProdComp />
    </div>
  );
};

export default ProdList;
