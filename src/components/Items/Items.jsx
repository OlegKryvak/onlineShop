/** @format */

import styles from "./Items.module.css";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product/Product";
import Loader from "../Loader/Loader";
import Select from "react-select";
import { itemsActions } from "../../app/store";
import { useEffect } from "react";

// const sortingByPrice = [
// 	{ value: "ascending", label: "ascending" },
// 	{ value: "descending", label: "descending" },
// ];

const Items = ({ showBasketHandler }) => {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.itemsList);
	const categories = useSelector((state) => state.filterCategories);
	const selectedCategory = useSelector((state) => state.selectedCategory);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const selectCategoryHandler = (event) => {
		const category = event.value;
		dispatch(itemsActions.setSelectedCategory({ category }));
	};

	const resetFilterHandler = () => {
		dispatch(itemsActions.resetSelectedCategory());
	};

	return (
		<div className={styles.container}>
			{items.length !== 0 && (
				<div className={styles.filterContainer}>
					<h1>Filters: </h1>
					<Select value={selectedCategory} placeholder={selectedCategory ? selectedCategory : "Categories"} onChange={selectCategoryHandler} className={styles.select} options={categories} />
					{selectedCategory && (
						<button onClick={resetFilterHandler} className={styles.filterButton}>
							Reset all filters
						</button>
					)}
				</div>
			)}
			<div>
				{items.length === 0 && <Loader />}
				{items.length !== 0 &&
					!selectedCategory &&
					items.map((item) => {
						return <Product key={item.id} item={item} showBasketHandler={showBasketHandler} />;
					})}
				{items.length !== 0 &&
					selectedCategory &&
					items
						.filter((e) => e.category === selectedCategory)
						.map((item) => {
							return <Product key={item.id} item={item} showBasketHandler={showBasketHandler} />;
						})}
			</div>
		</div>
	);
};

export default Items;
