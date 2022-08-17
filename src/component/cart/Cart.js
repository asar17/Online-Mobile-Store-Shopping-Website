import React from 'react'
import {ProductConsumer} from '../../Context'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotal from './CartTotal'
class Cart extends React.Component{
    render(){

        return(
           <ProductConsumer>
               {
                   (value)=>{
                       const {cart}=value
                      if(cart.length>0){
                          return(
                            <React.Fragment>
                                <Title name="your" title="cart"/>
                                <CartColumns/>
                                <CartList value={value} />
                                <CartTotal value={value}/>
                           </React.Fragment>
                          )

                      }
                      else{
                          return  <EmptyCart/>
                      }
                   }
               }
           </ProductConsumer>
            

        )
    }
}
export default Cart;