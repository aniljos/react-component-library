import React, { ChangeEvent, useImperativeHandle, useRef } from "react";
import { FStrFieldProps } from "./FStrField.types";
import './FStrField.css'
const FStrField = React.memo(React.forwardRef((props: FStrFieldProps, ref) => {
  
    useImperativeHandle(ref, () => {
        return {
            focus: () => {
                inputRef.current?.focus();
            },
            inputRef: inputRef.current
        }
    })

    const inputRef = useRef<HTMLInputElement>(null);
    const {variant, ...otherProps} = props;

        return (
            
                
            <input ref={inputRef} {...otherProps}  className={`FStrField FStrField-${variant}`}   />
            
        );
}));

export default FStrField;