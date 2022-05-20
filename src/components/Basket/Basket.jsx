/** @format */

import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Basket.module.css";
import BasketItem from "./BasketItem/BasketItem";
import OrderConfirmation from "./OrderConfirmation/OrderConfirmation";
import OrderConfirmationBackground from "./OrderConfirmation/OrderConfirmationBackground";

const Basket = ({ closeBasket }) => {
	const history = useNavigate();
	const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
	const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
	const itemsInBasket = useSelector((state) => state.itemsInBasket);
	const totalAmount = useSelector((state) => state.totalAmount);

	const showOrderConfirmationHandler = () => {
		setShowOrderConfirmation(true);
	};

	const makeOrderHandler = () => {
		// dispatch(itemsActions.makeOrder());
		history("/order");
		closeBasket();
	};
	if (isOrderConfirmed) {
		makeOrderHandler();
	}
	return (
		<div className={itemsInBasket.length !== 0 ? styles.container : styles.containerEmpty}>
			{showOrderConfirmation && (
				<>
					<OrderConfirmation setIsOrderConfirmed={setIsOrderConfirmed} setShowOrderConfirmation={setShowOrderConfirmation} />
					<OrderConfirmationBackground setShowOrderConfirmation={setShowOrderConfirmation} />
				</>
			)}
			{itemsInBasket.length === 0 && <p>There are no selected products</p>}
			{totalAmount !== 0 && itemsInBasket.length !== 0 && (
				<div style={{ display: "flex", alignItems: "center" }}>
					<span>Total: {totalAmount.toFixed(2)} $</span>
					<button onClick={showOrderConfirmationHandler}>Make order</button>
				</div>
			)}
			{itemsInBasket.length !== 0 &&
				itemsInBasket.map((item) => {
					return <BasketItem key={item.id} item={item} />;
				})}
		</div>
	);
};

export default Basket;
