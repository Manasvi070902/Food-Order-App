import useInput from "../../hooks/use-input"
import classes from "./Checkout.module.css"

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@')
const isNumber = value => value.length === 10 && value.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g)
const isPostal = value => value.length === 6;
const Checkout = (props) => {

    const {value: nameValue,isValid: nameIsValid,hasError: nameHasError, valueChangeHandler: nameChangeHandler,inputBlurHandler: nameBlurHandler,reset: resetName} = useInput(isNotEmpty);
    const {value: emailValue,isValid: emailIsValid,hasError: emailHasError,valueChangeHandler: emailChangeHandler,inputBlurHandler: emailBlurHandler, reset: resetEmail} = useInput(isEmail);
    const {value: streetValue, isValid: streetIsValid,hasError: streetHasError,valueChangeHandler: streetChangeHandler,inputBlurHandler: streetBlurHandler,reset: resetStreet} = useInput(isNotEmpty);
    const {value: cityValue, isValid: cityIsValid,hasError: cityHasError,valueChangeHandler: cityChangeHandler,inputBlurHandler: cityBlurHandler,reset: resetCity} = useInput(isNotEmpty);
    const {value: numberValue, isValid: numberIsValid,hasError: numberHasError,valueChangeHandler: numberChangeHandler,inputBlurHandler: numberBlurHandler,reset: resetNumber} = useInput(isNumber);
    const {value: codeValue, isValid: codeIsValid,hasError: codeHasError,valueChangeHandler: codeChangeHandler,inputBlurHandler: codeBlurHandler,reset: resetCode} = useInput(isPostal);
    
    let formIsValid = false;
    if (nameIsValid && emailIsValid && streetIsValid && cityIsValid  && numberIsValid &&  codeIsValid) {
      formIsValid = true;
    }


   
    const nameClasses = `${classes.control} ${nameHasError ? classes.invalid : ''}`;
    const emailClasses = `${classes.control} ${emailHasError ? classes.invalid : ''}`;
    const streetClasses = `${classes.control} ${streetHasError ? classes.invalid : ''}`;
    const cityClasses = `${classes.control} ${cityHasError ? classes.invalid : ''}`;
    const numberClasses = `${classes.control} ${numberHasError ? classes.invalid : ''}`;
    const codeClasses = `${classes.control} ${codeHasError ? classes.invalid : ''}`;


    const submitHandler = async (event) => {
        event.preventDefault();
       
          await props.onConfirm({
              name : nameValue,
              email : emailValue,
              number : numberValue,
              street : streetValue,
              city : cityValue,
              potalCode : codeValue

          })
          resetName();
          resetEmail();
          resetStreet();
          resetCity();
          resetNumber();
          resetCode();
    }
    
  
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={nameClasses}>
                <label htmlFor="name" >Your Name</label>
                <input id="name" type="text" value={nameValue} onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
                {nameHasError && <p className="error-text">Please enter a valid name.</p>}
            </div>
            <div className={emailClasses}>
                <label htmlFor="email" >Email</label>
                <input id="email" type="text" value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
                {emailHasError && <p className="error-text">Please enter a valid email.</p>}
            </div>
            <div className={numberClasses}>
                <label htmlFor="number" >Mobile Number</label>
                <input id="number" type="number" value={numberValue} onChange={numberChangeHandler} onBlur={numberBlurHandler}/>
                {numberHasError && <p className="error-text">Please enter a valid number(10 digits only).</p>}
            </div>
            <div className={streetClasses}>
                <label htmlFor="street" >Street</label>
                <input id="street" type="text" value={streetValue} onChange={streetChangeHandler} onBlur={streetBlurHandler}/>
                {streetHasError && <p className="error-text">Please enter a valid street.</p>}
            </div>
            <div className={codeClasses}>
                <label htmlFor="code" >Postal Code</label>
                <input id="code" type="text"value={codeValue} onChange={codeChangeHandler} onBlur={codeBlurHandler} />
                {codeHasError && <p className="error-text">Please enter a valid postal code(6 digits only).</p>}
            </div>
            <div className={cityClasses}>
                <label htmlFor="city" >City</label>
                <input id="city" type="text" value={cityValue} onChange={cityChangeHandler} onBlur={cityBlurHandler}/>
                {cityHasError && <p className="error-text">Please enter a valid city.</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
        </button>
                <button className={classes.submit} disabled={!formIsValid} >Confirm</button>
            </div>
        </form>
    )
}
export default Checkout