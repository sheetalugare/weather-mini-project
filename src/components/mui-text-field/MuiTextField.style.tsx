import { styled } from "@mui/material";

export const TextFieldWrapper = styled('div') <any>`

&& .MuiInputBase-input {
    background-color: #dec3ff;
    color: black;
    /* border-bottom: 1px dashed red; */
}

&& fieldset{
    border-bottom:2px dashed black;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
}

&& :hover fieldset{
    border-bottom:2px dashed black;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
}

&& .Mui-focused fieldset{
    border-bottom:2px dashed black;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
}
    
`