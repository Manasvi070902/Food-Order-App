import classes from "./Input.module.css"

const Input = (props) => {

    return (
        <div className={classes.input}>
            {/* imp part to remember "htmlFor" & "props.input"*/}
            <label htmlFor={props.input.id}>{props.label}</label> 
            <input  {...props.input} />
        </div>
    )
}

export default Input