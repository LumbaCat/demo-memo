/**
 * Fabrication du tableau sur la page HTML
 */

// Récupérer la div dont l'id est "first-div"
const firstDiv = document.getElementById("first-div");

// Création de la table HTML
const table = document.createElement("table"); // créer la table HTML

// Première boucle: sur chaque ligne du tableau des couleurs
arrayOfColors.forEach((line) => {
  let tr = document.createElement("tr"); // créer un élément tr (ligne HTML)

  // Deuxième boucle: sur chaque colonne de la ligne
  line.forEach((color) => {
    let td = document.createElement("td"); // créer un élément td (Case HTML)
    td.setAttribute("name", color); // Définir le nom de la couleur en tant que name de la case HTML (du td)
    td.setAttribute("class", "covered"); // Définir la couleur de départ ("covered" est défini dans le fichier css) pour la case HTML (du td)
    // Mettre le td dans le tr (mettre la case dans la ligne)
    tr.appendChild(td);
  });

  // Mettre le tr dans le table (mettre la ligne dans le tableau)
  table.appendChild(tr);
});

// Mettre l'élément table (notre tableau de couleurs) que l'on a créé dans la div "first-div" du document
// pour qu'il puisse apparaître sur la page
firstDiv.appendChild(table);
