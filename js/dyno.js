/**
 * Ajout de la partie "dynamique": action après un clic
 */

// Récupérer la liste de tous les td du tableau
const htmlCollectionOfTds = document.getElementsByTagName("td");
const tds = [].slice.call(htmlCollectionOfTds);

// Pour chaque td
tds.forEach((td) => {
  // Ajouter une action "onclick" avec la fonction "turn" définie plus bas
  td.onclick = function () {
    turn(this);
  };
});

// Fonction qui change la couleur d'une case du tableau après un clic
function turn(td) {
  let colorClass = td.getAttribute("class");
  let color = td.getAttribute("name");
  // Si la case est "covered" (grise) alors passer à la couleur de son name
  if (colorClass === "covered") {
    td.setAttribute("class", color);
    // Sinon (si la case est déjà retourné), alors on la remet "covered" (grise)
  } else {
    td.setAttribute("class", "covered");
  }
}
