import './index.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {Toaster} from 'react-hot-toast';

import App from './App.jsx';
import store from './Redux/Slices/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <BrowserRouter>
    <App />
    <Toaster/>
    </BrowserRouter> 
    </Provider>
);
