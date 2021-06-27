import React from 'react'
import './SubTotal.css'
import { useStateValue } from '../../StateProvider/StateProvider';
import { getBasketTotal } from '../../Reducer/reducer';
import CurrencyFormat from 'react-currency-format';

const SubTotal = () => {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            {/* price */}
            <CurrencyFormat
                renderText={(value) => (
                    <>

                        <p>
                            Subtotal({basket.length} items): {`${value}`}
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This orders contain a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandsSeparator={true}
                prefix={"$"}

            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
