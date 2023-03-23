import { TextField } from '@mui/material'
import React from 'react'
import { TextFieldWrapper } from './MuiTextField.style'

interface IMuiTextField {
    onChange: any;
    value: string;
}
const MuiTextField = (props: IMuiTextField) => {
    return (
        <TextFieldWrapper>
            <TextField
                {...props}
                type="text"
            />
        </TextFieldWrapper>
    )
}

export default MuiTextField