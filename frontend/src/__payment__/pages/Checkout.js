import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { Layout, Breadcrumb } from "__common__/index"
import axios from 'axios'
import jQuery from "jquery";
import moment from "moment";
import { useHistory } from "react-router"
import SectionTitleWithText from "../modules/SectionTitleWithText"

window.$ = window.jQuery = jQuery;

const Checkout = ({ location, cartItems, currency }) => {

  const [user, setUser] = useState({})
  const [cartItem, setCartItem] = useState([])
  const history = useHistory()

  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [])
  useEffect(()=>{
    setCartItem(localStorage.getItem("cartItem"))
  })
  const [ addr, setAddr ] = useState('')
  const [ extraAddr, setExtraAddr ] = useState('')
  const [ postcode, setPostcode ] = useState('')
  const [ fullAddr, setFullAddr ] = useState('')

  const execPostCode = () => {
    new window.daum.Postcode({
      oncomplete: data => {

        setPostcode(data.zonecode)

        if(data.userSelectedType === "R"){
          setAddr(data.roadAddress)
          if (data.buildingName !== ""){
            setExtraAddr(" (" + data.buildingName + ")")
          }
        }else{
          setExtraAddr(data.jibunAddress)
        }
    }
    }).open();
  };

  const { pathname } = location;
  let cartTotalPrice = 0;

  const [ rcvName, setRcvName ] = useState('')
  const [ rcvPhone, setRcvPhone ] = useState('')
  const [ payInfo, setPayInfo] = useState('')

  const placeOrder = e => {
    e.preventDefault()
         /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init('imp55713696');

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: 'kakaopay',                                // PG사
      pay_method: 'card',                           // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호
      amount: `${JSON.stringify(cartTotalPrice+2500)}`,                                 // 결제금액
      name: `${payInfo.prdName}`,                  // 주문명
      buyer_name: `${user.usrName}`,               // 구매자 이름
      buyer_tel: `${user.usrPhone}`,               // 구매자 전화번호
      buyer_email: `${user.usrEmail}`              // 구매자 주소
    }
    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);

    axios({
      url: 'http://localhost:8080/payments/save', 
      method: 'post',
      headers: {
        'Content-Type'  : 'application/json',
        'Authorization' : 'JWT fefege..'
      },
      data: {
        payPrice: JSON.stringify(cartTotalPrice+2500),
        payInfo: "",
        payDate: moment().format('YYYY-MM-DD HH:mm:ss'),
        payState: "결제완료",
        rcvAddr: `${postcode} ${addr} ${extraAddr}`+` `+fullAddr,
        rcvName, rcvPhone,
      }
    })
    .then(res => {
    })
    .catch(err => {
      console.log(`실패: ` + err)
      throw err
    })
}
  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const {
      success,
      merchant_uid,
      error_msg
    } = response;

    if (success) {
      history.push('/pay-success')
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  return (<>
    {localStorage.getItem("token") === null ?
  <>
  <MetaTags>
        <title>Flone | Checkout</title>
        <meta
          name="description"
          content="Checkout page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Checkout
      </BreadcrumbsItem>
      <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />
        </Layout>
      </>
      :
      <>
      <MetaTags>
        <title>Flone | Checkout</title>
        <meta
          name="description"
          content="Checkout page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Checkout
      </BreadcrumbsItem>
      <Layout headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-7">
                  <div className="billing-info-wrap">
                    <h3>주문자 정보</h3>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <label>이름</label>
                            <input type="text" value={user.usrName || ''} />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="billing-info mb-20">
                            <label>연락처</label>
                            <input type="text" value={user.usrPhone || ''} />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="billing-info mb-20">
                            <label>이메일주소</label>
                            <input type="text" value={user.usrEmail || ''} />
                          </div>
                        </div>
                    </div>
                    <h3>수령지 정보</h3>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>수령인</label>
                          <input name="rcvName" value={rcvName} placeholder="받으시는 분의 성함을 입력하세요" required
                          onChange = { e => { setRcvName(`${e.target.value}`)}}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>수령인 연락처</label>
                          <input type="number" name="rcvPhone" value={rcvPhone} placeholder="받으시는 분의 연락처를 입력하세요" required
                          onChange = { e => { setRcvPhone(`${e.target.value}`)}}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20"> 
                          <div className="addr-search mt-25">
                            <label>주소 </label>
                            <button onClick={ execPostCode }>주소 검색</button>
                          <input type="text" value={`${postcode} ${addr} ${extraAddr}`} readOnly />
                          <input type="text" placeholder="받으시는 분의 상세 주소를 입력하세요" name="fullAddr" value={fullAddr} required
                          onChange = { e => { setFullAddr(`${e.target.value}`)}} />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>결제 정보 확인</h3>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>품목</li>
                            <li>금액</li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
                            {cartItems.map((cartItem, key) => {
                              const finalProductPrice = (
                                cartItem.prdPrice * currency.currencyRate
                              );
                              cartTotalPrice +=
                              finalProductPrice * cartItem.quantity
                              return (
                                <li key={key}>
                                  <span className="order-middle-left">
                                  {cartItem.prdName+` X `+cartItem.quantity}
                                  <input type="hidden" name="payInfo" value={cartItem.prdName+` X `+cartItem.quantity} 
                                  readOnly onChange = { e => { setPayInfo(`${e.target.value}`)}} />
                                  </span>{" "}
                                  <span className="order-price">
                                    {currency.currencySymbol + (finalProductPrice * cartItem.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">배송비</li>
                            <li>{cartTotalPrice < 50000 ? "￦2,500" : "무료배송"}
                              <input type="hidden" name="shipping" value={cartTotalPrice < 50000 ? "￦2,500" : "무료배송"} readOnly /></li>
                          </ul>
                        </div>
                        <div className="your-order-total">
                          <ul>
                            <li className="order-total">총 결제금액</li>
                            <li>{cartTotalPrice < 50000 ? currency.currencySymbol + (cartTotalPrice + 2500).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
                          : currency.currencySymbol + cartTotalPrice}
                              <input type="hidden" name="payPrice" value={cartTotalPrice < 50000 ? currency.currencySymbol + (cartTotalPrice + 2500)
                          : currency.currencySymbol + cartTotalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} readOnly />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="payment-method"></div>
                    </div>
                    <div className="place-order mt-25">
                    <button className="btn-hover" type="submit" onClick={placeOrder}>결제하기</button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in cart to checkout <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
          }
          </>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  location: PropTypes.object
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    currency: state.currencyData
  };
};

export default connect(mapStateToProps)(Checkout);