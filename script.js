// Je récupère mes élements qui se trouve dans mon main
let showElement = document.getElementById('main');

// Je crée les 2 nouveaux élements que je vais ajouter à ma liste
const addElement1 = document.createElement('h5')
const addElement2 = document.createElement('h5')

// J'ajoute ces elements à mon main
showElement.appendChild(addElement1);
showElement.appendChild(addElement2);

// Je remplace mes précédents Element crée
var newElement1 = document.createTextNode("<h5>New Titre 4</h5>");
var newElement2 = document.createTextNode("<h5>New Titre 5</h5>");

showElement.replaceChild(newElement1, addElement1);
showElement.replaceChild(newElement2, addElement2);

// Je converti mon tableau en HTML
showElement.innerHTML;

// J'affiche mon HTML dans ma console
console.log(showElement);