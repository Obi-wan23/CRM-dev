import { useEffect, useState } from "react";
import Request from "./Request";
import { serverPath } from "../../helpers/variables";
import TopFilters from "../TopFilters/TopFilters";
import LeftBar from "../LeftBar/LeftBar";

const Requests = () => {
	
	const [request, setRequests] = useState(null)
	const [status,setStatus] = useState(localStorage.getItem('status') ? JSON.parse(localStorage.getItem('status')) :'all')
	const [products,setProducts] = useState(localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) :'all')
	const [count,setCount] = useState(0)


	useEffect(()=> {
		fetch( serverPath + `requests?${status === 'all' ? '' : `statusbar=${status}&`
	}${products === 'all' ? '' : `product=${products}`}`).then((res)=>{
			return res.json()
		}).then((data)=>{
			setRequests(data)
			localStorage.setItem('status', JSON.stringify(status))
			localStorage.setItem('products', JSON.stringify(products))
		})
		
	},[status, products])

	useEffect(() => {

		if(localStorage.getItem("status")) {
			setStatus(JSON.parse(localStorage.getItem("status")))
		}

		if(localStorage.getItem("products")) {
			setProducts(JSON.parse(localStorage.getItem("products")))
		}
	},[])


	useEffect(()=>{
		fetch( serverPath + "requests?statusbar=new").then((res)=>{
			return res.json()
		}).then((data)=>{
			setCount(data)
		})
	},[])




  return (
    <div>
      <LeftBar status={status} setStatus={setStatus} count={count}/>
			<div className="main-wrapper">
			<div className="container-fluid">
				<div className="admin-heading-1">Все заявки</div>

				<TopFilters setProducts={setProducts} products={products} status={status} setStatus={setStatus}/>
				<table className="table fs-14">
					<thead>
						<tr>
							<th>ID</th>
							<th>дата</th>
							<th>продукт</th>
							<th>имя</th>
							<th>email</th>
							<th>телефон</th>
							<th>статус</th>
							<th></th>
						</tr>
					</thead>
					<tbody id="tbody">
						{request && <Request request={request}/>}
					</tbody>
				</table>
			</div>
		</div>
    </div>
  );
};

export default Requests;
