import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Navbar from 'react-bootstrap/Navbar'

export default props =>
    <React.Fragment>
        <Navbar className="menu-area mt-12"  >
                 <nav className="navbar-nav"> 

                    <Link className='nav-link' to="/">
                        <i className="fa fa-home home"></i> Início
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
                 

            {/* </Navbar.Collapse> */}
        </Navbar>
    


    </React.Fragment>

