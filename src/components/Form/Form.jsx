import { useState } from 'react';
import data from './../../data'
import { serverPath } from '../../helpers/variables';

const Form = () => { 

	// Генерирую случайную заявку из массива заявок
	let randomRequest = Math.floor(Math.random() * data.length)
	const testData = data[randomRequest]

	// Создаю состояния для изменяющихся элементов данного компонента
	const [name, setName] = useState(testData.name)
	const [phone, setPhone] = useState(testData.phone)
	const [email, setEmail] = useState(testData.email)
	const [product, setProduct] = useState(testData.product)
	const [statusbar] = useState(testData.statusbar)

	// Функция для отправки формы
	const submitForm = (e) => {
		e.preventDefault()
		const request = {name,phone,email,product,statusbar, date: new Date()}
		// Отправляю полученные данные на сервер
		fetch( serverPath + 'requests', {
			method: "POST",
			headers: {"Content-Type" : "application/json"},
			body: JSON.stringify(request)
		}).then(()=>{
			let randomRequest = Math.floor(Math.random() * data.length);
      const testData = data[randomRequest];
			setName(testData.name)
			setPhone(testData.phone)
			setEmail(testData.email)
			setProduct(testData.product)
		})
	}


  return (
      <div className="white-plate white-plate--payment flex-center ">
        <div className="container-fluid">
          <div className="white-plate__header text-center">
            <p className="white-plate__logo">
              <span>Форма</span> заявок
            </p>
          </div>
          <div className="white-plate__line-between white-plate__line-between--main"></div>
          <form id="form" method="POST" action="" onSubmit={submitForm}>
            <label>Ваши данные:</label>
            <div className="form-group">
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="on"
                className="form-control"
                placeholder="Имя и Фамилия"
                required
								value={name}
								onChange={(e)=>{setName(e.target.value)}}
              />
            </div>
            <div className="form-group">
              <input
                id="phone"
                type="text"
                name="phone"
                autoComplete="on"
                className="form-control"
                placeholder="Телефон"
								value={phone}
								onChange={(e)=>{setPhone(e.target.value)}}
              />
            </div>
            <div className="form-group">
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="on"
                className="form-control"
                placeholder="Email"
                required
								value={email}
								onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Продукт:</label>
              <select id="product" name="product" className="form-control" value={product} onChange={(e)=>{setProduct(e.target.value)}}>
                <option value="course-html">Курс по верстке</option>
                <option value="course-js">Курс по JavaScript</option>
                <option value="course-vue">Курс по VUE JS</option>
                <option value="course-php">Курс по PHP</option>
                <option value="course-wordpress">Курс по WordPress</option>
              </select>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-lg btn-primary btn-block">
                Оформить заявку
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Form;
