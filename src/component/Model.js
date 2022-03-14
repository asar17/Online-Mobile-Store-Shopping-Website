import React from 'react'
import styled from 'styled-components'
import {ProductConsumer} from '../Context'
import ButtonNavbar from './ButtonNavbar'
import {Link} from 'react-router-dom'
class Model extends React.Component{
    render(){
        return(
            <ProductConsumer>
                {
                    (value)=>{
                        const {img,title,price}=value.modelProduct 
                        const{modelOpen}=value;
                        if(!modelOpen){
                            return null
                        }
                        else{
                            return(
                                <ModelContainer>
                                    <div className="container">
                                        <div className="row">
                                            <div id="model" className="col-8 col-md-6 col-lg-4 text-center text-capitalize mx-auto">
                                                <h4 className="pt-5">item added to the cart</h4>
                                                <img src={img} className="img-fluid"/>
                                                <h5>{title}</h5>
                                                <h5 className="text-muted">prixe:${price}</h5>
                                                <Link to="/">
                                                    <ButtonNavbar onClick={()=>value.closeModel()}>
                                                        Back To Store
                                                    </ButtonNavbar>
                                                </Link>
                                                <Link to="/cart">
                                                    <ButtonNavbar card onClick={()=>value.closeModel()} >
                                                        Go To Card
                                                    </ButtonNavbar>
                                                </Link>
                                            </div>

                                        </div>

                                    </div>

                                </ModelContainer>
                            )
                        }
                    }
                }
            </ProductConsumer>
        )
    }
}
const ModelContainer=styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
display:flex;
align-items:center;
justify-content:center;
background:rgba(0,0,0,0.3);
#model{
    background:var(--mainWhite);
    border-radius:15px;

}
`
export default Model;