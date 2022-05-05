/** @format */

import { useState } from "react";
import { useDispatch } from "react-redux";
import { itemsActions } from "../../../app/store";
import styles from "./BasketItem.module.css";
import deleteIcon from "../../../assets/icons/deleteIcon.png";
import editIcon from "../../../assets/icons/edit.png";

const BasketItem = ({ item }) => {
	const dispatch = useDispatch();
	const [edit, setEdit] = useState(false);
	const [comment, setComment] = useState(false);
	let { image, title, price, amount, altText, rating } = item;
	const [editedAmount, setEditedAmount] = useState(amount);

	const deleteProductHandler = (item) => {
		dispatch(itemsActions.deleteItemFromBasket({ item }));
	};

	const editHandler = () => {
		setComment(false);
		setEdit(true);
	};

	const inputChangeHandler = (event) => {
		setEditedAmount(+event.target.value);
	};

	const saveHandler = (item) => {
		let differenceOfAmount;
		if (editedAmount > rating.count) {
			setComment(true);
			setEdit(false);
			return;
		}
		if (editedAmount === amount) {
			setEdit(false);
			return;
		}
		if (editedAmount < amount) {
			differenceOfAmount = editedAmount - amount;
		} else {
			differenceOfAmount = Math.abs(amount - editedAmount);
		}
		if (editedAmount === 0) {
			differenceOfAmount = 0;
		}
		if (!editedAmount) {
			dispatch(itemsActions.deleteItemFromBasket({ item }));
		}
		dispatch(itemsActions.saveBasketItemAfterEdit({ item, newAmount: editedAmount, differenceOfAmount }));
		setEdit(false);
	};

	return (
		<div className={styles.container}>
			<div>
				<img src={image} alt={altText} className={styles.productImage} />
				<div>
					<h1>Name: {title}</h1>
					<h1>Price: {price} $</h1>
					<div className={styles.amountContainer}>
						<h1>Amount: {edit ? <input className={styles.basketInput} type='number' defaultValue={amount} onChange={inputChangeHandler} min={0} max={rating.count} /> : amount}</h1>{" "}
						{!edit ? (
							<button onClick={editHandler} className={styles.editButton}>
								{" "}
								<img src={editIcon} alt='edit' />
							</button>
						) : (
							<button className={styles.saveButton} onClick={() => saveHandler(item)}>
								Save
							</button>
						)}
					</div>
					{comment && <p>Sorry, we don't have an amount which you entered :{")"}</p>}
				</div>
			</div>
			<div className={styles.buttons}>
				<button onClick={() => deleteProductHandler(item)}>
					<img src={deleteIcon} alt='deleteIcon' />
				</button>
			</div>
		</div>
	);
};

export default BasketItem;
