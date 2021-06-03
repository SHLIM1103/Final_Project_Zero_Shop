import React, { useState, useCallback } from "react"
import { useHistory } from "react-router"
import axios from "axios"

const BlogPostUpdate = ({ boards }) => {
  const history = useHistory()

  const [boardUpdate, setBoardUpdate] = useState({
    brdNo: boards.brdNo,
    brdTitle: boards.brdTitle,
    brdContent: boards.brdContent
  })
  const { brdTitle, brdContent, brdWrtDate, brdRank, brdImg, brdLike, usrNickname } = boardUpdate
  const onChange = useCallback(e => {
    setBoardUpdate({ ...boardUpdate, [e.target.name]: e.target.value })
  })

  const blogUpdate = e => {
    e.preventDefault()
    axios({
      url: "http://localhost:8080/boards/update/" + boards.brdNo,
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT fefege.."
      },
      data: {
        brdNo: boards.brdNo,
        brdTitle,
        brdContent,
        brdWrtDate,
        brdRank,
        brdImg,
        brdLike,
        usrNickname
      }
    })
      .then(res => {
        console.log(boards.brdNo + `번 게시글 수정 성공`)
        history.goBack()
      })
      .catch(err => {
        console.log(boards.brdNo + `번 게시글 수정 실패: ` + err)
        throw err
      })
  }

  return (
    <>
      {localStorage.getItem("token") != null &&
      JSON.stringify(JSON.parse(localStorage.getItem("user")).usrNo) === boards.usrNo ? (
        <>
          <div>
            <label>제목: </label>
            <label>
              <input
                type="text"
                name="brdTitle"
                value={brdTitle}
                defaultValue={boards.brdTitle}
                onChange={onChange}
              />
            </label>
          </div>
          <div>
            <label>내용: </label>
            <div>
              <textarea
                rows="55"
                cols="250"
                name="brdContent"
                value={brdContent}
                defaultValue={boards.brdContent}
                onChange={onChange}
              />
            </div>
          </div>
          <div>
            <button onClick={blogUpdate}>수정완료</button>
          </div>
        </>
      ) : (
        `잘못된 접근입니다.`
      )}
    </>
  )
}

export default BlogPostUpdate
