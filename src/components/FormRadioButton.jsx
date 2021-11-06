
import React, { useEffect, useState } from 'react';
import '../App.css';

const FormRadioButton = ({ name, value, radioButtonValue }) => {
    const [ checked, setChecked ] = useState()

    useEffect(() =>{
        if( radioButtonValue === value){
            setChecked(true);
        }else{
            setChecked(false);
        }
    },[radioButtonValue]);

    return (
        <div >
            <input type="radio" name={name} value={value} checked={checked} ></input>
            <label htmlFor="html" className="themeColor">{value}</label><br></br>
        </div>
    )

}

export default FormRadioButton;

