import React from 'react'
import Productlist from './Productlist'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../Context'

class Product extends React.Component{
  
    render(){
        const {id,title,img,price,inCart}=this.props.product;
        return(
            <ProductWrapper className="col-9 col-md-6 col-lg-3 p-3 mx-auto">
                <div className="card">
                    <ProductConsumer>
                        {(value)=>{
                            const cart=value
                         return(
                             <div className="img-container p-5 mx-auto" onClick={()=>value.handleDetails(id)}>
                                <Link to="/details">
                                <img src={img} className="card-img-top" />
                                </Link>
                                <button className="cart-btn" disabled={inCart?true:false} onClick={()=>{
                                    value.addToCard(id);
                                    value.openModel(id)}}>
                                    {inCart?<p className="text-capitalize disabled my-auto">in card</p>:<i className="fa fa-shopping-cart" style={{fontSize:'1.5rem'}}/>}
                                </button>
                             </div>
                         )
                          }}
                    </ProductConsumer>
                    
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue font-italic mb-0">${price}</h5>
                    </div>
                </div>
                
            </ProductWrapper>
            

        )
    }
}
const ProductWrapper=styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear
}
.card-footer{
    background:transparent;
    border-top:transparent
}
&:hover{
    .card{
        border:0.4rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2) 
        }
    .card-footer{
        background:rgba(247,247,247)
    }    
}
.img-container{
    position:relative;
    overflow:hidden
}
.card-img-top{
    transition:all 1s linear;

}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    background:var(--lightBlue);
    border:none;
    color:var(--mainWhite);
    border-radius:0.5rem 0 0 0;
    transform:translate(100%,100%);
    width:6rem;
    height:2rem;
}
.img-container:hover .cart-btn{
    transform:translate(0,0);
    transition:all 1s linear;

}
.cart-btn:hover{
    color:var(--mainBlue);
    cursor:pointer
}
`

export default Product;