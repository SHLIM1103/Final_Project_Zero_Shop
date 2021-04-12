import React from "react"
import { Link } from "react-router-dom"

const CategorySingle = ({ data, sliderClass }) => {
  return (
    <div className={`collection-product ${sliderClass ? sliderClass : ""}`}>
      <div className="collection-img">
        <Link to={process.env.PUBLIC_URL + data.link}>
          <img src={process.env.PUBLIC_URL + data.image} alt="" />
        </Link>
      </div>
      <div className="collection-content text-center">
        <span><Link to={process.env.PUBLIC_URL + data.link}>{data.title}</Link></span>
        <h4>
        </h4>
      </div>
    </div>
  )
}

export default CategorySingle