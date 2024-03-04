import React from 'react'
import ReactDOM from 'react-dom/client'
import Controller from './Controller.jsx'
import './index.css'
import store from './redux/store/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Controller />
    </Provider>
  </React.StrictMode>,
)
