import React, { useCallback, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import axios from "axios"

const Login = () => {
  const history = useHistory()
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: ""
  })

  const { username, password } = userLogin
  const onChange = useCallback(e => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
  })

  const loginUser = e => {
    e.preventDefault()
    axios({
      url: "http://localhost:8080/usr/signin",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT fefege.."
      },
      data: userLogin
    })
      .then(res => {
        if (res.data.token) {
          localStorage.setItem("user", JSON.stringify(res.data.user))
          localStorage.setItem("token", res.data.token.accessToken)
          alert("로그인 성공! 환영합니다!")
          history.push("/")
        } else {
          alert("로그인 정보가 없습니다! 같은 현상이 반복될 경우 관리자에게 문의하세요.")
        }
      })
      .catch(err => {
        alert(`로그인에 실패하였습니다. 다시 시도해주세요. (${err})`)
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
        <div className="button-box">
          <div className="login-toggle-btn">
            <input type="checkbox" />
            <label className="ml-10">Remember me</label>
            <Link to={process.env.PUBLIC_URL + "/"}>Forgot Password ?</Link>
          </div>
          <button type="submit" onClick={loginUser}>
            <span>Login</span>
          </button>
        </div>
      </form>
    </>
  )
}

export default Login
