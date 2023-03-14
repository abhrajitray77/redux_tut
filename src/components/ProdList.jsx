import React from 'react'
import { useSelector } from 'react-redux'
import ProdComp from './ProdComp'

const ProdList = () => {
    const products = useSelector((state) => state)
    console.log(products)

  return (
    <div>
        <ProdComp />
    </div>
  )
}

export default ProdList