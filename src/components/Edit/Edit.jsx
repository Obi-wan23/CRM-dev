import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Request from "./Request";
import {serverPath} from '../../helpers/variables'

const Edit = () => {

	const { id } = useParams();

	const [request,setRequests] = useState(null)

	useEffect(()=>{
		fetch(serverPath + `requests/${id}`, {
		method: 'GET',
		headers: {"Content-Type" : "application/json"},
  	body: JSON.stringify()
	}).then((res)=>{
		return res.json()
	}).then((data)=>{
		setRequests(data)
	})
	},[])


  return (
    <div className="form-wrapper">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col">
            <div className="admin-heading-1">Работа с заявкой</div>
          </div>
          <div className="col text-right">
            <Link to="/table" className="btn btn-link">
              Вернуться назад
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {request && <Request request={request} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
