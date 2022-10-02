import { Link } from "react-router-dom";
import NameField from "../components/NameField";
import DateField from "../components/DateField";
import { useState } from "react";
import "../style/home.css";
import "../style/modal.css";
import statesList from "../data/States.js";
import Dropdown from "pierre-ptlt-dropdown";
import departments from "../data/Departments";
import { AiFillCloseCircle } from "react-icons/ai";
const employees = JSON.parse(localStorage.getItem("employees")) || [];

function Home() {
	const states = statesList.map((state) => state.name);
	const [isOpen, setIsOpen] = useState(false);

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
		setIsOpen(true);
	};

	return (
		<div className="home-wrapper">
			{isOpen && <div className="modal-blur"></div>}
			<h1 className="home-title">HRnet</h1>
			<Link className="home-link" to="/list">
				View current employees
			</Link>
			<h2 className="home-subtitle">Create employee</h2>
			<form onSubmit={handleSubmit} className="home-fields">
				<span id="test" className="home-form-fields-wrapper">
					<div className="home-first-fields">
					<div className="home-identity-fields">
						<NameField type="First" />
						<NameField type="Last" />
					</div>
					<div className="home-date-fields">
						<DateField type="birth" />
						<DateField type="start" />
					</div>
					</div>
					<div className="adresse">
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
					</div>
				</span>
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
				<button type="submit" className="home-submit">
					Save
				</button>
			</form>
			{isOpen && (
				<div className="home-modal">
					<p className="modal-content">Employee created!</p>
					<div className="modal-close">
						<AiFillCloseCircle
							className="modal-close-icon"
							onClick={() => setIsOpen(false)}
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default Home;
