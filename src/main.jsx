import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Routes from './Router.jsx'
import {SearchProvider} from './SearchContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
      <Routes />
    </SearchProvider>
  </React.StrictMode>,
)
