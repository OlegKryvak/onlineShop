/** @format */
import { useState } from "react";
import Select from "react-select";
import styles from "./Form.module.css";

const Form = () => {
	const [typeOfSelect, setTypeOfSelect] = useState("mobile number");
	const contacts = [
		{ value: "mobile number", label: "mobile number" },
		{ value: "email", label: "email" },
	];
	const contactInputHandler = (event) => {
		setTypeOfSelect(event.value);
	};
	return (
		<form className={styles.container}>
			<div>
				<label htmlFor='name'>Name</label>
				<input type='text' placeholder='Name' id='name' />
			</div>
			<div>
				<label htmlFor='surname'>Surname</label>
				<input type='text' placeholder='Surname' id='surname' />
			</div>
			<div>
				<Select className={styles.select} onChange={contactInputHandler} value={typeOfSelect} placeholder={typeOfSelect} options={contacts} />
				<input type='tel' placeholder='number' maxLength='10' id='surname' />
			</div>
		</form>
	);
};

export default Form;
