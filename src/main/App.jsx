import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react';
import Nav from '../components/templates/Nav'
import Footer from '../components/templates/Footer'
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'



export default props =>
    <BrowserRouter>
        <div className="app">
            <Nav />
            <Routes /> 
            <Footer />
        </div>
    </BrowserRouter>

