import React, { useState, useEffect } from "react"
import { ProductImageDescriptionStickyComp } from "__product__/index"
import axios from "axios"

const ProductImageDescriptionSticky = ({ product }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/product-number/${product.prdNo}`)
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => {
        throw err
      })
  }, [])

  return (
    <>
      {products.map(product => {
        return <ProductImageDescriptionStickyComp product={product} key={product.prdNo} />
      })}
    </>
  )
}

export default ProductImageDescriptionSticky
