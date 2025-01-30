// Arrays met de schilderijen van het ZIP-bestand
let paintings = [
    { name: 'Gertrude Stein', image: '/Schilderijen (Foto\'s)/gertrude-stein.jpeg' },
    { name: 'Girl Before a Mirror', image: '/Schilderijen (Foto\'s)/girl-before-a-mirror.jpeg' },
    { name: 'Guernica', image: '/Schilderijen (Foto\'s)/guernica.jpeg' },
    { name: 'Les Demoiselles d\'Avignon', image: '/Schilderijen (Foto\'s)/les-demoiselles-davignon.jpeg' },
    { name: 'Les Femmes d\'Alger', image: '/Schilderijen (Foto\'s)/les-femmes-dalger.jpeg' },
    { name: 'Self-Portrait Facing Death', image: '/Schilderijen (Foto\'s)/self-portrait-facing-death.jpeg' },
    { name: 'Self-Portrait', image: '/Schilderijen (Foto\'s)/self-portrait.jpeg' },
    { name: 'The Dream', image: '/Schilderijen (Foto\'s)/the-dream.jpeg' },
    { name: 'The Life', image: '/Schilderijen (Foto\'s)/the-life.jpeg' },
    { name: 'The Weeping Woman', image: '/Schilderijen (Foto\'s)/the-weeping-woman.jpeg' }
];

//  Dit is de functie om de schilderijen weer te geven
function renderGallery() {
    let galleryContainer = document.getElementById('gallery-container');
    galleryContainer.innerHTML = ''; //  Dit zorgt ervoor dat hij de gallerij leegt voordat hij opnieuw word gevuld (refresh)

    // Dit is de for-lus dit zorgt ervoor dat je de schilderijen ziet uit de array
    for (let i = 0; i < paintings.length; i++) {
        const painting = paintings[i];
        const paintingDiv = document.createElement('div');
        paintingDiv.classList.add('painting');

        let  paintingImage = document.createElement('img');
        paintingImage.src = painting.image;
        paintingImage.alt = painting.name;
        paintingImage.classList.add('square'); // afhankelijk van het schilderij
        paintingDiv.appendChild(paintingImage);

        let  paintingName = document.createElement('p');
        paintingName.textContent = painting.name;
        paintingDiv.appendChild(paintingName);

        // Verwijderknop voor elk die er is schilderij
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Verwijderen';
        removeButton.classList.add('remove-btn');
        removeButton.onclick = () => removePainting(i);
        paintingDiv.appendChild(removeButton);

        galleryContainer.appendChild(paintingDiv);
    }
}

//  Dit is de functie om een schilderij toe te voegen via het formulier
function addPainting() {
    let name = document.getElementById('painting-name').value;
    let  image = document.getElementById('painting-image').value;

    // Controleer of het formulier correct is ingevuld
    if (name && image) {
        paintings.push({ name, image }); // Voegt de nieuwe schilderij toe aan de array
        renderGallery(); // Update de galerij met de nieuwe schilderij
        document.getElementById('painting-name').value = ''; // Maak het naamveld leeg
        document.getElementById('painting-image').value = ''; // Maak het afbeeldingspad veld leeg
    } else {
        alert('Je moet een naam en een afbeeldingspad invullen anders werkt het niet.');
    }
}

//  Dit is de functie om een schilderij te verwijderen
function removePainting(index) {
    if (index >= 0 && index < paintings.length) {
        paintings.splice(index, 1); //  Hiermee verwijder je het schilderij uit de array
        renderGallery(); // Update de galerij
    } else {
        alert('Schilderij niet gevonden.');
    }
}

// "Zorgt ervoor dat de galerij automatisch wordt gevuld met de schilderijen zodra de pagina wordt geladen."
window.onload = renderGallery;
