import "../style/field.css";

function NameField(props) {
	return (
		<div className="field-wrapper">
			<label htmlFor={props.type} className="nameField-label">
				{props.type} Name
			</label>
			<input id={props.type} className="nameField-input" type="text" />
		</div>
	);
}

export default NameField;
