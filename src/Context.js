import React from 'react';
import {storeProducts,detailProduct} from './data'
const ProductContext=React.createContext();
const ProductProvider=ProductContext.Provider;
const ProductConsumer=ProductContext.Consumer;

class ProductProvider2 extends React.Component{
    constructor(){
        super()
        this.state={
            products:[],
            detailProducts:detailProduct,
            modelOpen:false,
            modelProduct:detailProduct,
            cart:[],
            cartSubTotal:0,
            cartTax:0,
            cartTotal:0
            

        }
    }
    componentDidMount(){
        this.setProducts()
    }
    setProducts=()=>{
        let temProducts=[]
        storeProducts.forEach((item)=>{
            const singleProducts={...item}
            temProducts=[...temProducts,singleProducts]
        });
        this.setState(()=>{
            return{products:temProducts}
        })
    }
   // tester=()=>{
     //   console.log(this.state.products[0].inCart)   
     ///   console.log(storeProducts[0].inCart)
     //   const temProducts=[...this.state.products]
      //  temProducts[0].inCart=true
      //  this.setState(()=>{
       //     return{products:temProducts}
       // },()=>{
            
       // console.log(this.state.products[0].inCart)   
       // console.log(storeProducts[0].inCart)
       // })
    // }
    getItem=(id)=>{
        const product=this.state.products.find(item=>item.id===id);
       
        return product

    }
    handleDetails=(id)=>{
        const product=this.getItem(id);
        //const productD=[...this.state.products]
        //console.log(product)
       // const index=productD.indexOf(product)
        //console.log(productD[index])
        this.setState(()=>({
            detailProducts:product
        }))

    }
    addToCard=(id)=>{
        const product=this.getItem(id);
        
        const temProducts=[...this.state.products]
        //console.log(temProducts);
        const index=temProducts.indexOf(product)
        const productCopy=temProducts[index]
        productCopy.inCart=true
        productCopy.count=1
        const price=productCopy.price;
        productCopy.total=price;
        this.setState(
        ()=>{
            return{
                products:temProducts,
                cart:[...this.state.cart,productCopy]
            }
        },
        ()=>{
            return this.addTotal()
        })
        
    }
    openModel=(id)=>{
        const product=this.getItem(id)
        this.setState(()=>{
            return {modelProduct:product,modelOpen:true}
        })
    }
    closeModel=()=>{
        this.setState(()=>{
            return {modelOpen:false}
        })
    }
    increment=(id)=>{
        const cartTemp=[...this.state.cart];
        const product=cartTemp.find((item)=>item.id===id);
        const index=cartTemp.indexOf(product)
        const productCart=cartTemp[index]
        productCart.count=productCart.count+1
        productCart.total=productCart.count*productCart.price
        this.setState(()=>{
            return{
                cart:[...cartTemp]
            }
        },()=>this.addTotal())
        
    }
    decrement=(id)=>{
        const cartTemp=[...this.state.cart];
        const product=cartTemp.find((item)=>item.id===id)
        const index=cartTemp.indexOf(product)
        const productCart=cartTemp[index]
        if(productCart.count===0){
            this.removeItem(id)
        }
        else{
            productCart.count=productCart.count-1
            productCart.total=productCart.count*productCart.price
            this.setState(()=>{
                return{
                 cart:[...cartTemp]
                }
             },()=>this.addTotal())
        }
        
    }
    removeItem=(id)=>{
      const  temProduct=[...this.state.products];
      const cart=[...this.state.cart]
      const index=temProduct.indexOf(this.getItem(id))
      const copyProduct=temProduct[index]
      copyProduct.inCart=false;
      copyProduct.count=0;
      copyProduct.total=0;

      const cartCopy=cart.filter((item)=>item.id !==id)
      this.setState(()=>{
          return{
              products:temProduct,
              cart:cartCopy
          }
      },this.addTotal())
     }
    clearCart=()=>{
        this.setState(()=>{
            return{
                cart:[]
            }
        },()=>{
            this.setProducts()
        })
       // console.log("clear")
    }
    addTotal=()=>{
       let subTotal=0;
        this.state.cart.map((item)=>(
            subTotal+=item.total
        ));
        const copyTax=subTotal * 0.1;
        const tax=parseFloat(copyTax.toFixed(2));
        const total=subTotal+tax;
        this.setState(()=>{
            return{
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal:total
            };
        });
    };
     
    render(){
        return(
            <ProductProvider value={{
               ...this.state,
               handleDetails:this.handleDetails,
               addToCard:this.addToCard,
               openModel:this.openModel,
               closeModel:this.closeModel,
               increment:this.increment,
               decrement:this.decrement,
               removeItem:this.removeItem,
               clearCart:this.clearCart
            }}>                

                {this.props.children}

            </ProductProvider>

        )
    }
}
export {ProductProvider2,ProductConsumer}
export default ProductContext;