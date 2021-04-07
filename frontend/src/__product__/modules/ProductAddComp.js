import React, { useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"

const ProductAddComp = () => {
  const [ctgName, setCtgName] = useState('')
  const [prdName, setPrdName] = useState('')
  const [prdImg, setPrdImg] = useState('')
  const [prdPrice, setPrdPrice] = useState('')
  const [prdInv, setPrdInv] = useState('')

  const { register } = useForm()

  const add = e => {
    e.preventDefault()
    axios({
      url: 'http://localhost:8080/products/save',
      method: 'post',
      headers: {
        'Content-Type'  : 'application/json',
        'Authorization' : 'JWT fefege..'
      },
      data: { ctgName, prdName, prdPrice, prdInv, prdImg }
    })
    .then((res) => {
        console.log(`제품 등록 성공`)
        window.location.reload(false)
    })
    .catch((err) => {
          console.log(`제품 등록 실패: ` + err)
          throw err
    })
  }

  return (<>
    <div className="add-prd">
      <div className="input-new-prd">
        <form>
          <div className="shop-select">
            <h5>제품군: 
              <select
                ref={register}
                name="ctgName"
                onChange={e => {setCtgName(`${e.target.value}`)}}
              >
                <option value="living">living</option>
                <option value="bathroom">bathroom</option>
                <option value="kitchen">kitchen</option>
                <option value="stationary">stationary</option>
              </select>
            </h5>
          </div>
          <div>
            <h5>제품명: 
              <input
               type="text"
               id="prdName"
               placeholder="상품명을 입력하세요"
               onChange={e => {setPrdName(`${e.target.value}`)}}
              />
            </h5>
          </div>
          <div>
            <h5>판매가격: 
              <input
                type="text"
                id="prdPrice"
                placeholder="판매가격을 입력하세요"
                onChange={e => {setPrdPrice(`${e.target.value}`)}}
              />
            </h5>
          </div>
          <div>
              <h5>재고수량: 
                <input
                  type="text"
                  id="prdInv"
                  placeholder="재고수량을 입력하세요"
                  onChange={e => {setPrdInv(`${e.target.value}`)}}
                />
              </h5>
          </div>
          <div>
              <h5>제품이미지:
                <input
                  ref={register}
                  type="file"
                  name="prdImg"
                  onChange={e => {setPrdImg(`${e.target.value}`)}}
                />
              </h5>
          </div>
        </form>
        <button type="submit" onClick={add}>등록</button>
      </div>
    </div>
  </>)
}

export default ProductAddComp