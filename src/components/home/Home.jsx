import React from 'react'
import  { Link } from 'react-router-dom'
import Main from '../templates/Main'
import './Home.css'
import money from '../../assets/img/money.png'
import simulation from '../../assets/img/simulation.png'
import sobre from '../../assets/img/sobre.png'
import HomeLogo from '../../assets/img/home-logo.png'

export default props =>
    <Main icon="home" title="Início">
        <div class="jumbotron p-4 my-1">
       <h1 class="display-4">Bem Vindo!</h1>
        <p class="lead m-1">Sistema para exemplificar a construção
            de um Banco em React</p>
       </div>
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col "><img  className="img-fluid " src={HomeLogo} alt='logo' /></div>
                <div className="col text-center"><h1 className="display-3">DevBank</h1><p className="lead">O banco do desenvolvedor.</p></div>
            </div>
            <article className="row">
                <article>
                    <p></p>
                </article>
            </article>
            <article className="row">
                <article className="col text-center">
                    <img src={money} alt='money' />
                    <h4>Consultar saldo</h4>
                    <p>Consulte o saldo em sua conta e faça uma operação se necessário.</p>
                    <Link to="/operacao" className="btn btn-primary mb-5">Acessar saldo</Link>
                </article>
                <article className="col text-center">
                    <img src={sobre} alt='sobre' />
                    <h4>Sobre nós</h4>
                    <p>Conheça nossa história, origem e objetivos como empresa.</p>
                    <Link to="/sobre" className="btn btn-primary mb-5">Acessar conteúdo</Link>
                </article>
                <article className="col text-center">
                    <img src={simulation} alt='simulation' />
                    <h4>Simulação</h4>
                    <p>Deseja fazer um emprestimo ou investir seu dinheiro? Faça uma simulação antes.</p>
                    <Link to="/simulator" className="btn btn-primary mb-5">Acessar simulador</Link>
                </article>
            </article>
        </div>
    </Main>