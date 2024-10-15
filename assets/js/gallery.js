const gallery = document.querySelector('.gallery');

// Example data for now
const images = [
    { src: '../assets/images/projects/art_viusal/drawing_cats.jpg', description: 'Artwork 1' },
    { src: './art_visual/image2.png', description: 'Artwork 2' },
    { src: './art_visual/image3.png', description: 'Artwork 3' },
    { src: './art_visual/image4.png', description: 'Artwork 4' },
    { src: './art_visual/image5.png', description: 'Artwork 5' },
    { src: './art_visual/image6.png', description: 'Artwork 6' }
];

// Function to load images
images.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = image.description;
    
    const infoElement = document.createElement('div');
    infoElement.classList.add('info');
    infoElement.innerText = image.description;
    
    galleryItem.appendChild(imgElement);
    galleryItem.appendChild(infoElement);
    
    gallery.appendChild(galleryItem);
});
