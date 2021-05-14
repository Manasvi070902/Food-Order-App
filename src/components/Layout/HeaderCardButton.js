import { useContext } from "react";
import CartContext from "../../store/cart-context"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"


const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext);
    //  imp part is to use .reduce()
    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0);

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}> <CartIcon /></span>
        <span>Your cart</span>
        <span className={classes.badge}> {numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton