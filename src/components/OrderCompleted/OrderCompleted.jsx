/** @format */

import { Link } from "react-router-dom";
import styles from "./OrderCompleted.module.css";
import arrowLeft from "../../assets/icons/left-arrow.png";
import { useEffect } from "react";
const OrderCompleted = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className={styles.container}>
			<Link className={styles.link} to='/'>
				<img src={arrowLeft} alt='arrow' />
				Back to order
			</Link>
			<div className={styles.thanks}>
				<h1>Thank you!</h1>
				<h2>Our consultants will contact with you in soon!</h2>
			</div>
		</div>
	);
};

export default OrderCompleted;
