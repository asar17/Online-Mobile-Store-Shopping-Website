import React from 'react'
import Title from './Title'
import {storeProducts} from '../data'
import Product from './Product'
import ProductContext,{ProductConsumer}from '../Context'
class Productlist extends React.Component{

    render(){

        return(
            <div>
                <React.Fragment>
                <div className="py-5" >
                    <div className="container">
                        <Title name="our" title="product"/>
                        <div className="row">
                            <ProductConsumer>
                                {
                                    (value)=>(
                                        value.products.map((product)=>(
                                            <Product key={product.id} product={product}/>
                                            //console.log(product)

                                        ))
                                    )
                                }
                            </ProductConsumer>
                    
                            

                        </div>

                    </div>

                </div>
            </React.Fragment>
            </div>

        )
    }
}
Productlist.contextType=ProductContext;
export default Productlist;