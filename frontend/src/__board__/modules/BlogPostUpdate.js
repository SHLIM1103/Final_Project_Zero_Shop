import React, { useState } from "react"
import  { useHistory } from "react-router"
import axios from "axios"

const BlogPostUpdate = ({ boards }) => {
  const history = useHistory()
  
  const [brdTitle, setBrdTitle] = useState('')
  const [brdContent, setBrdContent] = useState('')
  const [brdWrtDate, setBrdWrtDate] = useState('')
  const [brdRank, setBrdRank] = useState('')
  const [brdImg, setBrdImg] = useState('')
  const [brdLike, setBrdLike] = useState('')
  const [usrNickname, setUsrNickname] = useState('')

  const blogUpdate = e => {
    e.preventDefault()
    axios({
      url: 'http://localhost:8080/boards/update/' + boards.brdNo,
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege..'
      },
      data: { 
        brdNo: boards.brdNo, 
        brdTitle, brdContent, brdWrtDate, brdRank, brdImg, brdLike, usrNickname
      }
    })
    .then((res) => {
      console.log(boards.brdNo + `번 게시글 수정 성공`)
      history.push(`/blog-all`)
    })
    .catch(err => {
      console.log(boards.brdNo + `번 게시글 수정 실패: ` + err)
      throw err
    })
  }

  return (<>
    <div>
      <div>
        <div>
          <label>제목: </label>
          <label><input type="text" placeholder={boards.brdTitle} onChange = {e => { setBrdTitle(`${e.target.value}`) }}/></label>
        </div> 
        
        <div >
          <label>내용: </label>
          <div>
            <textarea rows="55" cols="250" placeholder={boards.brdContent} onChange = {e => { setBrdContent(`${e.target.value}`) }}/>
          </div>
        </div>
        <button onClick={ blogUpdate }> 수정완료 </button>
       </div>
    </div>
  </>)
}

export default BlogPostUpdate