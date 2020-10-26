import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './containers/Layout'


function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
