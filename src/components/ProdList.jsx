import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProdComp from './ProdComp'
import axios from 'axios'


const ProdList = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch();

    const fetchProd = async () => {
      const response = await axios.get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err)
      });
      dispatch(setProducts(response.data))
    }

    useEffect(()=> {
      fetchProd();
    }, []);
    console.log(products);
  return (
    <div>
      <ProdComp />
    </div>
  )
}

export default ProdList