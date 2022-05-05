/** @format */

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import home from "../../assets/icons/home.png";
import basket from "../../assets/icons/basket.png";
import styles from "./Header.module.css";
const Header = ({ showBasketHandler }) => {
	const totalAmount = useSelector((state) => state.totalAmount);
	const productAmount = useSelector((state) => state.itemsInBasket);

	const calculateProductAmount = () => {
		let count = 0;
		productAmount.forEach((e) => {
			count += +e.amount;
		});
		return count;
	};

	return (
		<div className={styles.container}>
			<NavLink to='/'>
				<img src={home} alt='home' />
			</NavLink>
			<div>
				<span className={styles.totalAmount}>{totalAmount.toFixed(2)} $</span>
				<button onClick={showBasketHandler}>
					<img src={basket} alt='basket' />{" "}
					<span className={productAmount.length > 0 ? styles.productAmountPositive : ""}>{productAmount.length === 0 ? "0" : calculateProductAmount()}</span>
				</button>
			</div>
		</div>
	);
};

export default Header;
