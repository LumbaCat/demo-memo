/**
 * Création du tableau des couleurs pour le jeu memo, avec les couleurs placées au hasard
 */

// Tableau des couleurs vide mais qu'on va remplir pour le jeu memo, sur lequel on va jouer
const arrayOfColors = [[], [], [], []];

// Liste des couleurs du jeu de memo
const allColors = [
  "blue", "green", "yellow", "red", "violet", "pink", "orange", "brown",
  "blue", "green", "yellow", "red", "violet", "pink", "orange", "brown"
];

// Fonction qui permet de générer un nombre au hasar entre un min inclus et un max exclus
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Fabrication d'une liste qui contient les index de la liste "allColors" dans un ordre aléatoire
const randomIndexes = [];
while (randomIndexes.length < allColors.length) {
  let randomInt = getRandomInt(0, allColors.length);
  if (!randomIndexes.includes(randomInt)) {
    randomIndexes.push(randomInt);
  }
}

// Index qui va parcourir la liste "randomIndexes"
let x = 0;
// Pour chaque ligne de "arrayOfColors"
arrayOfColors.forEach((line) => {
  // On va ajouter 4 colonnes
  // (donc on fait une boucle "for" pour répéter 4 fois l'ajout d'une couleur dans la ligne)
  for (let i = 0; i < 4; i++) {
    // x est l'index de l'index suivant de la liste des index aléatoires
    // randomIndexes[x] est l'index suivant de la liste des index aléatoires
    // allColors[randomIndexes[x]] est une couleur choisie au hasard parmi les couleurs de "allColors"
    // line.push(...) permet d'ajouter la couleur à la ligne de "arrayOfColors"
    line.push(allColors[randomIndexes[x]]);
    // on passe à l'index suivant en faisant monter x de 1.
    x++;
  }
});
