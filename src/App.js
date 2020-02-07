import React, { useState, createContext } from 'react';
import './App.css';
import Page1 from './pages/Page1';
import Header from './components/Header';
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";
import Page2 from './pages/Page2';

export const Context = createContext();

const App = () => {
	
	const [productsCart, setProductsCart] = useState([]);
	
	const onAddToCart = (p) => {
		setProductsCart([...productsCart, p]);
	}
  
	const onRemoveFromCart = (p) => {
		const newArray = [...productsCart];
		const deletedIndex = newArray.findIndex((i)=> i.id === p.id);
		if(deletedIndex>-1){
			newArray.splice(deletedIndex,1);
		}
		setProductsCart(newArray);
	}

	const onBuyAll = () => {
		setProductsCart([]);
	}

	const onBuy = (p) => {
		let newArray = productsCart.filter(i => i.id !== p.id);
		setProductsCart(newArray);
	}

  	return (
		<Router>
		<Context.Provider value={{
			productsCart: productsCart,
			onAddToCart: onAddToCart,
			onRemoveFromCart: onRemoveFromCart,
			onBuyAll: onBuyAll,
			onBuy: onBuy
		}}>
			
				<Header/>
				<Switch>
					<Route exact path="/">
						<Page1 />
					</Route>
					<Route path="/checkout">
						<Page2 />
					</Route>
				</Switch>
			
		</Context.Provider>
		</Router>
  	);
}

export default App;
