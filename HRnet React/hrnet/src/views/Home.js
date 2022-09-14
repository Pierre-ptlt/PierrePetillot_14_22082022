import { Link } from "react-router-dom";
import NameField from "../components/NameField";
import DateField from "../components/DateField";
import { useState } from "react";
import "../style/home.css";
import statesList from "../data/States.js";
import Dropdown from "pierre-ptlt-dropdown";
import departments from "../data/Departments";
import closeModal from "../assets/images/closeModal.png";

function Home() {
	const states = statesList.map((state) => state.name);
	const [showModal, setShowModal] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const firstName = window.First.value;
		const lastName = window.Last.value;
		const birthDate = window.birth.value;
		const startDate = window.start.value;
		const street = window.street.value;
		const city = window.city.value;
		const state = window.state.value;
		const zipCode = window.zipCode.value;
		const department = window.department.value;
		const employees = JSON.parse(localStorage.getItem("employees")) || [];
		const employee = {
			id: employees.length + 1,
			firstName: firstName,
			lastName: lastName,
			birthDate: birthDate,
			startDate: startDate,
			street: street,
			city: city,
			state: state,
			zipCode: zipCode,
			department: department,
		};
		employees.push(employee);
		localStorage.setItem("employees", JSON.stringify(employees));
	};

	return (
		<div className="home-wrapper">
			<h1 className="home-title">HRnet</h1>
			<Link className="home-link" to="/list">
				View current employees
			</Link>
			<h2 className="home-subtitle">Create employee</h2>
			<form className="home-fields">
				<div className="home-identity-fields">
					<NameField type="First" />
					<NameField type="Last" />
				</div>
				<div className="home-date-fields">
					<DateField type="birth" />
					<DateField type="start" />
				</div>
				<fieldset className="adresse">
					<legend>Adresse</legend>
					<label className="fieldset-item" htmlFor="street">
						Street
					</label>
					<input className="fieldset-input" id="street" type="text" />

					<label className="fieldset-item" htmlFor="city">
						City
					</label>
					<input className="fieldset-input" id="city" type="text" />

					<label className="fieldset-item" htmlFor="state">
						State
					</label>
					<Dropdown
						className="fieldset-input"
						name="state"
						id="state"
						data={states}
					/>

					<label className="fieldset-item" htmlFor="zipCode">
						Zip Code
					</label>
					<input className="fieldset-input" id="zipCode" type="number" />
				</fieldset>
				<div className="department-wrapper">
					<label className="fieldset-item" htmlFor="department">
						Department
					</label>
					<Dropdown
						className="department-dropdown"
						name="department"
						id="department"
						data={departments}
					/>
				</div>
				<button onClick={handleSubmit} type="submit" className="home-submit">
					Save
				</button>
			</form>
			{showModal && (
				<div className="home-modal">
					<div className="modal-wrapper">
						<p className="modal-content">Employee created!</p>
						<div className="modal-close" onClick={setShowModal(false)}>
							{closeModal}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Home;
