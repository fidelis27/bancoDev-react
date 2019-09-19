/* 
let txtSaldo = document.querySelector('span#saldo');
let saldo = 0;
let carteira = 1000;
let txtCarteira = document.querySelector('#carteira').innerHTML =`${carteira} coin(s)`;
console.log(txtCarteira)
txtCarteira.innerHTML = `${carteira} coin(s)`;

 function deposito() {
    let valor = document.querySelector('input#valorD').value;
    if (carteira < valor) {
        alert('Valor na carteira insuficiente!');
    } else {
        saldo += Number(valor);
        txtSaldo.innerHTML = `${saldo} coin(s)`;
        carteira -= valor;
        txtCarteira.innerHTML = `${carteira} coin(s)`;
    }
}

function saque() {
    let valor = document.querySelector('input#valorS').value;
    if (saldo < valor) {
        alert('Saldo insuficiente!');
    } else {
        saldo -= valor;
        carteira += Number(valor);
        txtSaldo.innerHTML = `${saldo} coin(s)`;
        txtCarteira.innerHTML = `${carteira} coin(s)`;
    }
}

export default (saque, deposito) */