import React from 'react'
import { useSelector } from 'react-redux'

const ProdComp = () => {
    const products = useSelector((state) => state.allProducts.products)
    const { id, title } = products[0]

  return (
    <div className=''>
        <div>
            <img src="" alt="pic" />
        </div>
        <div>
            <h1>
                {title}
            </h1>
        </div>
    </div>
  )
}

export default ProdComp