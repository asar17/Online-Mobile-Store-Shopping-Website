import CartLitem from './CartLitem'
function CartList({value}){
    const {cart}=value
    
    return(
        <div className="container-fluid">
            {
                cart.map((item)=>(
                    <CartLitem key={item.id} item={item} value={value}/>
                ))
            }
        </div>
    )
}
export default CartList