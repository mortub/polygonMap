import React from 'react';
import CoordinatesForm from './components/CoordinatesForm';
import { Provider } from './providers/submissionInfoProvider';
import BingMap from './components/BingMap';

function App() {

    return (
        <Provider>
            <div className='rowC'>
                <BingMap/>
                <CoordinatesForm />
            </div>
        </Provider>
    )
}

export default App;
