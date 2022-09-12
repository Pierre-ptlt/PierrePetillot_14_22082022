import { Link } from "react-router-dom";
import "../style/employees.css";
import Dropdown from "pierre-ptlt-dropdown";
import EmployeesTable from "../components/EmployeesTable";

function EmployeesList() {
	return (
		<div className="employees-list-wrapper">
			<h1 className="employees-list-title">Current Employees</h1>
			<div className="tools-wrapper">
				<div className="show-wrapper">
					Show{" "}
					<Dropdown
						className="show-dropdown"
						id="show"
						data={["10", "25", "50", "100"]}
					/>{" "}
					entries
				</div>
				<div className="search-wrapper">
					Search: <input className="search-bar" type="text" />
				</div>
			</div>
			<div className="table-wrapper">
				<EmployeesTable />
			</div>
		</div>
	);
}

export default EmployeesList;
