import React from 'react'
import ReactDOM from 'react-dom/client'
import Controller from './Controller.tsx'
import './index.css'
import store from './redux/store/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Controller />
    </Provider>
  </React.StrictMode>,
)
