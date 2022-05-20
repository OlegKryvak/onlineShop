/** @format */
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { itemsActions } from "../../app/store";
import styles from "./Form.module.css";

const Form = () => {
	const nameRef = useRef();
	const dispatch = useDispatch();
	const history = useNavigate();
	const [typeOfSelect, setTypeOfSelect] = useState("mobile number");
	const [nameValue, setNameValue] = useState("");
	const [surnameValue, setSurnameValue] = useState("");
	const [mobileValue, setMobileValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [emailError, setEmailError] = useState(false);

	const contacts = [
		{ value: "mobile number", label: "mobile number" },
		{ value: "email", label: "email" },
	];

	useEffect(() => {
		nameRef.current.focus();
	}, []);
	const contactInputHandler = (event) => {
		setTypeOfSelect(event.value);
	};

	const emailValidator = (value) => {
		setEmailError(true);
		setEmailValue(value);

		if (value.length > 10 && value.includes("@")) {
			setEmailError(false);
		}
	};
	const itemsInBasket = useSelector((state) => state.itemsInBasket);
	const submitHandler = (event) => {
		event.preventDefault();
		const userData = {
			name: nameValue,
			surname: surnameValue,
			contact: mobileValue ? mobileValue : emailValue,
			orderedProducts: itemsInBasket.map((item) => {
				return {
					productId: item.id,
					name: item.title,
					price: item.price,
					amount: item.amount,
				};
			}),
		};
		setNameValue("");
		setSurnameValue("");
		setEmailValue("");
		setMobileValue("");
		dispatch(itemsActions.makeOrder());
		history("/order-completed");
		return userData;
	};
	return (
		<form className={styles.container} onSubmit={submitHandler}>
			<div>
				<label htmlFor='name'>Name</label>
				<input type='text' autoComplete='off' placeholder='Name' id='name' required ref={nameRef} value={nameValue} onChange={(val) => setNameValue(val.target.value)} />
			</div>
			<div>
				<label htmlFor='surname'>Surname</label>
				<input type='text' autoComplete='off' placeholder='Surname' id='surname' required value={surnameValue} onChange={(val) => setSurnameValue(val.target.value)} />
			</div>
			<div>
				<Select className={styles.select} onChange={contactInputHandler} value={typeOfSelect} placeholder={typeOfSelect} options={contacts} />
				{typeOfSelect === "mobile number" && (
					<input type='tel' autoComplete='off' placeholder='number' maxLength='10' id='number' required value={mobileValue} onChange={(val) => setMobileValue(val.target.value)} />
				)}
				{typeOfSelect === "email" && <input type='tel' autoComplete='off' placeholder='email' id='email' required value={emailValue} onChange={(val) => emailValidator(val.target.value)} />}
				{emailError && <p className={styles.errorMessage}>Please, write valid email</p>}
			</div>
			<button>Make order</button>
		</form>
	);
};

export default Form;
