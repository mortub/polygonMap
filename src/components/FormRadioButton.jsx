
import React from 'react';

const FormRadioButton = ({ name, value }) => {
    return (
        <>
            <input type="radio" name={name} value={value}>
            </input>
            <label for="html">{value}</label><br></br>
        </>
    )

}

export default FormRadioButton;

