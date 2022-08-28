import { Link } from "react-router-dom";
import NameField from "../components/NameField";
import DateField from "../components/DateField";
import "../style/home.css";

function Home() {
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
		const employees = JSON.parse(localStorage.getItem("employees")) || [];
		const employee = {
			firstName: firstName,
			lastName: lastName,
			birthDate: birthDate,
			startDate: startDate,
			street: street,
			city: city,
			state: state,
			zipCode: zipCode,
		};
		console.log(employee);
		employees.push(employee);
		console.log(employees);
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
					<label htmlFor="street">Street</label>
					<input id="street" type="text" />

					<label htmlFor="city">City</label>
					<input id="city" type="text" />

					<label htmlFor="state">State</label>
					<select name="state" id="state"></select>

					<label htmlFor="zipCode">Zip Code</label>
					<input id="zipCode" type="number" />
				</fieldset>
				<button onClick={handleSubmit} type="submit" className="home-submit">
					Save
				</button>
			</form>
		</div>
	);
}

export default Home;