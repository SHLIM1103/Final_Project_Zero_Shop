import PropTypes from "prop-types"
import React from "react"
import { Link } from "react-router-dom"
import { multilanguage } from "redux-multilanguage"

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {strings["home"]}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/product-all"}>
              {strings["shop"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                  <Link to={process.env.PUBLIC_URL + "/product-all"}>
                    {"ALL PRODUCTS"}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/product/living"}>
                    {"LIVING"}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/product/kitchen"}>
                    {"KITCHEN"}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/product/bathroom"}>
                    {"BATHROOM"}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/product/stationary"}>
                    {"STATIONARY"}
                  </Link>
                </li>
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/blog-all"}>
              {strings["blog"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-all"}>
                  {"Blog All"}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {strings["contact_us"]}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
}

export default multilanguage(NavMenu)