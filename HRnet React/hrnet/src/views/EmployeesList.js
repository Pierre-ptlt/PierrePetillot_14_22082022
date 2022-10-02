import { Link } from "react-router-dom";
import "../style/employees.css";
import { useState } from "react";
import EmployeesTable from "../components/EmployeesTable";

function EmployeesList() {
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [research, setResearch] = useState("");

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
	};

	return (
		<div className="employees-list-wrapper">
			<h1 className="employees-list-title">Current Employees</h1>
			<div className="tools-wrapper">
				<div className="show-wrapper">
					Show{" "}
					<select className="show-dropdown" onChange={handleChangeRowsPerPage}>
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
						<option value="100">100</option>
					</select>
					entries
				</div>
				<div className="search-wrapper">
					Search:{" "}
					<input
						className="search-bar"
						type="text"
						onChange={(e) => {
							setResearch(e.target.value);
						}}
					/>
				</div>
			</div>
			<div className="table-wrapper">
				<EmployeesTable rowsPerPage={rowsPerPage} searchData={research} />
			</div>
			<Link to="/">Home</Link>
		</div>
	);
}

export default EmployeesList;
