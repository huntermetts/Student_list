import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import ReactDOM from 'react-dom'
import School from './components/School'

import './index.css'

ReactDOM.render(
        <Router>
            <School />
        </Router>
    ,document.getElementById('root'))
