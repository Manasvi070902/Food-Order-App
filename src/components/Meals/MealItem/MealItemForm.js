
import { useRef, useState } from "react"
import Input from "../../UI/Input"
import classes from "./MealItemForm.module.css"

const MealItemForm = (props) => {
    //use state is used for validation only
    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();


    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value; //this will always return a string 
        const enteredAmountNumber = +enteredAmount //add + to convert it into number

        //validation added
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)
            return;
        }

        //forwarded the amount bcoz we need other parameter like name, price also
        props.onAddCart(enteredAmountNumber);
    }
    return <form className={classes.form} onSubmit={submitHandler}>
        {/* since its a custom component we need to add forward ref to the component also */}
        <Input
            ref={amountInputRef}
            label="Amount"
            input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
        <button >+ Add</button>

        {!amountIsValid && <p>Please enter a valid amount(1-5)</p>}
    </form>
}

export default MealItemForm