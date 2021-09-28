import React from 'react'
import CurrencyFormat from 'react-currency-format';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useStateValue} from "./StateProvider"
import "./Styling/Subtotal.css";
import { getBasketTotal } from './reducer';
// import CurrencyFormat from "react-currency-format";

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            {/* price */}

            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                    (Subtotal {basket.length} items ) : <strong>{`${value}`}</strong>
                        </p>
                        {/* <small className="subtotal__gift">
                            <input type="checkbox"/> 
                        </small> */}
                    </>
                )}
                // decimalScale={2}
                value={getBasketTotal(basket)} 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'Rs.'} 
            />
            
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
