// Je récupère mes élements qui se trouve dans mon main
let showElement = document.getElementById('main');

// Je crée les 2 nouveaux élements que je vais ajouter à ma liste
const addElement1 = document.createElement('h5')
const addElement2 = document.createElement('h5')

// J'ajoute ces elements à mon main
showElement.appendChild(addElement1);
showElement.appendChild(addElement2);

// Je converti mon tableau en HTML
addElement1.innerHTML = "TITRE 4";
addElement2.innerHTML = "TITRE 5";
showElement.innerHTML;

// J'affiche mon HTML dans ma console
console.log(showElement);


// SCRIPT BOUTON //

var count = 0;
var btn = document.getElementById("btn");
var num = document.getElementById("num");

btn.onclick = function() {
    count++;
    num.innerHTML = count;
}

// EXO JSON //

localStorage.setItem('person', 'Saif Sardahi');