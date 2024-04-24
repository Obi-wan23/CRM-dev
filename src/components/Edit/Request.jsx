import { useState } from "react"
import {useNavigate } from "react-router-dom"

import { serverPath } from "../../helpers/variables"


const Request = ({request}) => {

	const [name, setName] = useState(request.name)
	const [phone, setPhone] = useState(request.phone)
	const [email, setEmail] = useState(request.email)
	const [product, setProduct] = useState(request.product)
	const [statusbar, setStatusbar] = useState(request.statusbar)

	
	const navigate = useNavigate()

	const updateForm = (e) => {
		e.preventDefault()
		const editedRequest = {name,phone,email,product,statusbar}
		fetch(serverPath +`requests/${request.id}`, {
			method: "PATCH",
			headers: {"Content-Type" : "application/json"},
			body: JSON.stringify(editedRequest)
		}).then(()=>{
			navigate("/table")
		})
	}

	const deleteRequest = (e) => {
		e.preventDefault()
		const editedRequest = {name,phone,email,product,statusbar}
		fetch(serverPath + `requests/${request.id}`, {
			method: "DELETE",
			headers: {"Content-Type" : "application/json"},
			body: JSON.stringify(editedRequest)
		}).then(()=>{
			navigate("/table")
		})
	}

	return ( 
		<form id="form" onSubmit={updateForm}>
              <div className="card mb-4">
                <div className="card-header">Данные о заявке</div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-2">
                      <strong>ID:</strong>
                    </div>
                    <div className="col">
                      Заявка №<span id="number">{request.id}</span>
                    </div>
                    <input name="id" type="hidden" id="id" />
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-2">
                      <strong>Дата создания:</strong>
                    </div>
                    <div className="col" id="date">
                      Дата
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-2">
                      <strong>Продукт:</strong>
                    </div>
                    <div className="col">
                      <select
                        id="product"
                        name="product"
                        className="custom-select"
												value={product} onChange={(e)=>{setProduct(e.target.value)}}
                      >
                        <option value="course-html">Курс по верстке</option>
                        <option value="course-js">Курс по JavaScript</option>
                        <option value="course-vue">Курс по VUE JS</option>
                        <option value="course-php">Курс по PHP</option>
                        <option value="course-wordpress">Курс по WordPress</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-2">
                      <strong>Имя:</strong>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
												value={name}
												onChange={(e)=>{setName(e.target.value)}}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-2">
                      <strong>Email:</strong>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        value={email}
												onChange={(e)=>{setEmail(e.target.value)}}
                        id="email"
                        name="email"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-2">
                      <strong>Телефон:</strong>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        value={phone}
												onChange={(e)=>{setPhone(e.target.value)}}
                        id="phone"
                        name="phone"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-2">
                      <strong>Статус заявки:</strong>
                    </div>
                    <div className="col">
                      <select
                        className="custom-select"
                        id="status"
                        name="status"
												value={statusbar}
												onChange={(e)=>{setStatusbar(e.target.value)}}
                      >
                        <option selected="">Выберите...</option>
                        <option value="new">Новая</option>
                        <option value="inwork">В работе</option>
                        <option value="complete">Завершена</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col text-right">
                  <button type="submit" className="btn btn-primary mr-2">Сохранить изменения</button>
									<button type="button" className="btn btn-danger" onClick={deleteRequest}>Удалить заявку</button>
                </div>
              </div>
            </form>
	 );
}
 
export default Request;