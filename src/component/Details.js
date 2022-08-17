import React from 'react'
import {ProductConsumer} from '../Context'
import ButtonNavbar from './ButtonNavbar'
import {Link} from 'react-router-dom'
import Model from './Model'
class Details extends React.Component{
    render(){
        return(
            <ProductConsumer>
                {
                    (value)=>{
                       const{id,company,img,info,price,title,inCart} =value.detailProducts;
                        
                       
                       return(
                           <div className="container py-5 ml-md-5">
                               <div className="row">
                                   <div className="col-10 mx-auto text-center ml-md-5 text-blue my-5 text-slanted">
                                      <h1>{title}</h1>
                                   </div>
                               </div>
                               <div className="row">
                                   <div className="col-10 col-md-6 mx-auto my-3  ">
                                       <img src={img} className="img-fluid"/>
                                   </div>
                                   <div className="col-10 col-md-6 mx-auto my-3  text-capitalize">
                                       <h2>model:{title}</h2>
                                       <h4 className="text-title text-uppercase text-muted">made by:{company}</h4>
                                       <h4 className="text-blue"><strong>price:${price}</strong></h4>
                                       <p className="text-capitalize font-weight-bold">some info about product:</p>
                                       <p className="text-muted lead">{info}</p>
                                       <div>
                                           <Link to="/">
                                               <ButtonNavbar>Back To Store</ButtonNavbar>
                                           </Link>
                                           <ButtonNavbar card disabled={inCart?true:false} onClick={()=>{value.addToCard(id); value.openModel(id)}}>{inCart?"In Card":"Add To Card"}</ButtonNavbar>
                                       </div>

                                   </div>

                               </div>
                               <Model/>

                           </div>
                       )

                    }
                }
            </ProductConsumer>

        )
    }
}
export default Details;