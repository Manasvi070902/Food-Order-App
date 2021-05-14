import React from "react"

import classes from "./Input.module.css"

const Input = React.forwardRef((props, ref) => {

    return (
        <div className={classes.input}>
            {/* imp part to remember "htmlFor" & "props.input"*/}
            <label htmlFor={props.input.id}>{props.label}</label> 
            <input  ref={ref} {...props.input} />
        </div>
    )
})

export default Input