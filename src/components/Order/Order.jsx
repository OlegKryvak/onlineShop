/** @format */

import { useEffect } from "react";
import Form from "../Form/Form";
import styles from "./Order.module.css";

const Order = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className={styles.container}>
			<Form />
		</div>
	);
};

export default Order;
