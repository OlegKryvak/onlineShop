/** @format */

import styles from "./OrderConfirmation.module.css";

const OrderConfirmationBackground = ({ setShowOrderConfirmation }) => {
	return <div className={styles.containerBackground} onClick={() => setShowOrderConfirmation(false)} />;
};

export default OrderConfirmationBackground;
