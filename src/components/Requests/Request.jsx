import { Link } from "react-router-dom";



const Request = ({request}) => {


	const products = {
		"course-html": "Курс по верстке",
		"course-js": "Курс по JavaScript",
		"course-vue": "Курс по Vue JS",
		"course-php": "Курс по PHP",
		"course-wordpress": "Курс по WordPress",
	};

	const statuses = {
		new: "Новая",
		inwork: "В работе",
		complete: "Выполнено",
	};

	const badges = {
    new: "badge-danger",
    inwork: "badge-warning",
    complete: "badge-success",
  };
	
  return (
    <>
			{request.map((request,postID) => (
				      <tr key={request.id}>
							<th scope="row">{postID}</th>
							<td>{new Date(request.date).toLocaleDateString()}</td>
							<td>{products[request.product]}</td>
							<td>{request.name}</td>
							<td>{request.email}</td>
							<td>{request.phone}</td>
							<td>
								<div className={`badge badge-pill ${badges[request.statusbar]}`}>{statuses[request.statusbar]}</div>
							</td>
							<td>
								<Link to={`/edit/${request.id}`}>
									Редактировать
								</Link>
							</td>
						</tr>
			))}
    </>
  );
};

export default Request;
