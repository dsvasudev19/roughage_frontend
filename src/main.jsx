import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Routes from './Router.jsx'
import {SearchProvider} from './SearchContext.jsx'
import {Toaster} from 'react-hot-toast'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
      <Routes />
      <Toaster position="top-right" reverseOrder={true} />

    </SearchProvider>
  </React.StrictMode>,
)
