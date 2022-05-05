/** @format */

import styles from "./BasketBackground.module.css";
const BasketBackground = ({ closeBasket }) => {
	return <div className={styles.container} onClick={closeBasket} />;
};

export default BasketBackground;
