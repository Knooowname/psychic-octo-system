import classes from './MyInput.module.css'
import React from 'react'

export const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.myInput} {...props}/>
    )
})