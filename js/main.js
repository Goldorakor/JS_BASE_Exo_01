

// Sélectionne le carré et ajoute un écouteur d'événement
// On ajoute un écouteur d'évènement sur le bouton carré pour appeler une fonction ajout
document.querySelector('.carre').addEventListener('click', function(){
    const rectangle = document.getElementById('dialogue');
    const infotext = document.getElementById('infotext');


// innerHTML : Propriété qui permet de définir ou d'obtenir le contenu HTML d'un élément.


// getComputedStyle : Méthode qui retourne un objet contenant les styles calculés d'un élément, ce qui permet d'obtenir les valeurs CSS en vigueur.


// on récupère les propriétés CSS
const backgroundColor = window.getComputedStyle(this).backgroundColor;
const textColor = window.getComputedStyle(this).color; // Couleur du texte
const width = this.offsetWidth;
const height = this.offsetHeight;
const className = this.className; // Nom de la classe
const fontSize = window.getComputedStyle(this).fontSize; // Taille de la police
const display = window.getComputedStyle(this).display;
const padding = window.getComputedStyle(this).padding;


// Mise à jour du texte avec les propriétés
infotext.innerHTML = `
        Classe CSS : ${className}<br>
        Couleur de fond : ${backgroundColor}<br>
        Couleur du texte : ${textColor}<br>
        Largeur : ${width}px<br>
        Hauteur : ${height}px<br>
        Taille de la police : ${fontSize}<br>
        Display : ${display}<br>
        Padding : ${padding}
    `;

    rectangle.style.display = 'flex'; // Changer à 'flex' pour un affichage correct

});









