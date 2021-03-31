import PropTypes from "prop-types"
import React from "react"
import { setActiveSort } from "../../_common_/modules/helpers/product"

const ShopTag = ({ tags, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Tag </h4>
      <div className="sidebar-widget-tag mt-25">
        {tags ? (
          <ul>
            {tags.map((tag, key) => {
              return (
                <li key={key}>
                  <button
                    onClick={e => {
                      getSortParams("tag", tag)
                      setActiveSort(e)
                    }}
                  >
                    {tag}
                  </button>
                </li>
              )
            })}
          </ul>
        ) : (
          "해당 제품과 관련된 태그가 없습니다."
        )}
      </div>
    </div>
  )
}

ShopTag.propTypes = {
  getSortParams: PropTypes.func,
  tags: PropTypes.array
}

export default ShopTag
