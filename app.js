let amigos = [];

let listaAmigos = document.getElementById('listaAmigos');

let result = document.getElementById('resultado');
console.log(result);


// let amigoSecreto = amigoSorteado();
//let amigoSecreto = sortearAmigo();
function agregarAmigo () {
    let amigo = document.getElementById('amigo').value;
    
    console.log(amigo);
    // console.log(typeof(amigo));
    if(amigo == ''){
        alert('Debe ingresar un nombre');
    } else {
        
        amigos.push(amigo);
        // console.log(amigo);
        listaAmigoSecreto();
        limpiar();
        
    }
    return;
}

function listaAmigoSecreto() {
    //let imprimirLista = document.getElementById('listaAmigos').value;
    listaAmigos.textContent = '';
    for(let i = 0; i < amigos.length; i++){
        let elementosLista = document.createElement('li');
        elementosLista.textContent = amigos[i];// se usa texContent para que no se interprete como html,sea mas seguro y eficiente.
        listaAmigos.appendChild(elementosLista); //enviar elemento hijo a elemento padre(array= []).
    }

    // listaAmigos.innerHTML = ''; // Limpia la lista antes de actualizarla
    // amigos.forEach(amigo => { // callback
    // const nuevoLi = document.createElement('li');
    // nuevoLi.textContent = amigo;
    // listaAmigos.appendChild(nuevoLi);

    // listaAmigos.innerHTML = '';
    // for(let i = 0; i < amigos.length; i++){
    //     let elementosLista = document.createElement('li');
    //     elementosLista.innerHTML = amigos[i];
    //     listaAmigos.appendChild(elementosLista);
    //     console.log(elementosLista);
    // }

}

function limpiar(){
    // let valorCaja = document.getElementById('amigo').value = '';
    // //value = '';
    document.getElementById('amigo').value = '';
}


function sortearAmigo() {
    result.textContent = '';
    if(amigos.length === 0){
        result.textContent = 'No hay amigos para sortear';
        return;
    } else {
        let amigoSecreto = amigos[amigoSorteado()];
        result.textContent = `El amigo secreto sorteado es: ${amigoSecreto}`;
        listaAmigos.textContent = '';
    }
}

function amigoSorteado() {
    return Math.floor(Math.random() * amigos.length)+1;

}

