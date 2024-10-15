const gallery = document.querySelector('.gallery');

// Define image data with tags
const images = [
    { src: '../assets/images/projects/art_viusal/3D_Art_Competition.png', description: '3D Art Competition', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/AI_stable_diffusion.png', description: 'AI Stable Diffusion', tags: ['AI Work'] },
    { src: '../assets/images/projects/art_viusal/blender_animation.png', description: 'Blender Animation', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_animation2.png', description: 'Blender Animation 2', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_boat.png', description: 'Blender Boat', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_book.png', description: 'Blender Book', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_city.png', description: 'Blender City', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_cookie_wirebaking.png', description: 'Blender Cookie Wirebaking', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_earring.gif', description: 'Blender Earring', tags: ['3D', 'GIF'] },
    { src: '../assets/images/projects/art_viusal/blender_fabrication.png', description: 'Blender Fabrication', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_ghost.png', description: 'Blender Ghost', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_gress.png', description: 'Blender Gress', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_gress2.png', description: 'Blender Gress 2', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_Jar.gif', description: 'Blender Jar GIF', tags: ['3D', 'GIF'] },
    { src: '../assets/images/projects/art_viusal/blender_jar.png', description: 'Blender Jar', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_jellyfish1.png', description: 'Blender Jellyfish 1', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_lab.png', description: 'Blender Lab', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_lab2.png', description: 'Blender Lab 2', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_monster.png', description: 'Blender Monster', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_moths.png', description: 'Blender Moths', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_myPuzzleGame.png', description: 'Blender My Puzzle Game', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_pool.png', description: 'Blender Pool', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_render_trees.png', description: 'Blender Render Trees', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/blender_ves.png', description: 'Blender Ves', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/digitalsketch_ai.png', description: 'Digital Sketch AI', tags: ['Digital 2D', 'AI Work'] },
    { src: '../assets/images/projects/art_viusal/digitalsketch_cats.jpg', description: 'Digital Sketch Cats', tags: ['Digital 2D'] },
    { src: '../assets/images/projects/art_viusal/digitalsketch_demon_slayer.jpg', description: 'Digital Sketch Demon Slayer', tags: ['Digital 2D'] },
    { src: '../assets/images/projects/art_viusal/digitalsketch_food.jpg', description: 'Digital Sketch Food', tags: ['Digital 2D'] },
    { src: '../assets/images/projects/art_viusal/digitalsketch_geko.png', description: 'Digital Sketch Geko', tags: ['Digital 2D'] },
    { src: '../assets/images/projects/art_viusal/digitalsketch_physco.png', description: 'Digital Sketch Physco', tags: ['Digital 2D'] },
    { src: '../assets/images/projects/art_viusal/digitalsketch_room.JPG', description: 'Digital Sketch Room', tags: ['Digital 2D'] },
    { src: '../assets/images/projects/art_viusal/digitalsketch_self.png', description: 'Digital Sketch Self', tags: ['Digital 2D'] },
    { src: '../assets/images/projects/art_viusal/digitalsketch_yucatan.PNG', description: 'Digital Sketch Yucatan', tags: ['Digital 2D'] },
    { src: '../assets/images/projects/art_viusal/sketch_2D_art.png', description: 'Sketch 2D Art', tags: ['Sketch'] },
    { src: '../assets/images/projects/art_viusal/sketch_drawing_pen.jpg', description: 'Sketch Drawing Pen', tags: ['Sketch'] },
    { src: '../assets/images/projects/art_viusal/sketch_old_drawing.jpg', description: 'Old Drawing Sketch', tags: ['Sketch'] },
    { src: '../assets/images/projects/art_viusal/sketch_old_drawing3.jpg', description: 'Old Drawing Sketch 3', tags: ['Sketch'] },
    { src: '../assets/images/projects/art_viusal/sketch_old_drawing4.jpg', description: 'Old Drawing Sketch 4', tags: ['Sketch'] },
    { src: '../assets/images/projects/art_viusal/sketch_old_drawing6.jpg', description: 'Old Drawing Sketch 6', tags: ['Sketch'] },
    { src: '../assets/images/projects/art_viusal/sketch_old_drawing8.jpg', description: 'Old Drawing Sketch 8', tags: ['Sketch'] },
    { src: '../assets/images/projects/art_viusal/sketch_stamp.png', description: 'Sketch Stamp', tags: ['Sketch'] },
    { src: '../assets/images/projects/art_viusal/sketch_waterColor.JPG', description: 'Watercolor Sketch', tags: ['Sketch'] },
    { src: '../assets/images/projects/art_viusal/sketch_watercolor.png', description: 'Watercolor Sketch PNG', tags: ['Sketch'] },
    { src: '../assets/images/projects/art_viusal/sketch_waterColor2.JPG', description: 'Watercolor Sketch 2', tags: ['Sketch'] },
    { src: '../assets/images/projects/art_viusal/unreal_ocean.gif', description: 'Unreal Ocean GIF', tags: ['3D', 'GIF'] },
    { src: '../assets/images/projects/art_viusal/unreal_ocean2.gif', description: 'Unreal Ocean 2 GIF', tags: ['3D', 'GIF'] },
    { src: '../assets/images/projects/art_viusal/unreal_render.png', description: 'Unreal Render', tags: ['3D'] },
    { src: '../assets/images/projects/art_viusal/digitalsketch_dancer.PNG', description: 'Digital Sketch Dancer', tags: ['Digital 2D'] },
    { src: '../assets/images/projects/art_viusal/digitalsketch_watercolor_freso.PNG', description: 'Digital Sketch Watercolor Fresco', tags: ['Digital 2D'] },
    { src: '../assets/images/projects/art_viusal/digitalsketch_young_girl.PNG', description: 'Digital Sketch Young Girl', tags: ['Digital 2D'] },
    { src: '../assets/images/projects/art_viusal/sketch_bag_not_original.jpeg', description: 'Sketch Bag Not Original', tags: ['Sketch'] },
    { src: '../assets/images/projects/art_viusal/sketch_bags.jpeg', description: 'Sketch Bags', tags: ['Sketch'] },
    { src: '../assets/images/projects/art_viusal/sketch_watercolor_anime.jpeg', description: 'Watercolor Sketch Anime', tags: ['Sketch'] },
    { src: '../assets/images/projects/art_viusal/sketch_watercolor_cats.jpeg', description: 'Watercolor Sketch Cats', tags: ['Sketch'] },
    { src: '../assets/images/projects/art_viusal/sketch_watercolor_char.jpeg', description: 'Watercolor Sketch Character', tags: ['Sketch'] },
    { src: '../assets/images/projects/art_viusal/sketch_watercolor_dragon.JPG', description: 'Watercolor Sketch Dragon', tags: ['Sketch'] },
    { src: '../assets/images/projects/art_viusal/sketch_watercolor_vessel.jpeg', description: 'Watercolor Sketch Vessel', tags: ['Sketch'] }

];


// Function to load images based on selected filter
function loadImages(filterTag) {
    gallery.innerHTML = ''; // Clear the gallery
    const filteredImages = filterTag === 'All' ? images : images.filter(image => image.tags.includes(filterTag));

    filteredImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.description;

        const infoElement = document.createElement('div');
        infoElement.classList.add('info');
        //infoElement.innerText = image.description;

        galleryItem.appendChild(imgElement);
        galleryItem.appendChild(infoElement);

        gallery.appendChild(galleryItem);
    });
}

// Add event listeners for filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterTag = button.dataset.filter;
        loadImages(filterTag);
    });
});

// Load all images on initial load
loadImages('All');
