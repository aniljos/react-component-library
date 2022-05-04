import React, {ChangeEventHandler} from 'react';


export interface FStrFieldProps extends React.HTMLProps<HTMLInputElement>
{
    variant?: 'primary'| 'secondary' | 'error',
    onChange?: ChangeEventHandler<HTMLInputElement>
}