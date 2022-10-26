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

// Affiché nom prenom clé person dans l'appli stocakge locale
localStorage.setItem('person', 'Saif Sardahi');

// Crée 2 voitures et l'afficher sur le site
let voiture1 = {
    marque: "Volkswagen",
    modele: "golf",
    couleur: "rouge",
    annee: 2014,
    km: 14000
}

let voiture2 = {
    marque: "Peugeot",
    modele: "308",
    couleur: "gris",
    annee: 2020,
    km: 8000
}

let finalVoiture1 = JSON.stringify(voiture1);
let finalVoiture2 = JSON.stringify(voiture2);
localStorage.setItem("car1", finalVoiture1);
localStorage.setItem("car2", finalVoiture2);

finalVoiture1 = localStorage.getItem("car1");
finalVoiture2 = localStorage.getItem("car2");
voiture1 = JSON.parse(finalVoiture1);
voiture2 = JSON.parse(finalVoiture2);

let newCar = document.getElementById('newcar');

const addCar1 = document.createElement('p');
const addCar2 = document.createElement('p');

newCar.appendChild(addCar1);
newCar.appendChild(addCar2);

addCar1.innerHTML = voiture1.marque + voiture1.modele + voiture1.couleur + voiture1.annee + voiture1.km;
addCar2.innerHTML = voiture2;
newCar.innerHTML;