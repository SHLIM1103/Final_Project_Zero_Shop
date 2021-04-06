import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { ProductImageDescriptionStickyComp } from "__product__/index"
import axios from "axios"

const ProductImageDescriptionSticky = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/products/product-number/' + localStorage.getItem(`prdNo`), )
    .then((res) => {
      setProducts(res.data)
      console.log(`제품 이미지 조회 성공: ` +  + localStorage.getItem(`prdNo`))
    })
    .catch((err) => {
      console.log(`제품 이미지 조회 실패` + err)
      throw err
    })
  }, [])

  return (<>
    {products.map((product => {
      return(
        <ProductImageDescriptionStickyComp product={product} key={product.prdNo} />
      )}
    ))}
  </>)
}

ProductImageDescriptionSticky.propTypes = {
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  product: PropTypes.object,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  wishlistItems: PropTypes.array
}

export default ProductImageDescriptionSticky