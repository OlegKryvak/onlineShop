/** @format */

import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../../../app/store";

import ProductItem from "./ProductItem/ProductItem";

const Product = ({ item, showBasketHandler }) => {
	const itemsInBasket = useSelector((state) => state.itemsInBasket);
	const dispatch = useDispatch();
	let { amount } = item;

	const addItemHandler = (product) => {
		const isSelectedItemInBasket = itemsInBasket.filter((item) => item.id === product.id).length;
		if (amount === 0) {
			return;
		}
		if (isSelectedItemInBasket) {
			dispatch(itemsActions.setProductAmountToZero({ product }));
			showBasketHandler(true);
		}

		if (amount !== 0 && !isSelectedItemInBasket) {
			dispatch(itemsActions.addItemToBasket({ product }));
			dispatch(itemsActions.setProductAmountToZero({ product }));
		} else {
			return;
		}
	};

	return <ProductItem item={item} addItemHandler={addItemHandler} />;
};

export default Product;
