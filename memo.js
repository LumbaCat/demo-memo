// Declarations
const colors1 = ["blue", "green", "yellow", "red"];
const colors2 = ["gray", "white", "black", "orange"];
const colors3 = ["lila", "pink", "kaki", "brown"];
const colors4 = ["abc", "edf", "hjg", "mlo"];
const arrayOfColors = [colors1, colors2, colors3, colors4];

// Récupérer la div dont l'id est "first-div"
const firstDiv = document.getElementById("first-div");

// Création de la table HTML
const table = document.createElement("table"); // créer la table

// Première boucle: sur chaque ligne du tableau des couleurs
arrayOfColors.forEach((line) => {
  let tr = document.createElement("tr"); // créer un élément tr (ligne HTML)

  // Deuxième boucle: sur chaque colonne de la ligne
  line.forEach((color) => {
    let td = document.createElement("td"); // créer un élément td (Case HTML)
    td.innerHTML = color; // Ajouter le texte (le nom de la couleur) dans la case HTML (dans le td)
    // Mettre le td dans le tr (mettre la case dans la ligne)
    tr.appendChild(td);
  });

  // Mettre le tr dans le table (mettre la ligne dans le tableau)
  table.appendChild(tr);
});

// Mettre l'élément table que l'on a créé dans la div "first-div" du document
firstDiv.appendChild(table);
