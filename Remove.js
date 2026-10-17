
const list1 = document.querySelector('.list1');

let listaDestino; 

if (list1) {
    const list1_ul = document.createElement('ul');
    
    while (list1.firstChild) {
        list1_ul.appendChild(list1.firstChild);
    }
    
    list1.replaceWith(list1_ul);
    
    
    listaDestino = list1_ul; 
}


const h2 = document.querySelector('h2');
if (h2) {
    h2.classList.add("colorLetra", "fondo", "cursiva");
}


const removerLista = document.querySelector('.item4');
if (removerLista) {
    removerLista.remove();
}

const nuevoItem = document.createElement('li'); 
nuevoItem.textContent = 'recoger a los niños';


if (listaDestino) {
    listaDestino.appendChild(nuevoItem);
}

const hecho = document.querySelector('.item1')

if (hecho) {
    hecho.classList.add("cumplido");
}


const falta = document.querySelector('.item2')

if (falta) {
    falta.classList.add("fallo");
}

nuevoItem.classList.add("cumplido");