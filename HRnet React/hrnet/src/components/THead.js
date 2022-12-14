import "../style/table.css";
import TableHead from "@mui/material/TableHead";
import { visuallyHidden } from "@mui/utils";
import TableSortLabel from "@mui/material/TableSortLabel";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import { FaSortUp } from "react-icons/fa";

const cells = [
	{
		id: "firstName",
		label: "First Name",
	},
	{
		id: "lastName",
		label: "Last Name",
	},
	{
		id: "birthdate",
		label: "Date of Birth",
	},
	{
		id: "department",
		label: "Department",
	},
	{
		id: "startDate",
		label: "Start Date",
	},
	{
		id: "street",
		label: "Street",
	},
	{
		id: "city",
		label: "City",
	},
	{
		id: "state",
		label: "State",
	},
	{
		id: "zipCode",
		label: "zipCode",
	},
	{
		id: "delete",
		label: "Delete",
	},
];

function THead(props) {
	const order = props.order;
	const orderBy = props.orderBy;
	const onRequestSort = props.onRequestSort;

	const handleSort = (cell) => (event) => {
		onRequestSort(event, cell);
	};

	return (
		<TableHead>
			<TableRow>
				{cells.map((headCell) => (
					<TableCell
						className="table-header-cell"
						key={headCell.id}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							onClick={handleSort(headCell.id)}
							hideSortIcon={false}
							IconComponent={FaSortUp}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component="span" sx={visuallyHidden}>
									{order === "asc" ? "sorted asccending" : "sorted descending"}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

export default THead;
