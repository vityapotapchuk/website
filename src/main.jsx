import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import logo from "./HURAGAN_logo.png";



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App logo={logo} />
    </React.StrictMode>,
)


