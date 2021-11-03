import React from 'react';

const FormInput = ({setPosition}) =>{
    return (
        <input type="text" onChange={setPosition}/>
    )

}

export default FormInput;