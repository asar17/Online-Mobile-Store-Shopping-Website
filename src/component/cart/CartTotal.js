import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import PayPal from './PayPal'
function CartTotal({value}){
    const {cartSubTotal,cartTotal,cartTax,clearCart}=value
    return(
        <React.Fragment>
             <CartWrapper className="container">
                <div className="row bor" > 
                    <div className="col-10 mt-2 mx-auto ml-md-auto ml-sm-5  col-sm-8 text-capitalize text-end" >
                        
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5"  onClick={()=>clearCart()}>clear cart</button>
                        
                        <h5>
                            <span className="text-title">sub total:</span>
                            <strong>${cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">tax:</span>
                            <strong>${cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title"> total:</span>
                            <strong>${cartTotal}</strong>
                        </h5>
                    </div>
                 </div>
            </CartWrapper> 
        </React.Fragment>

    )
}
const CartWrapper=styled.div`

`
export default CartTotal