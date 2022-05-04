import React, {FC} from "react";
import './Button.css';
import {ButtonProps} from './Button.types';

const Button = (props: ButtonProps) => {

    const {text, onClick} = props;
    return (
        <button 
            type="button" 
            onClick={onClick}
            >{text}</button>
    )
} 

export default Button;
