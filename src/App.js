/** @format */

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { itemsActions } from "./app/store";
import About from "./components/About/About";
import Basket from "./components/Basket/Basket";
import BasketBackground from "./components/BasketBackground/BasketBackground";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import ProductSelected from "./components/Items/Product/ProductSelected/ProductSelected";
import Order from "./components/Order/Order";

const App = () => {
	const dispatch = useDispatch();
	const [showBasket, setShowBasket] = useState(false);

	const showBasketHandler = () => {
		setShowBasket((prev) => !prev);
	};
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => dispatch(itemsActions.setProducts({ data })));
	}, [dispatch]);
	return (
		<div className='App'>
			{showBasket && <Basket closeBasket={showBasketHandler} />}
			{showBasket && <BasketBackground closeBasket={showBasketHandler} />}
			<Header showBasketHandler={showBasketHandler} />

			<Routes>
				<Route path='/' element={<Items showBasketHandler={showBasketHandler} />} />
				<Route path='/product/:id' element={<ProductSelected />} />
				<Route path='/order' element={<Order />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact-us' element={<ContactUs />} />
			</Routes>

			<Footer />
		</div>
	);
};

export default App;
