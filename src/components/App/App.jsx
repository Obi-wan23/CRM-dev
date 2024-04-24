
import "./_reset.scss";
import "./_base.scss";
import "./../../styles/bootstrap.min.css"
import "./../../styles/main.css"


import Nav from "../Nav/Nav";
import Form from "../Form/Form";
import Requests from "../Requests/Requests";
import Edit from "../Edit/Edit";



import { HashRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div className="with-nav flex-center">
			<Nav/>
        <Routes>
					<Route path="/" element={<Form/>}/>
					<Route path="/table" element={<Requests/>}/>
					<Route path="/edit/:id" element={<Edit/>}/>
				</Routes>
      </div>
    </Router>
  );
};

export default App;
