import { useContext , useState} from "react"
import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
import CartContext from "../../store/cart-context"
import CartItem from "./CartItem"
import Checkout from "./Checkout"

const Cart = (props) => {

    const [isCheckOut, setIsCheckOut] = useState(false)
    const cartCtx = useContext(CartContext);

    const cartItemRemoveHandler = (id)=>{
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = (item)=>{
        cartCtx.addItem({...item , amount:1})
    }
    const orderHandler = ()=>{
 setIsCheckOut(true)
    }

    const cartItems = (<ul className={classes['cart-items']}>{cartCtx.items.map((item) => (
        <CartItem key={item.id} 
        name={item.name}
        amount={item.amount}
        price={item.price} 
        onRemove={cartItemRemoveHandler.bind(null,item.id)} //.bind is used to ensure both the functions receive id & item respectively
        onAdd={cartItemAddHandler.bind(null,item)}/>
    ))}
    </ul>);

    const totalAmount = `$${Math.abs(cartCtx.totalAmount.toFixed(2))}`;
    const hasItems = cartCtx.items.length>0; //condition for order button

    const modalAction = <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
    {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
</div>
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckOut && <Checkout onCancel={props.onClose}/>}
            
            {!isCheckOut && modalAction}
        </Modal>
    )
}

export default Cart
