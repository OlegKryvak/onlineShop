/** @format */

import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import home from "../../assets/icons/home.png";
import basket from "../../assets/icons/basket.png";
import styles from "./Header.module.css";
const Header = ({ showBasketHandler }) => {
	const totalAmount = useSelector((state) => state.totalAmount);
	const productAmount = useSelector((state) => state.itemsInBasket);
	const location = useLocation();
	const history = useNavigate();
	const calculateProductAmount = () => {
		let count = 0;
		productAmount.forEach((e) => {
			count += +e.amount;
		});
		return count;
	};

	return (
		<div className={styles.container}>
			{location.pathname !== "/order" && (
				<button onClick={() => history("/")}>
					<img src={home} alt='home' />
				</button>
			)}
			{location.pathname === "/order" && (
				<button onClick={() => history("/order")}>
					<img src={home} alt='home' />
				</button>
			)}
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
