import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { ProductImageGalleryStickyComp } from "__product__/index"
import axios from "axios"

const ProductImageGallerySticky = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/products/product-number/' + localStorage.getItem('prdNo'), )
    .then((res) => {
      setProducts(res.data)
    })
    .catch((err) => {
      console.log(`error !`)
      throw err
    })
  }, [])

  return (<>
    {products.map((product => {
      return(
        <ProductImageGalleryStickyComp product={product} key={product.prdNo} />
      )}
    ))}
  </>)
}

ProductImageGallerySticky.propTypes = {
  product: PropTypes.object
}

export default ProductImageGallerySticky