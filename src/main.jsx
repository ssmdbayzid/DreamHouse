import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/router.jsx'
import Wrapper from './wrapper/Wrapper.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Wrapper>
    <RouterProvider router={router} />
    <ToastContainer 
    theme="dark"
    position="top-right"
    autoClose={3000}
    closeOnClick
    pauseHover={false} 
    />
    </Wrapper>
  </React.StrictMode>,
)
