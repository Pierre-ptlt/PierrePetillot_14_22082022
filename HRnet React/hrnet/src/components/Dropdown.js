import "./dropdown.css";

function Dropdown(props) {
	const options = props.data.map((item) => {
		return (
			<option key={item} value={item}>
				{item}
			</option>
		);
	});

	return (
		<select className="dropdown" name={props.name} id={props.id}>
			{options}
		</select>
	);
}

export default Dropdown;
