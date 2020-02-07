import React from 'react';
import { Context } from '../App';
import Product from '../components/Product';
import { Link } from "react-router-dom";

const Page2 = () => {
    return (
        <Context.Consumer>
            {(context)=>(
                <div className="main">
                    <h2>List of Products Added</h2>
                    <div className="grid-2">
                        {Array.from(new Set(context.productsCart.map(i=>i.id)))
                            .map(i=>(
                            <Product 
                                key={i} 
                                id={i}
                                title={context.productsCart.find(p => p.id === i).title}
                                canBuy
                            />
                        ))}
                    </div>
                    <div className="footer">
                        <Link to="/">
                            <button onClick={()=>context.onBuyAll()}>Buy All</button>
                        </Link>
                        <Link to="/">
                            <button>Back</button>
                        </Link>
                    </div>
                </div>
            )}
            
        </Context.Consumer>
    );
}

export default Page2;