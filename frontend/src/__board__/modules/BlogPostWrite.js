import React, { useState } from "react"
import { useForm } from "react-hook-form"
import  { useHistory } from "react-router"
import axios from "axios"

const BlogPostWrite = () => {
  const history = useHistory()
  const [brdTitle, setBrdTitle] = useState('')
  const [brdContent, setBrdContent] = useState('')
  const [brdWrtDate, setBrdWrtDate] = useState('')
  const [brdRank, setBrdRank] = useState('')
  const [brdImg, setBrdImg] = useState('')
  const [brdLike, setBrdLike] = useState('')
  const [usrNickname, setUsrNickname] = useState('')

  const { register,handleSubmit} = useForm() 

  const write = e => {
    e.preventDefault()
    axios({
      url: 'http://localhost:8080/boards/save',
      method: 'post',
      headers: {
        'Content-Type'  : 'application/json',
        'Authorization' : 'JWT fefege..'
      },
      data: { brdTitle, brdContent, brdWrtDate, brdRank, brdImg, brdLike, usrNickname }
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
    <div className="blog-details-top">
      <div className="blog-details-img">
        <form onSubmit={handleSubmit()}>
      <div>
      <h5>사진 업로드: 
        <input
          ref={register}
          type="file"
          accept="image/*"
          name="brdImg"
          onChange={e => {setBrdImg(`${e.target.value }`)}}/>
      </h5>
      </div>
      </form>
      </div>
      <div className="blog-details-content">
  <form>
        <td ><h3><input type="text" placeholder="글 제목 입력"   onChange={e => {setBrdTitle(`${e.target.value}`)}}/></h3></td>
        <div type></div>
        <td><textarea rows="30" cols="200"  placeholder="글 내용 입력"  onChange={e => {setBrdContent(`${e.target.value}`)}}
        >
      </textarea></td></form>
      </div>
    </div>
    <div className="dec-img-wrapper">
      <div className="row">

        <div className="col-md-6">
        </div>
      </div>
    
    </div>
    <div className="tag-share">
      <div className="dec-tag">
        <ul>
          <li>
            <button type="submit" onClick={write}>글 작성 완료</button>
          </li>
        </ul>
      </div>
    </div>
  </>
  )
}

export default BlogPostWrite