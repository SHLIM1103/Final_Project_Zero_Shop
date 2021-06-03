import React, { useCallback, useState } from "react"
import { useHistory } from "react-router"
import axios from "axios"

const RegisterComp = () => {
  const history = useHistory()
  const [userRegister, setUserRegister] = useState({
    username: "",
    password: "",
    usrName: "",
    usrEmail: ""
  })

  const { username, password, usrName, usrEmail } = userRegister
  const onChange = useCallback(e => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value })
  })

  const registerUser = e => {
    e.preventDefault()
    axios({
      url: "http://localhost:8080/usr/signup",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT fefege.."
      },
      data: userRegister
    })
      .then(res => {
        alert(`${usrName} 님 회원가입을 환영합니다! 로그인해주세요.`)
        history.go()
      })
      .catch(err => {
        alert(`회원가입에 실패하였습니다. 다시 시도해주세요. (${err})`)
        throw err
      })
  }

  return (
    <>
      <form>
        <h5>ID</h5>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="ID를 입력하세요"
          onChange={onChange}
        />
        <h5>PASSWORD</h5>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="비밀번호를 입력하세요"
          onChange={onChange}
        />
        <h5>E-MAIL</h5>
        <input
          type="email"
          name="usrEmail"
          value={usrEmail}
          placeholder="이메일 주소를 입력하세요"
          onChange={onChange}
        />
        <h5>NAME</h5>
        <input
          type="text"
          name="usrName"
          value={usrName}
          placeholder="이름을 입력하세요"
          onChange={onChange}
        />
        <div className="button-box">
          <button type="submit" onClick={registerUser}>
            <span>Register</span>
          </button>
        </div>
      </form>
    </>
  )
}

export default RegisterComp
