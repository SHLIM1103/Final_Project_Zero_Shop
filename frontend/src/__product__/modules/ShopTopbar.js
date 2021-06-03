import React from "react"
import { ShopTopAction } from "__product__/index"

const ShopTopbar = ({ getLayout, getFilterSortParams, productCount, sortedProductCount }) => {
  return (
    <>
      {/* shop top action */}
      <ShopTopAction
        getLayout={getLayout}
        getFilterSortParams={getFilterSortParams}
        productCount={productCount}
        sortedProductCount={sortedProductCount}
      />
    </>
  )
}

export default ShopTopbar
