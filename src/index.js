import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client'

import { Provider } from './context/context'
import App from './App'
import './index.css'

ReactDOM.render(
    <SpeechProvider appId='62c5c877-0fd4-4406-a38b-5c4915aa6803' language='en-US'>
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,

    document.getElementById('root')
);