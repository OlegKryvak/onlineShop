/** @format */

import styles from "./ProductItem.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { itemsActions } from "../../../../app/store";
import InputCounter from "../../../InputCounter/InputCounter";

const ProductItem = ({ item, addItemHandler }) => {
	const history = useNavigate();
	const dispatch = useDispatch();
	let { id, title, image, price, altText, category, rating } = item;
	const linkProductHandler = () => {
		dispatch(itemsActions.selectProduct({ product: item }));
		history("/product/" + id);
	};

	return (
		<div className={styles.container}>
			<div onClick={linkProductHandler}>
				<img src={image} alt={altText} />
				<h1>Category: {category}</h1>
				<h1>{title}</h1>

				<h2> Price: {price} $</h2>
				<h2> Rating: {rating.rate}</h2>
				<h2> Available: {rating.count > 0 ? rating.count : <p>Sorry, this product is not available.</p>}</h2>
			</div>
			<div>
				<InputCounter item={item} />
				<button onClick={() => addItemHandler(item)}>Add</button>
			</div>
		</div>
	);
};

export default ProductItem;
