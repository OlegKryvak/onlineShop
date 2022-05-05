/** @format */

import { useDispatch } from "react-redux";
import { itemsActions } from "../../app/store";
import styles from "./InputCounter.module.css";
const InputCounter = ({ item }) => {
	const dispatch = useDispatch();

	const addProductHandler = () => {
		if (item.amount >= item.rating.count) {
			return;
		}

		dispatch(itemsActions.changeCountValueAdd({ item }));
	};
	const minusProductHandler = () => {
		if (item.amount <= 0) {
			return;
		}
		dispatch(itemsActions.changeCountValueMinus({ item }));
	};

	return (
		<div className={styles.container}>
			<button onClick={minusProductHandler}>-</button>
			<span>{item.amount}</span>
			<button onClick={addProductHandler}>+</button>
		</div>
	);
};

export default InputCounter;
