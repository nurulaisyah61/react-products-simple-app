import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import { Link } from "react-router-dom";

const Page1 = () => {
    const [productsList, setProductsList] = useState([]);
    
    const getData = async () => {
		const result = await fetch('https://jsonplaceholder.typicode.com/todos');

		const dataJson = await result.json();

		const listProduct = dataJson.map((i) => {
			return {
				id: i.id,
				title: i.title
			}
		});
		setProductsList(listProduct);
	};

	useEffect( () => {
		getData();
	}, []);
    return (
        <div>
            <div className="main">
                <h2>List of Products</h2>
                <div className="grid-2">
                    {productsList.map((i)=>{
                        return (
                            <Product 
                                id={i.id}
                                title={i.title}
                                key={i.id}
                                changeQuantity
                            />
                            
                        )
                    })}
                </div>
            </div>
            <div className="footer">
                <Link to="/checkout">
                    <button>Checkout</button>
                </Link>
            </div>
        </div>
    );
}

export default Page1;