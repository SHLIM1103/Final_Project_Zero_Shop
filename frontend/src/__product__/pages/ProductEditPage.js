import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"
import { Layout, Breadcrumb } from "__common__/index"
import { ProductEditComp } from "__product__/index"
import axios from "axios"

const ProductEditPage = ({ location, match }) => {
  const { pathname } = location
  const [products, setProducts] = useState([])
  const [prdNo, setPrdNo] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8080/products/product-number/' + match.params.id, )
    .then((res) => {
      console.log(match.params.id + `번 게시글 상세조회 성공`)
      setProducts(res.data)
      setPrdNo(res.data)
    })
    .catch((err) => {
      console.log(match.params.id + `번 게시글 상세조회 실패: ` + err)
      throw err
    })
  }, [])

  return (<>
    <MetaTags>
        <title>ZER0 SHOP | Product Edit Page</title>
    </MetaTags>

    <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
    <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>Edit Product</BreadcrumbsItem>
    
    <Layout headerTop="visible">
      {/* breadcrumb */}
      <Breadcrumb />
      
      {/* Edit Product Component */}
      <ProductEditComp products={products} />
      
    </Layout>
  </>)
}

ProductEditPage.propTypes = {
  location: PropTypes.object,
}

export default ProductEditPage