import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import "../style/table.css";

function Delete(props) {
	const handleDelete = () => {
		let employees = JSON.parse(localStorage.getItem("employees"));
		employees.forEach((employee) => {
			if (employee.id === props.id) {
				const index = employees.indexOf(employee);
				employees.splice(index, 1);
				localStorage.clear();
				localStorage.setItem("employees", JSON.stringify(employees));
				window.location.reload();
			}
		});
		console.log(localStorage.getItem("employees"));
	};

	return (
		<div className="delete-wrapper">
			<AiFillDelete className="delete-icon" onClick={handleDelete} />
		</div>
	);
}

export default Delete;
