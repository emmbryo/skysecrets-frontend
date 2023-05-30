/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { history } from './history'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter history={history}>
        <App />
    </ BrowserRouter>
)
