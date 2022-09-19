import { useEffect, useState } from "react";
import "../style/table.css";
import THead from "./THead";
import { getSorter } from "../utils/sorter";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Delete from "./Delete";

function EmployeesTable(props) {
	const rowsPerPage = props.rowsPerPage;
	const employeesList = JSON.parse(localStorage.getItem("employees"));
	const employees = employeesList
		? employeesList.map((employee) => {
				return {
					id: employee.id,
					firstName:
						employee.firstName.charAt(0).toUpperCase() +
						employee.firstName.slice(1).toLowerCase(),
					lastName:
						employee.lastName.charAt(0).toUpperCase() +
						employee.lastName.slice(1).toLowerCase(),
					birthdate: employee.birthDate,
					department: employee.department,
					startDate: employee.startDate,
					street: employee.street,
					city:
						employee.city.charAt(0).toUpperCase() +
						employee.city.slice(1).toLowerCase(),
					state: employee.state,
					zipCode: employee.zipCode,
				};
		  })
		: [];

	const [order, setOrder] = useState("asc");
	const [orderBy, setOrderBy] = useState("firstName");
	const [page, setPage] = useState(0);
	const [filteredEmployees, setFilteredEmployees] = useState(employees);
	const [rows, setRows] = useState(employees);

	const sortEmployees = (event, property) => {
		setOrder(order === "asc" ? "desc" : "asc");
		setOrderBy(property);
	};

	useEffect(() => {
		if (!props.searchData) {
			setFilteredEmployees(employees);
		} else {
			setFilteredEmployees(
				employees.filter((employee) => {
					return (
						employee.firstName
							.toLowerCase()
							.includes(props.searchData.toLowerCase()) ||
						employee.lastName
							.toLowerCase()
							.includes(props.searchData.toLowerCase()) ||
						employee.department
							.toLowerCase()
							.includes(props.searchData.toLowerCase())
					);
				})
			);
		}
		console.log(filteredEmployees);
	}, [props.searchData]);

	useEffect(() => {
		setRows(filteredEmployees);
	}, [filteredEmployees]);

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
					<TableBody sx={{ borderTop: "2px solid black" }}>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.sort(getSorter(order, orderBy))
							.map((row, index) => {
								return (
									<TableRow hover tabIndex={-1} key={index}>
										<TableCell component="th" scope="row">
											{row.firstName}
										</TableCell>
										<TableCell>{row.lastName}</TableCell>
										<TableCell>{row.birthdate}</TableCell>
										<TableCell>{row.department}</TableCell>
										<TableCell>{row.startDate}</TableCell>
										<TableCell>{row.street}</TableCell>
										<TableCell>{row.city}</TableCell>
										<TableCell>{row.state}</TableCell>
										<TableCell>{row.zipCode}</TableCell>
										<TableCell>
											<Delete id={row.id} />
										</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[]}
				component="div"
				count={employees.length}
				rowsPerPage={rowsPerPage}
				page={page}
				showLastButton={true}
				showFirstButton={true}
				onPageChange={(event, newPage) => setPage(newPage)}
				onRowsPerPageChange={(event) => {
					props.setRowsPerPage(parseInt(event.target.value, 10));
					setPage(0);
				}}
			/>
		</div>
	);
}

export default EmployeesTable;
