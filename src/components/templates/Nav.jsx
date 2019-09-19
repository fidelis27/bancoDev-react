import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import logo from '../../assets/img/logo.png'
import Navbar from 'react-bootstrap/Navbar'

export default props =>
    <React.Fragment>
        <Navbar className="menu" expand='lg'>

            <Link className="navbar-brand" to="/">
                <img src={logo} height="35" className="d-inline-block align-top" alt="Logo banco do DEV" title="Banco do dev" />
                DevBank
        </Link>
            <Navbar.Toggle aria-controls="navbarBank" />
            <Navbar.Collapse id="navbarBank">
                <nav className="navbar-nav">

                    <Link className='nav-link' to="/">
                        <i className="fa fa-home"></i> Início
                    </Link>

                    <Link className='nav-link' to="/about">
                        <i className="sobre"></i> Sobre
                    </Link>
                    <Link className='nav-link' to="/operacao">
                        <i className="operacao"></i> Operações
                    </Link>
                    <Link className='nav-link' to="/simulation">
                        <i className="simulation"></i> Simulador
                    </Link>

                </nav>

            </Navbar.Collapse>
        </Navbar>


    </React.Fragment>

