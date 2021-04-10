import React, { useCallback, useState } from "react"
import  { useHistory } from "react-router"
import axios from "axios"

const BlogPostWrite = () => {
  const history = useHistory()
  const [boardAdd, setBoardAdd] = useState({
    brdTitle: "",
    brdContent: "",
    brdWrtDate: "",
    brdRank: "",
    brdImg: "",
    brdLike: "",
    usrName: JSON.parse(localStorage.getItem("user")).usrName,
    usrNo: JSON.parse(localStorage.getItem("user")).usrNo,
    brdKind: 1
  })
  const { brdTitle, brdContent, brdImg } = boardAdd
  const onChange = useCallback(e => {
    setBoardAdd({...boardAdd, [e.target.name]: e.target.value})
  })

  const write = e => {
    e.preventDefault()
    axios({
      url: 'http://localhost:8080/boards/save',
      method: 'post',
      headers: {
        'Content-Type'  : 'application/json',
        'Authorization' : 'JWT fefege..'
      },
      data: boardAdd
    })
    .then((res) => {
      console.log(`게시글 작성 성공`)
      history.push('/blog-all')
    })
    .catch((err) => {
          console.log(`게시글 작성 실패: ` + err)
          throw err
    })
  }
  
  return (<>
    {localStorage.getItem("token") !=null 
    && JSON.stringify(JSON.parse(localStorage.getItem("user")).roles) === JSON.stringify(["USER"]) ? 
      <>
        <div className="blog-details-top">
          <form>
            <div className="blog-details-content">
              <tr>
                <p>작성자: {JSON.parse(localStorage.getItem("user")).usrName}</p>
              </tr>
              <tr>
                <h3>
                  <input 
                  rows="30"
                    type="text"
                    name="brdTitle"
                    placeholder="글 제목 입력"
                    value={brdTitle}
                    onChange={onChange}
                  />
                </h3>
              </tr>
              <tr>
              <textarea
                rows="30" cols="200"
                name="brdContent"
                placeholder="글 내용 입력"
                value={brdContent}
                onChange={onChange}
              />
              </tr>
              <div className="blog-details-img">
                <tr>
                  <h5>사진 업로드: 
                    <input
                      type="file"
                      accept="image/*"
                      name="brdImg"
                      value={brdImg}
                      onChange={onChange}
                    />
                  </h5>
                </tr>
              </div>
            </div>
          </form>
        </div>
      <button type="submit" onClick={write}>등록하기</button>
    </>
    : `잘못된 접근입니다.`}
  </>)
}

export default BlogPostWrite