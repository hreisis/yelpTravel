import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'typeface-aleo';
import 'font-awesome/css/font-awesome.css';
import App from './App';


//ReactDOM.render(<App />, document.getElementById('root'))

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>);