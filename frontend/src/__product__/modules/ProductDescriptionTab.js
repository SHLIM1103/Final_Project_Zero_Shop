import React, { useState, useEffect, useCallback } from "react"
import Tab from "react-bootstrap/Tab"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import { useForm } from "react-hook-form"
import { makeStyles } from "@material-ui/core/styles"
import Rating from "@material-ui/lab/Rating"
import axios from "axios"

const ProductDescriptionTab = ({ spaceBottomClass, product }) => {
  const history = useHistory()
  const [brdTitle, setBrdTitle] = useState("")
  const [brdContent, setBrdContent] = useState("")
  const [brdWrtDate, setBrdWrtDate] = useState("")
  const [brdRank, setBrdRank] = useState("")
  const [brdImg, setBrdImg] = useState("")
  const [brdLike, setBrdLike] = useState("")
  const [brdNikcname, setBrdNikcname] = useState("")
  const [brdKind, setBrdKind] = useState("")
  const { register, handleSubmit } = useForm()
  const [board, setBoard] = useState([])
  const [state, setState] = useState(true)
  const [dele, setDele] = useState({
    brdNo: ""
  })
  const { brdNo } = dele
  const onChange = useCallback(e => {
    setDele({ ...dele, [e.target.name]: e.target.value })
  })

  function toggle() {
    setState(!state)
  }
  const ratingChanged = newRating => {
    console.log(newRating)
  }
  const [clicked, setClicked] = useState([false, false, false, false, false])

  const useStyles = makeStyles({
    root: {
      width: 200,
      display: "flex",
      alignItems: "center"
    }
  })
  const [value, setValue] = React.useState(0)
  const [hover, setHover] = React.useState(-1)
  const classes = useStyles()

  const review = e => {
    e.preventDefault()

    axios({
      url: "http://localhost:8080/boards/save",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT fefege.."
      },
      data: {
        brdTitle,
        brdContent,
        brdWrtDate,
        brdRank,
        brdImg,
        brdLike,
        brdNikcname,
        brdKind: 2,
        usrName: JSON.parse(localStorage.getItem("user")).usrName,
        usrNo: JSON.parse(localStorage.getItem("user")).usrNo,
        productNo: product.prdNo,
        brdRank: value
      }
    })
      .then(resp => {
        alert("?????? ?????? ??????")
        history.go()
      })
      .catch(err => {
        alert("?????? ?????? ??????")
        throw err
      })
  }
  useEffect(() => {
    axios({
      url: "http://localhost:8080/boards/review/all",
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT fefege.."
      },
      data: {}
    })
      .then(res => {
        setBoard(res.data)
      })
      .catch(error => {
        alert("??????")
        throw error
      })
  }, [])
  const remove = () => {
    const removeBlog = window.confirm("?????? ????????? ?????????????????????????")
    if (removeBlog) {
      axios({
        url: `http://localhost:8080/boards/delete/${localStorage.getItem("brdNo")}`,
        method: "delete",
        data: { brdNo: localStorage.getItem("brdNo") }
      })
        .then(resp => {
          alert("????????? ?????? ???????????????")
          history.go()
          localStorage.removeItem("brdNo")
        })
        .catch(err => {
          alert("?????? ?????? ??????")
          localStorage.removeItem("brdNo")
          throw err
        })
    }
  }
  return (
    <>
      <div className={`description-review-area ${spaceBottomClass}`}>
        <div className="container">
          <div className="description-review-wrapper">
            <Tab.Container defaultActiveKey="productDescription">
              <Nav variant="pills" className="description-review-topbar">
                <Nav.Item>
                  <Nav.Link eventKey="additionalInfo">
                    <strong>????????????</strong>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="productDescription">
                    <strong>?????? ????????????</strong>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="productReviews">REVIEWS ({board.length})</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="description-review-bottom">
                <Tab.Pane eventKey="additionalInfo">
                  <div className="product-anotherinfo-wrapper">
                    <ul>
                      <li>
                        <span>
                          <strong>????????????</strong>
                        </span>{" "}
                        ?????? ????????? ????????? Plastic Free ???????????? ???????????????. (????????????, ???????????????,
                        ???????????????) <br />
                        <span></span> ???????????? ??????????????? ???????????? ????????? ??? ????????? ????????????
                        ????????????.
                        <br />
                        <span></span> ?????? ?????? ??? ????????? ??? 2~3??? ???????????????.
                        <br />
                        <span></span> ?????? ?????? ?????? ?????? ????????? ????????? ?????? ??????????????? ?????????
                        ??????????????????.
                        <br />
                        <span></span> ???????????? ????????? ???????????? ?????? ????????? ?????? ???????????? ???????????????.
                      </li>
                      <li>
                        <span>
                          <strong>??????/??????</strong>
                        </span>{" "}
                        ???????????? ?????? ????????? ?????? ?????? ??? ?????? ????????? ?????? ?????? ??? 7??? ?????????
                        ???????????????. (?????? ???????????? ?????? ???????????? ????????? ???????????????.) <br />
                        <span></span> ?????? ?????? ????????? ???????????? ?????? ????????????????????? ?????? ????????????.{" "}
                        <br />
                        <span></span> ????????? ?????????????????? ????????? ????????? ?????? ??? ????????? ???????????????.
                        (?????? ????????? ?????? ?????? ??? ????????? ???????????????.)
                      </li>
                    </ul>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="productDescription">
                  <div className="product-anotherinfo-wrapper">
                    <ul>
                      <li>
                        <span>
                          <strong>Zero Waste ?????????</strong>
                        </span>{" "}
                        ??????????????? ???easy !
                      </li>
                      <li>
                        <span>
                          <strong>????????? ??????</strong>
                        </span>{" "}
                        Plastic Free <br />
                        <span></span> Package Free <br />
                        <span></span> ????????? & ????????? <br />
                        <span></span> ??????????????????
                      </li>
                      <li>
                        <span>
                          <strong>?????? ??????</strong>
                        </span>{" "}
                        ?????????????????? ??????
                      </li>
                      <li>
                        <span>
                          <strong>?????? ????????? ??????</strong>
                        </span>{" "}
                        ?????????????????? ?????? ??? ?????? ?????? ?????? ????????? ?????? ???????????????.
                      </li>
                    </ul>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="productReviews">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="review-wrapper">
                        {board
                          ? board.map(b => (
                              <div className="single-review">
                                <div className="review-img">
                                  <img src={b.brdImg} alt={b.brdImg} />
                                </div>
                                <div className="review-content">
                                  <div className="review-top-wrap">
                                    <div className="review-left">
                                      <div className="review-name">
                                        <h4>{b.brdTitle} </h4>
                                      </div>

                                      <div className="review-rating">
                                        <Rating value={b.brdRank} />
                                      </div>
                                    </div>
                                    <div className="review-left">
                                      {localStorage.getItem("token") != null &&
                                      JSON.stringify(
                                        JSON.parse(localStorage.getItem("user")).usrNo
                                      ) === b.usrNo ? (
                                        <>
                                          <button>
                                            <Link
                                              to={
                                                process.env.PUBLIC_URL + `/blog-update/${b.brdNo}`
                                              }
                                            >
                                              ????????????
                                            </Link>
                                          </button>
                                          <Link onClick={remove}>
                                            <a
                                              onClick={() => {
                                                localStorage.setItem("brdNo", b.brdNo)
                                              }}
                                            >
                                              ????????????
                                            </a>
                                          </Link>
                                        </>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  </div>
                                  <div className="review-bottom">
                                    <p>{b.brdContent}</p>
                                    ?????????: {b.usrName}
                                    <div className="review-left">????????????: {b.brdWrtDate}</div>
                                  </div>
                                </div>
                              </div>
                            ))
                          : "?????? ??? ???????????? ????????????"}
                      </div>
                    </div>
                    {localStorage.getItem("token") != null ? (
                      <div className="col-lg-5">
                        <div className="ratting-form-wrapper pl-50">
                          <h3>Add a Review</h3>
                          <div className="ratting-form">
                            <form action="#">
                              <div className="star-box">
                                <span>Your rating:</span>
                                <Rating
                                  value={value}
                                  precision={1}
                                  onChange={(event, newValue) => {
                                    setValue(newValue)
                                  }}
                                  onChangeActive={(event, newHover) => {
                                    setHover(newHover)
                                  }}
                                />
                              </div>

                              <div className="row">
                                <div className="col-md-6">
                                  <div className="rating-form-style mb-10">
                                    <td>
                                      <h3>
                                        <input
                                          type="text"
                                          placeholder="?????? ?????? ??????"
                                          onChange={e => {
                                            setBrdTitle(`${e.target.value}`)
                                          }}
                                        />
                                      </h3>
                                    </td>
                                    <div type></div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="rating-form-style mb-10">
                                    ?????????: {JSON.parse(localStorage.getItem("user")).usrName}
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <form>
                                    <td>
                                      <textarea
                                        rows="10"
                                        cols="100"
                                        placeholder="?????? ?????? ??????"
                                        onChange={e => {
                                          setBrdContent(`${e.target.value}`)
                                        }}
                                      ></textarea>
                                    </td>
                                  </form>
                                  <div className="rating-form-style form-submit">
                                    <input type="submit" defaultValue="Submit" onClick={review} />
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDescriptionTab
