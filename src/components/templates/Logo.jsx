import './Logo.css'
import React from 'react'
import Logo from '../../assets/img/home-logo.png'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={Logo} alt="logo" />
        </Link><h5 className="hidden mt-3">DevBank</h5>
    </aside>