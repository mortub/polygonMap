import { createContext, useReducer } from 'react';

const CORDS_RADIO_NAME = "Add by Cords";
const PLACE_RADIO_NAME = "Add by Place";

export const MARK_POINT_TYPES = {
    PLACE: PLACE_RADIO_NAME,
    CORDS: CORDS_RADIO_NAME
}

const initialState = {
    inputPoint: [0, 0],
    radioButtonValue: MARK_POINT_TYPES.PLACE,
    submitted: false
}

function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_POINT':
            return {
                ...state,
                inputPoint: action.payload
            };
        case 'UPDATE_RADIO_BUTTON_VALUE':
            return {
                ...state,
                radioButtonValue: action.payload
            };
        case 'UPDATE_SUBMITTED':
            return {
                ...state,
                submitted: action.payload
            };
        default:
            return initialState;
    }
}


export const context = createContext(null);

export const Provider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <context.Provider value={{state:state, dispatch:dispatch}}>
            {children}
        </context.Provider>
    )
}
