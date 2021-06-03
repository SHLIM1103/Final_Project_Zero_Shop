import React from "react"
import { Link, useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { MenuCart } from "__common__/index"
import { deleteFromCart } from "__product__/redux/actions/cartActions"

const IconGroup = ({ currency, cartData, wishlistData, deleteFromCart, iconWhiteClass }) => {
  const history = useHistory()
  const handleClick = e => {
    e.currentTarget.nextSibling.classList.toggle("active")
  }
  const logout = () => {
    alert(`정상적으로 로그아웃 되었습니다.`)
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    history.go()
  }

  return (
    <>
      <div className={`header-right-wrap ${iconWhiteClass ? iconWhiteClass : ""}`}>
        <div className="same-style header-search d-none d-lg-block">
          <button className="search-active" onClick={e => handleClick(e)}>
            <i className="pe-7s-search" />
          </button>
          <div className="search-content">
            <form action="#">
              <input type="text" placeholder="Search" />
              <button className="button-search">
                <i className="pe-7s-search" />
              </button>
            </form>
          </div>
        </div>
        <div className="same-style account-setting d-none d-lg-block">
          <button className="account-setting-active" onClick={e => handleClick(e)}>
            <i className="pe-7s-user-female" />
          </button>
          {localStorage.getItem(`token`) === null ? (
            <div className="account-dropdown">
              <ul>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/login-register"}>로그인</Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/login-register"}>회원가입</Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="account-dropdown">
              <ul>
                <li>
                  <p>{JSON.parse(localStorage.getItem("user")).username}님, 환영합니다!</p>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/my-account"}>마이페이지</Link>
                </li>
                <li>
                  <a onClick={logout}>로그아웃</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="same-style header-wishlist">
          <Link to={process.env.PUBLIC_URL + "/wishlist"}>
            <i className="pe-7s-like" />
            <span className="count-style">
              {wishlistData && wishlistData.length ? wishlistData.length : 0}
            </span>
          </Link>
        </div>
        <div className="same-style cart-wrap d-none d-lg-block">
          <button className="icon-cart" onClick={e => handleClick(e)}>
            <i className="pe-7s-shopbag" />
            <span className="count-style">{cartData && cartData.length ? cartData.length : 0}</span>
          </button>
          {/* menu cart */}
          <MenuCart cartData={cartData} currency={currency} deleteFromCart={deleteFromCart} />
        </div>
        <div className="same-style cart-wrap d-block d-lg-none">
          <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
            <i className="pe-7s-shopbag" />
            <span className="count-style">{cartData && cartData.length ? cartData.length : 0}</span>
          </Link>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    currency: state.currencyData,
    cartData: state.cartData,
    wishlistData: state.wishlistData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IconGroup)
