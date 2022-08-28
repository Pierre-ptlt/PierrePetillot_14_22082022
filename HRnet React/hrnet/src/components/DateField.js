import "../style/field.css";

function DateField(props) {
	const content = props.type === "birth" ? "Date of birth" : "Start date";
	const id = props.type === "birth" ? "birth" : "start";

	return (
		<div className="field-wrapper">
			<label htmlFor={id} className="dateField-label">
				{content}
			</label>
			<input id={id} type="date" className="dateField-input" />
		</div>
	);
}

export default DateField;
