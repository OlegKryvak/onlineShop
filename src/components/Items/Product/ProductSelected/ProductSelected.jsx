/** @format */

import styles from "./ProductSelected.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../../../../assets/icons/left-arrow.png";
import VoteBar from "./VoteBar/VoteBar";

const ProductSelected = () => {
	let selectedProduct = useSelector((state) => state.selectedItem);
	const [showFullDescription, setShowFullDescription] = useState(false);
	const showFullDescriptionHandler = () => {
		setShowFullDescription((prev) => !prev);
	};

	return (
		<>
			<div className={styles.container}>
				{selectedProduct.map((product) => {
					return (
						<div key={product.id} className={styles.container}>
							<Link className={styles.link} to='/'>
								<img src={arrowLeft} alt='arrow' />
								Back to order
							</Link>
							<div>
								<img src={product.image} alt={product.altText} />
							</div>
							<div>
								<h1>Category: {product.category}</h1>
								<h1>{product.title}</h1>
								<h1> Price: {product.price} $</h1>
								<h1> Rating: {product.rating.rate}</h1>
								<h1> Available: {product.rating.count > 0 ? product.rating.count : <p>Sorry, this product is not available.</p>}</h1>
								<h1 className={styles.description}>
									<button className={styles.descriptionBtn} onClick={showFullDescriptionHandler}>
										<b>Description: </b>
										{showFullDescription && product.description}
										{!showFullDescription && `${product.description.slice(0, 80)}...`}
									</button>
								</h1>
							</div>
						</div>
					);
				})}
			</div>
			<VoteBar />
		</>
	);
};

export default ProductSelected;
