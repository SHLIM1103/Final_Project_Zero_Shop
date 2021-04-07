import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import axios from "axios"

const ProductEditComp = ({ product }) => {
  const history = useHistory()
  const { register } = useForm()

  const [ctgName, setCtgName] = useState('')
  const [prdName, setPrdName] = useState('')
  const [prdImg, setPrdImg] = useState('')
  const [prdPrice, setPrdPrice] = useState('')
  const [prdInv, setPrdInv] = useState('')

  const edit = e => {
    e.preventDefault()
    alert(product.prdNo)
    axios({
        url: `http://localhost:8080/products/edit/` + product.prdNo,
        method: 'put',
        headers: {
          'Content-Type'  : 'application/json',
          'Authorization' : 'JWT fefege..'
        },
        data: { 
          prdNo: product.prdNo,
          ctgName, prdName, prdPrice, prdInv, prdImg
        }
      })
    .then(res => {
      console.log(product.prdNo + `번 제품 정보 수정 성공`)
      history.push(`/product-detail/` + product.prdNo)
      })
    .catch(err => {
      console.log(`제품 정보 수정 실패: ` + err)
      throw err
    })
  }

  return (<>
    <div className="add-prd">
      <div className="input-new-prd">
        <form>
              <div className="shop-select">
                <h5>제품군: 
                  <select ref={register} name="ctgName" defaultValue={product.ctgName} onChange={e => {setCtgName(`${e.target.value}`)}}>
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
                name="prdName"
                defaultValue={product.prdName}
                onChange={e => setPrdName(e.target.value)}
              />
            </h5>
          </div>
          <div>
            <h5>판매가격: 
              <input
                type="text"
                name="prdPrice"
                defaultValue={product.prdPrice}
                onChange={e => {setPrdPrice(`${e.target.value}`)}}
              />
            </h5>
          </div>
          <div>
            <h5>재고수량: 
              <input
                type="text"
                name="prdInv"
                defaultValue={product.prdInv}
                onChange={e => {setPrdInv(`${e.target.value}`)}}
              />
            </h5>
          </div>
          <div>
            <h5>제품이미지: 
              <input
                ref={register}
                defaultValue={product.prdImg}
                type="file"
                multiple="multiple"
                name="prdImg"
                onChange={e => {setPrdImg(`${e.target.value}`)}}
              />
            </h5>
          </div>
        </form>
        <button type="submit" onClick={edit}>수정완료</button>
      </div>
    </div>
  </>)
}

export default ProductEditComp