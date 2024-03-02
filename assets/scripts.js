let currentIndex = 0;
const images = document.querySelectorAll(".gallery-item"); 
const lightbox = document.getElementById("lightbox"); 
const lightboxImage = document.getElementById("lightbox-img");

// Ajoute un gestionnaire d'événements à chaque image pour l'ouverture de la lightbox
images.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentIndex = index; // Met à jour l'indice de l'image actuelle
    openLightbox(); // Appelle la fonction pour ouvrir la lightbox
  });
});

// Fonction pour ouvrir la lightbox
function openLightbox() {
  lightbox.style.display = "flex"; // Affiche la lightbox
  lightboxImage.src = images[currentIndex].src; // Charge l'image actuelle dans la lightbox
}

// Fonction pour fermer la lightbox
function closeLightbox() {
  lightbox.style.display = "none"; // Masque la lightbox
}

// Fonction pour changer l'image dans la lightbox en fonction de la direction (1 ou -1)
function changeImage(direction) {
  currentIndex += direction; // Met à jour l'indice de l'image actuelle en fonction de la direction
  if (currentIndex < 0) currentIndex = images.length - 1; // Si on atteint le début, revenir à la fin
  if (currentIndex >= images.length) currentIndex = 0; // Si on atteint la fin, revenir au début
  lightboxImage.src = images[currentIndex].src; // Charge la nouvelle image dans la lightbox
}

// JavaScript pour le filtrage des images
const filterButtons = document.querySelectorAll('.nav-link[data-images-toggle]'); // Sélectionne les boutons de filtre
const items = document.querySelectorAll('.gallery-item'); // Sélectionne toutes les images à filtrer

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.imagesToggle; // Récupère la catégorie de filtre sélectionnée
        items.forEach(item => {
            const tag = item.dataset.galleryTag; // Récupère la catégorie de l'image
            item.parentNode.classList.toggle('hidden', !(filter === 'all' || tag === filter)); // Affiche ou masque l'image
        });
    });
});

// Ajout de la gestion des clics sur les éléments de navigation
document.querySelectorAll('.nav li').forEach(item => {
  item.addEventListener('click', function() {
    // Retire la classe 'active' de tous les éléments
    document.querySelectorAll('.nav li').forEach(el => el.classList.remove('active'));

    // Ajoute la classe 'active' à l'élément cliqué
    this.classList.add('active');
  });
});
