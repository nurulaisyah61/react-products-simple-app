import React from 'react';
import { Context } from '../App';
import { Link } from "react-router-dom";

const Product = (props) => {
    return (
        <Context.Consumer>
            {(context) => (
                <div className="card" >
                    <p>{props.title}</p>
                    <p className="auto">{context.productsCart.filter(p => p.id === props.id).length || 0 }</p>
                    {props.changeQuantity &&
                        <div className="auto">
                            <button onClick={() => context.onAddToCart(props)}>+</button>
                            <button onClick={()=> context.onRemoveFromCart(props)}>-</button>
                        </div>
                    }
                    {props.canBuy &&
                        <Link to="/" className="auto">
                            <button  onClick={()=>context.onBuy(props)}>Buy</button>
                        </Link>
                    }
                    
                </div>
            )}
        </Context.Consumer>
    );
}

export default Product;