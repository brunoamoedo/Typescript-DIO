var botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
var botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
var soma = document.getElementById('soma') as HTMLInputElement;
var campoSaldo:any = document.getElementById('campo-saldo') as HTMLSpanElement;
var count:number = 0
/**
    
 */
campoSaldo.innerHTML=count


function somarAoSaldo(soma) {

    count = count + parseInt(soma)
    campoSaldo.innerHTML=''
    campoSaldo.innerHTML=count
}

function limparSaldo() {
    count = 0
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

