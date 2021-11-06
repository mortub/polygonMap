import React, { useContext, useState } from 'react';
import '../App.css';
//components
import FormTitle from './FormTitle';
import FormInput from './FormInput';
import FormRadioButton from './FormRadioButton';
import FormSubmitButton from './FormSubmitButton';
//contexts
import { context, MARK_POINT_TYPES } from '../providers/submissionInfoProvider';

const FORM_TITLE = "Coordinates Form";
const CORDS_RADIO_NAME = "Add by Cords";
const PLACE_RADIO_NAME = "Add by Place";
const FIRST_POINT = [31.78469524587205, 31.74979601165678];

const CoordinatesForm = () => {
    const { dispatch } = useContext(context);
    const [radioButtonValue, setRadioButtonValue] = useState(MARK_POINT_TYPES.PLACE);
    const [inputPoint, setInputPoint] = useState(FIRST_POINT);

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'UPDATE_RADIO_BUTTON_VALUE', payload: radioButtonValue });
        dispatch({ type: 'UPDATE_POINT', payload: inputPoint });
        dispatch({ type: 'UPDATE_SUBMITTED', payload: true });
    }

    const setLongtitudePosition = (event) => {
        if (!isNaN(event.target.value)) {
            let long = parseFloat(event.target.value);
            let lang = inputPoint[0];
            let point = [lang, long];
            setInputPoint(point);
        }
    }

    const setLangtitudePosition = (event) => {
        if (!isNaN(event.target.value)) {
            let long = inputPoint[1];
            let lang = parseFloat(event.target.value);
            let point = [lang, long];
            setInputPoint(point);
        }
    }

    const onChangeRadioButtonValue = (event) => {
        setRadioButtonValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit} >
            <FormTitle title={FORM_TITLE} />
            <div>
                <div onChange={onChangeRadioButtonValue}>
                    <FormRadioButton name={"cordsOrPlace"} value={CORDS_RADIO_NAME} radioButtonValue={radioButtonValue} />
                    <FormRadioButton name={"cordsOrPlace"} value={PLACE_RADIO_NAME} radioButtonValue={radioButtonValue} />
                </div>
                <div className="formColumns">
                    <div className="colC">
                        <FormInput setPosition={setLongtitudePosition} />
                        <FormInput setPosition={setLangtitudePosition} />
                    </div>
                    <FormSubmitButton />
                </div>
            </div>
        </form>
    )
}

export default CoordinatesForm;


