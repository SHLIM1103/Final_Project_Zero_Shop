import React, { useState, Fragment,useEffect } from "react"
import { useForm } from "react-hook-form"
import  { useHistory } from "react-router"
import axios from "axios"

const BlogPostUpdate = () => {
  const [board, setBoard] = useState([])
  const history = useHistory()
  const [brdNo, setBrdNo] = useState('')
  const [brdTitle, setBrdTitle] = useState('')
  const [brdContent, setBrdContent] = useState('')
  const [brdWrtDate, setBrdWrtDate] = useState('')
  const [brdRank, setBrdRank] = useState('')
  const [brdImg, setBrdImg] = useState('')
  const [brdLike, setBrdLike] = useState('')
  const [brdNikcname, setBrdNikcname] = useState('')
  const { register,handleSubmit} = useForm() 

useEffect(() => {
 axios.get('/board/opt/' + localStorage.getItem(`brdNo`), )
 .then(({data}) => {
  setBoard(data)
  setBrdNo(data)
 })
 .catch((error) => {
   alert('실패')
   throw error
 })
}, [])

const blogUpdate = e => {
  e.preventDefault()
  axios({
    url: 'http://localhost:8080/board/update' + localStorage.getItem(`brdNo`),
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json','Authorization': 'JWT fefege..'
    },
    data: {
      brdTitle,brdContent,brdWrtDate,brdRank,brdImg,brdLike,brdNikcname
    }
  })
  .then(res => {
    alert(`수정 완료`)
    history.push(`/blog-list`)
  })
  .catch(err => {
    alert(`수정 실패`)
    throw err
  })
  }

  return (
    <Fragment>
      <div>
        <div>
          {board ? (
              <>
                <div>
                  <label>작성날짜: </label>
                  <label>{board.brdWrtDate}</label>
                </div>
                <div >
                  <label>제목: </label>
                  <label><input type="text" placeholder={board.brdTitle} onChange = { e => {setBrdTitle(`${e.target.value}`)}}/></label>
                </div> 
                
                <div >
                  <label>내용: </label>
                  <div>
                  <textarea rows="55" cols="250"  placeholder={board.brdContent} onChange = { e => {setBrdContent(`${e.target.value}`)}}
            />
                  </div>
                </div>
                <a href="#" key={board.brdNo} onClick={ blogUpdate }> 수정완료 </a>
              </>
            ) : '해당 게시글을 찾을 수 없습니다.'
          }
          </div>
        </div>
    </Fragment>
  )
}

export default BlogPostUpdate