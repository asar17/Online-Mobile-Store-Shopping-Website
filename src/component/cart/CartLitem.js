import {BsTrashFill} from 'react-icons/bs'
function CartLitem({item,value}){
    const{id,title,img,price,total,count}=item
    const {increment,decrement,removeItem}=value

    return(
        <div className="row my-1 text-capitalize text-center">
                <div className="col-10 mx-auto  col-lg-2">
                    <img src={img} className="img-fluid" style={{width:'5rem',height:'5rem'}} alt="product-img"/>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">product:</span>
                    {title}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                     <span className="d-lg-none">price:</span>
                     {price}
                 </div>
                 <div className="col-10 mx-auto col-lg-2 my-2">
                     <div className="d-flex justify-content-center">
                        <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
                        <span className="btn btn-black mx-1" >{count}</span>
                        <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
                     </div>
                 </div>
                 <div className="col-10 mx-auto col-lg-2">
                     <div className="cart-icon" onClick={()=>removeItem(id)}>
                        <BsTrashFill/>
                     </div>
                 </div>
                 <div className="col-10 mx-auto col-lg-2">
                     <strong>item total:${total}</strong>
                 </div>
        </div>
    )
}
export default CartLitem 