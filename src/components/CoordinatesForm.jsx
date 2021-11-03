import React, { useEffect, useState } from 'react';
import '../App.css';
import FormTitle from './FormTitle';
import FormInput from './FormInput';
import FormRadioButton from './FormRadioButton';
import FormSubmitButton from './FormSubmitButton';

const FORM_TITLE = "Coordinates Form";
const CORDS_RADIO_NAME = "Add by Cords";
const PLACE_RADIO_NAME ="Add by Place";

const CoordinatesForm = ({addPointToMap}) => {

    const [longtitude, setLongtitude] = useState(13.0827);
    const [langtitude, setLangtitude] = useState(80.2707);

    const onSubmit = (event)=>{
        event.preventDefault();
        addPointToMap(longtitude,langtitude);
    }

    const setLongtitudePosition = (event) =>{
        setLongtitude(event.target.value);
    }

    const setLangtitudePosition = (event) =>{
        setLangtitude(event.target.value);
    }
    return (
        <form onSubmit={onSubmit}>
        <FormTitle title={FORM_TITLE}/>
        <FormRadioButton name={"cordsOrPlace"} value={CORDS_RADIO_NAME}/>
        <FormRadioButton name={"cordsOrPlace"} value={PLACE_RADIO_NAME}/>
        <div className='colC'>
        <FormInput setPosition={setLongtitudePosition} />
        <FormInput setPosition={setLangtitudePosition}/>
        </div>
        <FormSubmitButton/>
        </form>
    )

}

export default CoordinatesForm;


