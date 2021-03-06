import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const BlogPostList = () => {
  const [board, setBoard] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8080/boards/all")
      .then(res => {
        setBoard(res.data)
      })
      .catch(err => {
        throw err
      })
  }, [])

  return (
    <>
      {board
        ? board.map(b => (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-wrap-2 mb-30">
                <div className="blog-img-2">
                  <Link to={process.env.PUBLIC_URL + `/blog-detail/${b.brdNo}`}>
                    <img src={b.brdImg} alt={b.brdTitle} />
                  </Link>
                </div>
                <div className="blog-content-2">
                  <div className="blog-meta-2">
                    <ul>
                      <li>{b.brdWrtDate}</li>
                      <li>
                        <Link to={process.env.PUBLIC_URL + "/blog-detail"}>
                          <i className="fa fa-comments-o" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <Link to={process.env.PUBLIC_URL + `/blog-detail/${b.brdNo}`}>
                      {b.brdTitle}
                    </Link>
                  </h4>
                  작성자: {b.usrName}
                  <div className="blog-share-comment">
                    <div className="blog-btn-2">조회수: {b.brdCount}</div>
                    <div className="blog-share">
                      <span>share :</span>
                      <div className="share-social">
                        <ul>
                          <li>
                            <a className="facebook" href="//facebook.com">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a className="twitter" href="//twitter.com">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a className="instagram" href="//instagram.com">
                              <i className="fa fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : "조회할 게시글이 없습니다"}
    </>
  )
}

export default BlogPostList
