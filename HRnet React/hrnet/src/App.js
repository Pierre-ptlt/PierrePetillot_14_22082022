import "./style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import EmployeesList from "./views/EmployeesList";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/list" element={<EmployeesList />} />
			</Routes>
		</Router>
	);
}

export default App;
