import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

import { $ } from 'utils/dom'

import './index.css'

ReactDOM.createRoot($('#root')).render(
  <Router>
    <App />
  </Router>
)