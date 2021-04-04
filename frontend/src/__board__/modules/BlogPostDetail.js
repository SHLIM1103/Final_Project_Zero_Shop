import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import  { useHistory } from "react-router"
import axios from "axios"

const BlogPostDetail = () => {
  const history = useHistory()
  const [board, setBoard] = useState([])
  const [brdNo, setBrdNo] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8080/boards/opt/' + localStorage.getItem(`brdNo`), )
    .then((res) => {
      setBoard(res.data)
      setBrdNo(res.data)
    })
    .catch((err) => {
      alert(`board detail axios 실패: ` + err)
      throw err
    })
  }, [])

  const remove = e => {
    e.preventDefault()
    const removeConfirm = window.confirm(`해당 게시글을 삭제하시겠습니까?`)
    if(removeConfirm) {
      axios({
        url: 'http://localhost:8080/boards/delete/' + localStorage.getItem(`brdNo`),
        method: 'delete',
        headers: {
          'Content-Type'  : 'application/json',
          'Authorization' : 'JWT fefege..'
        },
        data: {}
      })
      .then(res => {
      alert(`삭제 성공`)
      history.push(`/blog-all`)
      })
      .catch(err => {
        alert(`글 삭제 실패: ` + err)
        throw err
      })
    }
  }
  return (<>
    {board ? (<>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img src={board.brdImg} alt={board.brdImg} /> 
        </div>

        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li> {board.brdWrtDate} </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h3 type="text"> {board.brdTitle} </h3>
          <p>
            {board.brdContent}
          </p>
        </div>
      </div>

      <div className="tag-share">
        <div>
          <a href="#" ><Link to={"/blog-update/"+board.brdNo}>글 수정하기</Link></a><br/>
          <a href="#"  onClick={remove}>글 삭제하기</a>
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
      
      <div className="next-previous-post"/>
    </>) : '해당 게시글을 찾을 수 없습니다.'}
  </>)
}

export default BlogPostDetail