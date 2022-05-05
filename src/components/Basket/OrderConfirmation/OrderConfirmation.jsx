/** @format */

import styles from "./OrderConfirmation.module.css";

const OrderConfirmation = ({ setIsOrderConfirmed, setShowOrderConfirmation }) => {
	return (
		<div className={styles.container}>
			<h1>Are you sure?</h1>
			<div className={styles.buttons}>
				<button onClick={() => setIsOrderConfirmed(true)}>Yes</button>
				<button
					onClick={() => {
						setIsOrderConfirmed(false);
						setShowOrderConfirmation(false);
					}}>
					No
				</button>
			</div>
		</div>
	);
};

export default OrderConfirmation;
