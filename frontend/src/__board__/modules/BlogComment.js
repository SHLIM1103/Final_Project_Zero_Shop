import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { useHistory } from 'react-router'
import axios from "axios"

const BlogComment = ({ boards }) => {
  const [rplContent, setRplContent] = useState([])
  const [replies, setReplies] = useState([])
  const history = useHistory()


  const reply = e => {
    e.preventDefault()
    axios({
      url: 'http://localhost:8080/replies/save',
      method: 'post',
      headers: {
        'Content-Type'  : 'application/json',
        'Authorization' : 'JWT fefege..'
      },
      data: {boardNo: boards.brdNo ,rplContent,usrName: JSON.parse(localStorage.getItem("user")).usrName, usrNo: JSON.parse(localStorage.getItem("user")).usrNo}
    })
  .then(res => {
    history.go()
  })
  .catch(err => {
    alert('댓글 작성 실패')
    throw err
  })
  }
  useEffect(()=>{
    axios({
    url: 'http://localhost:8080/replies/all',
    method: 'get',
    headers: {
      'Content-Type'  : 'application/json',
      'Authorization' : 'JWT fefege..'
    },
    data: {}
  })
   .then((res) => {
    setReplies(res.data)
    console.log(`댓글 조회 성공`)
   })
   .catch((error) => {
     console.log('댓글 조회 실패')
     throw error
   })
   
 },[])
 
 const remove1 = () => {
  const removeBlog = window.confirm("해당 댓글을 삭제하시겠습니까?")
  if(removeBlog){
    axios({
      url: `http://localhost:8080/replies/delete/`+localStorage.getItem("rpl"),
      method: 'delete',
      data:  {}
     })
  .then(resp => {
    alert('댓글이 삭제 되었습니다')
    localStorage.removeItem("rpl")
    history.go()
  })
  .catch(err => {
    alert('댓글 삭제 실패')
    throw err
  })
  }
} 
  return (
    <>
      <div className="blog-comment-wrapper mt-55">
        <h4 className="blog-dec-title">🌱 총 {replies.length}개의 댓글 💬</h4>
        {replies ? replies.map (r=>
        <div className="single-comment-wrapper mt-35">
          
          <div className="blog-comment-content">
            <h4>{r.usrName}</h4> 
            <div>
            {localStorage.getItem("token")!=null ? <>
              {JSON.parse(localStorage.getItem("user")).usrNo==r.usrNo ?
              <>
                <button><Link to={process.env.PUBLIC_URL + `/comment-update/${r.rplNo}`}>수정</Link></button>
                <button  onClick={remove1} ><Link to={localStorage.setItem("rpl",r.rplNo)}>삭제</Link></button></>:''}
              </>
            : ''}
            </div>
            <span>October 14, 2018 </span>
            <p>
            {r.rplContent}
            </p>
            
          </div>
        </div>
        ) : '댓글이 없습니다'} 
      </div>
      {localStorage.getItem("token")!==null ?
      <div className="blog-reply-wrapper mt-50">
        <h4 className="blog-dec-title">post a comment</h4>
        <>
        <form className="blog-form">
          <div className="row">
            <div className="col-md-6">
              <div className="leave-form">
                작성자: {JSON.parse(localStorage.getItem("user")).usrName}
              </div>
            </div>
            <div className="col-md-6">
              <div className="leave-form">
                <div placeholder={JSON.parse(localStorage.getItem("user")).usrName} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="text-leave">
                <textarea placeholder="Message" name="rplContent" defaultValue={""} onChange={e=> setRplContent(`${e.target.value}`)}/>
                <input type="submit" defaultValue="SEND MESSAGE" onClick={reply}/>
              </div>
             
            </div>
          </div>
        </form>
        </>
      </div>
        :'' }
</>
  )
}

export default BlogComment