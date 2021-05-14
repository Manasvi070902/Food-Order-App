import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"


const HeaderCartButton = props => {

    const [btnHighlight, setBtnHighlight] = useState(false); //bump annimation

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    //  imp part is to use .reduce()
    const numberOfCartItems = items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0);


    const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : ''}`
    // use effect is used only for button bump animation (after we click "Add")
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnHighlight(true)

        const timer = setTimeout(() => {
            setBtnHighlight(false)
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}> <CartIcon /></span>
        <span>Your cart</span>
        <span className={classes.badge}> {numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton