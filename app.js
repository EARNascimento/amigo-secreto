let amigos = [];


function adicionarAmigo(){
    let amigoDigitado = document.getElementById('amigo').value;
    amigoDigitado.innerHTML = '';

    if(amigoDigitado == ''){
        alert("Por favor, insira um nome!");
        //exibirTextoNaTela('h2', 'Por favor, insira um nome!')
    } else{
        amigos.push(amigoDigitado)
    }
    limparCampo()

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML= "";

    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
};

function sortearAmigo(){
    if(amigos.length <= 1){
        alert("Quantidade de nomes insuficiente!");
    } else {
        let numeroAleatorio = parseInt(Math.random() * amigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = amigos[numeroAleatorio];
    }
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo() {
    amigoDigitado = document.getElementById('amigo');
    amigoDigitado.value = "";
}

