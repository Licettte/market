
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import  {StrictMode} from "react";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <StrictMode>
            <App/>
        </StrictMode>
    </BrowserRouter>
);
reportWebVitals();
