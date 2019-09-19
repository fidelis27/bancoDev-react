import React from 'react'
import '../../assets/js/script'
import logo from '../../assets/img/logo.png'
import Main from '../templates/Main'
import Collapse from 'react-bootstrap/Collapse'

       

class Operacao extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapseDep: false,
            collapseSac: false,
            saldo: 0,
            carteira: 1000,
        }
    }
  
    updateField(carteira, saldo){
        
        this.setState({carteira:carteira})
        this.setState({saldo:saldo})
        
    }

    deposito() {
        
        let saldo = this.state.saldo
        let carteira= this.state.carteira

        let valor = document.querySelector('input#valorD').value;
        
        
        console.log(valor)
        if (this.state.carteira < valor) {
            alert('Valor na carteira insuficiente!');
        } else {
            saldo += Number(valor);  
            carteira -= valor;
            console.log(carteira)     
            this.updateField(carteira, saldo)      
                    
        }
    }

    saque() {
        
        let saldo = this.state.saldo
        let carteira= this.state.carteira

        let valor = document.querySelector('input#valorS').value;
        
        
        console.log(valor)
        if (this.state.saldo < valor) {
            alert('Saldo insuficiente!');
        } else {
            saldo -= Number(valor);  
            carteira += Number(valor);
            console.log(carteira)     
            this.updateField(carteira, saldo)      
                    
        }
    }
    changeStateCollapseDev(e) {
        this.state.collapseDep ? this.setState({ collapseDep: false }) : this.setState({ collapseDep: true })
    }
    changeStateCollapseSac(e) {
        this.state.collapseSac ? this.setState({ collapseSac: false }) : this.setState({ collapseSac: true })
    }
    renderOperacao() {
        return (<div className="container rounded mt-5">
            <div className="text-center">
                <img src={logo} alt='logo' />
                <h1 className="display-3 text-center">Qual operação deseja realizar?</h1>
            </div>
            <div className="row text-center">
                <h1 className="display-4 col carteira">Carteira:<br /> <span ref='dep' id="carteira" >{`${this.state.carteira} coin(s)`}</span></h1>
                <h1 className="display-4 col">Banco:<br /> <span ref='sal' id="saldo">{`${this.state.saldo} coin(s)`}</span></h1>
            </div>
            <hr />
            <div className="pb-2 row">
                <div className="col">
                    <button  className="btn btn-lg btn-block mb-3 btn-info " type="button" data-toggle=".collapseDep"
                        data-target=".collapseDep" onClick={(e) => this.changeStateCollapseDev(e)}
                        aria-controls="collapseDep" >
                        Depósito
                    </button>
                    <Collapse in={this.state.collapseDep}>
                        <div className="collapsDep mb-3" id="collapseDep">
                            <div className="card card-body">
                                <h3>Valor:</h3>
                                <input className="mb-1" id="valorD" type="number" />
                                <button type='button' onClick={() => this.deposito()}>Depositar</button>
                            </div>
                        </div>
                    </Collapse>
                </div>

                <div className="col">
                    <button  className="btn btn-lg btn-block mb-3 btn-info" type="button" data-toggle="collapseSac"
                        data-target=".collapseSac" onClick={(e) => this.changeStateCollapseSac(e)}
                        aria-controls="collapseSac">
                        Saque
                </button>
                    <Collapse in={this.state.collapseSac}>
                        <div className="collapseSac mb-3" id="collapseSac">
                            <div className="card card-body">
                                <h3>Valor:</h3>
                                <input className="mb-1" id="valorS" type="number" />
                                <button type='button' onClick={() => this.saque()}>Sacar</button>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
        )

    }
    render() {
        return (

            <Main>
                {this.renderOperacao()}
            </Main>)
    }

}

export default Operacao







