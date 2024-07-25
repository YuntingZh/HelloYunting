'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Store Project Data in JavaScript
const projects = [
  {
    category: "Design Engineering|Product Design",
    imgSrc: "./assets/images/projects/op_heart_sync.png",
    imgAlt: "HeartSync",
    title: "HeartSync",
    categoryText: "Design Engineering, Product Design",
    description: "Detailed description of HeartSync project.",
    additionalImages: [
      "./assets/images/projects/heart_sync_1.png",
      "./assets/images/projects/heart_sync_2.png"
    ]
  },
  {
    category: "Design Engineering",
    imgSrc: "./assets/images/projects/op_NASAsuits.png",
    imgAlt: "NASA Suits",
    title: "EECS | NASA Suits Design Challenge",
    categoryText: "Design Engineering, Product Design",
    description: "Detailed description of NASA Suits Design Challenge project.",
    additionalImages: [
      "./assets/images/projects/nasa_suits_1.png",
      "./assets/images/projects/nasa_suits_2.png"
    ]
  },
  // Add more projects here...
];

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
  // Generate HTML Dynamically
  const projectList = document.querySelector('.project-list');

  projects.forEach(project => {
    const projectItem = document.createElement('li');
    projectItem.className = 'project-item active';
    projectItem.setAttribute('data-filter-item', '');
    projectItem.setAttribute('data-category', project.category);

    projectItem.innerHTML = `
      <a href="#" class="project-link">
        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
          <img src="${project.imgSrc}" alt="${project.imgAlt}" loading="lazy">
        </figure>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-category">${project.categoryText}</p>
      </a>
    `;

    projectList.appendChild(projectItem);
  });

  // Add click event listener for pop-up functionality
  const projectLinks = document.querySelectorAll('.project-link');

  projectLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const project = projects[index];
      
      modalImg.src = project.imgSrc;
      modalImg.alt = project.imgAlt;
      modalTitle.innerText = project.title;
      modalText.innerText = project.description;

      const additionalImagesContainer = document.querySelector('.modal-additional-images');
      additionalImagesContainer.innerHTML = '';
      project.additionalImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        additionalImagesContainer.appendChild(imgElement);
      });
      
      testimonialsModalFunc(); // Show the modal
    });
  });

  // Existing code
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  // sidebar toggle functionality for mobile
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

  const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");

  // modal variable
  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  // modal toggle function
  const testimonialsModalFunc = function () {
    if (modalContainer && overlay) {
      modalContainer.classList.toggle("active");
      overlay.classList.toggle("active");
    }
  }

  // add click event to all modal items
  if (testimonialsItem && modalContainer && modalCloseBtn && overlay) {
    for (let i = 0; i < testimonialsItem.length; i++) {
      testimonialsItem[i].addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
        testimonialsModalFunc();
      });
    }

    // add click event to modal close button
    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
    overlay.addEventListener("click", testimonialsModalFunc);
  }

  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-selecct-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");

  if (select) {
    select.addEventListener("click", function () { elementToggleFunc(this); });
  }

  // add event in all select items
  if (selectItems) {
    for (let i = 0; i < selectItems.length; i++) {
      selectItems[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
      });
    }
  }

  const filterItems = document.querySelectorAll("[data-filter-item]");

  const filterFunc = function (selectedValue) {
    selectedValue = selectedValue.toLowerCase(); // Ensure selected value is lowercase
    for (let i = 0; i < filterItems.length; i++) {
      const itemCategories = filterItems[i].dataset.category.toLowerCase().split('|');
      if (selectedValue === "all" || itemCategories.includes(selectedValue)) {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    }
  }

  // add event in all filter button items for large screen
  let lastClickedBtn = filterBtn[0];

  if (filterBtn) {
    for (let i = 0; i < filterBtn.length; i++) {
      filterBtn[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);
        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
      });
    }
  }

  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  // add event to all form input field
  if (formInputs && form) {
    for (let i = 0; i < formInputs.length; i++) {
      formInputs[i].addEventListener("input", function () {
        // check form validation
        if (form.checkValidity()) {
          formBtn.removeAttribute("disabled");
        } else {
          formBtn.setAttribute("disabled", "");
        }
      });
    }
  }

  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  // add event to all nav link
  if (navigationLinks && pages) {
    for (let i = 0; i < navigationLinks.length; i++) {
      navigationLinks[i].addEventListener("click", function () {
        for (let i = 0; i < pages.length; i++) {
          if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
            pages[i].classList.add("active");
            navigationLinks[i].classList.add("active");
            window.scrollTo(0, 0);
          } else {
            pages[i].classList.remove("active");
            navigationLinks[i].classList.remove("active");
          }
        }
      });
    }
  }
});
