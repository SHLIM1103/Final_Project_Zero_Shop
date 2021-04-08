import React, { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const BlogPostList= () => {
  const [board, setBoard] = useState([])
  const [search, setSearch] = useState({
    brdTitle: "",
  })
  const { brdTitle } = search
  const onChange = useCallback(e => {
    setSearch({...search, [e.target.name]: e.target.value})
  })
  
  useEffect(() => {
    axios.get('http://localhost:8080/boards/all', )
    .then((res) => {
      console.log(`게시글 전체 조회 성공`)
      setBoard(res.data)
    })
    .catch((err) => {
      console.log(`게시글 전체 조회 실패` + err)
      throw err
    })
  }, [])

  return (<>
    {board ? board.map(b =>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-detail/" + b.brdNo}>
              <img src={b.brdImg} alt={b.brdTitle} /> 
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>{b.brdWrtDate}</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-detail"}>
                    <i className="fa fa-comments-o"/>
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to={process.env.PUBLIC_URL + `/blog-detail/${b.brdNo}`} key={b.brdNo} >
                {b.brdTitle}
              </Link>
            </h4>
            작성자: {b.usrName} 
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                조회수: {b.brdCount} 
              </div>
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
      </div>)
    : `조회할 게시글이 없습니다`}
    
    <div className="blog-top mb-50 mt-25">
      {localStorage.getItem("user") != null ?
        <button>
          <Link to='/blog-write'>게시글 작성</Link>
        </button>
      :
      ""}
      
      <form className="blog-search-form" action="#">
        <input type="text" placeholder="Search here..." onChange={onChange} />
        <button onClick={`/blog-search/${search}`} >
          <i className="pe-7s-search" />
        </button>
      </form>
    </div>
  </>)
}

export default BlogPostList