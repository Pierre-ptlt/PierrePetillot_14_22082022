import { useEffect, useState } from "react";
import "../style/table.css";
import THead from "./THead";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

function EmployeesTable() {
	const employeesList = JSON.parse(localStorage.getItem("employees"));
	const employees = employeesList.map((employee) => {
		return {
			firstName: employee.firstName,
			lastName: employee.lastName,
			birthdate: employee.birthDate,
			department: employee.department,
			startDate: employee.startDate,
			street: employee.street,
			city: employee.city,
			state: employee.state,
			zipCode: employee.zipCode,
		};
	});
	const [order, setOrder] = useState("asc");
	const [orderBy, setOrderBy] = useState("firstName");
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const sortEmployees = (event, property) => {
		setOrder(order === "asc" ? "desc" : "asc");
		setOrderBy(property);
	};

	return (
		<div>
			<TableContainer>
				<table>
					<THead
						order={order}
						orderBy={orderBy}
						onRequestSort={sortEmployees}
						rowCount={employees.length}
					/>
					<tbody></tbody>
				</table>
			</TableContainer>
		</div>
	);
}

export default EmployeesTable;
