
import mealsImage from "../../assets/meals.jpeg"
import HeaderCartButton from "./HeaderCardButton"
import classes from "./Header.module.css"

const Header = props => {
    return <>
    <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>

    <div className={classes['main-image']}>
        <img src={mealsImage} alt="table full of delicious food" />
    </div>
    </>
}

export default Header;
