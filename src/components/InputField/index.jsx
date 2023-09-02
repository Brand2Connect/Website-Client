import React from 'react';
import styles from './style.module.css';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';

export default function InputField (props){
    return(
               <div className={styles.InputField}>
<CustomInput id="standard-basic" label={`${props.title}`} variant="standard" />
           </div>
    )
}

const CustomInput = styled(TextField)`
 width:100%
`;
