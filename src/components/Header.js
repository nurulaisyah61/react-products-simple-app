import React from 'react';
import { Context } from '../App';
import logo from '../logo.svg';

const Header = () => {
    return (
        <Context.Consumer>
            {(context) =>(
                <div className="header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div>
                        <h3>
                            {Array.from(new Set(context.productsCart.map(i=>i.id))).length} products
                        </h3>
                        <h3>
                            Total quantities of products  = {context.productsCart.length}
                        </h3>
                    </div>
                </div>
            )}
        </Context.Consumer>
    )
}

export default Header;