import PropTypes from "prop-types"
import React from "react"
import { Logo, NavMenu, IconGroup } from "__common__/index"

const Header = ({ layout }) => {
  return (<>
    <div className={layout === "container-fluid" ? layout : "container"}>
      <div className="row">
        <div className="col-xl-2 col-lg-2 col-md-6 col-4">
          {/* header logo */}
          <Logo imageUrl="/assets/img/logo/logo.png" logoClass="logo" />
        </div>
        <div className="col-xl-8 col-lg-8 d-none d-lg-block">
          {/* Nav menu */}
          <NavMenu />
        </div>
        <div className="col-xl-2 col-lg-2 col-md-6 col-8">
          {/* Icon group */}
          <IconGroup />
        </div>
      </div>
    </div>
  </>)
}

Header.propTypes = {
  borderStyle: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  layout: PropTypes.string,
  top: PropTypes.string
}

export default Header