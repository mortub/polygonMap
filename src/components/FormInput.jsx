import React from 'react';
import '../App.css';

const FormInput = ({setPosition}) =>{
    return (
        <div>
            <input type="text" onChange={setPosition} />
        </div>
    )
}

export default FormInput;