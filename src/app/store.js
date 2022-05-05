/** @format */

import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
	itemsList: [],
	filterCategories: [
		{ value: "men's clothing", label: "men's clothing" },
		{ value: "women's clothing", label: "women's clothing" },
		{ value: "jewelery", label: "jewelery" },
		{ value: "electronics", label: "electronics" },
	],
	selectedCategory: "",
	totalAmount: 0,
	itemsInBasket: [],
	selectedItem: [],
};

const itemsSlice = createSlice({
	name: "itemsList",
	initialState,
	reducers: {
		setProducts(state, action) {
			state.itemsList = [...action.payload.data];
			state.itemsList.forEach((e) => (e.amount = 0));
		},
		setSelectedCategory(state, action) {
			state.selectedCategory = action.payload.category;
		},
		resetSelectedCategory(state, action) {
			state.selectedCategory = "";
		},
		selectProduct(state, action) {
			state.selectedItem = [];
			state.selectedItem = [action.payload.product];
			//localStorage.setItem("selectedProduct", JSON.stringify(action.payload.product));
		},
		changeCountValueAdd(state, action) {
			state.itemsList.forEach((item) => {
				if (item.id === action.payload.item.id) {
					item.amount++;
				}
			});
		},
		changeCountValueMinus(state, action) {
			state.itemsList.forEach((item) => {
				if (item.id === action.payload.item.id) {
					item.amount--;
				}
			});
		},
		addItemToBasket(state, action) {
			const product = action.payload.product;
			state.totalAmount = state.totalAmount + product.price.toFixed(2) * product.amount;
			state.itemsInBasket = [product, ...state.itemsInBasket];
		},
		setProductAmountToZero(state, action) {
			const product = action.payload.product;
			state.itemsList.forEach((item) => {
				if (item.id === product.id) {
					item.amount = 0;
				}
			});
		},
		saveBasketItemAfterEdit(state, action) {
			const product = action.payload.item;
			state.itemsInBasket.forEach((e) => {
				if (e.id === product.id) {
					e.amount = action.payload.newAmount;
				}
			});
			state.totalAmount = state.totalAmount + product.price * action.payload.differenceOfAmount;
		},
		deleteItemFromBasket(state, action) {
			const product = action.payload.item;
			state.totalAmount = state.totalAmount - product.price.toFixed(2) * product.amount < 0 ? 0 : state.totalAmount - product.price.toFixed(2) * product.amount;
			state.itemsInBasket = state.itemsInBasket.filter((item) => item.id !== product.id);
		},
		makeOrder(state, action) {
			state.itemsInBasket = [...state.itemsInBasket];
			state.itemsList = [...state.itemsList];
			state.itemsInBasket.forEach((item) => {
				state.itemsList.forEach((i) => {
					if (item.id === i.id) {
						i.rating.count = i.rating.count - item.amount;
					}
				});
			});
			state.itemsInBasket = [];
			state.itemsList.forEach((e) => (e.amount = 0));

			state.totalAmount = 0;
		},
	},
});

export const itemsActions = itemsSlice.actions;

export const store = configureStore({
	reducer: itemsSlice.reducer,
});
