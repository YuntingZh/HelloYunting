'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

document.addEventListener('DOMContentLoaded', (event) => {
  // Fetch project data from JSON file
  fetch('./assets/data/projects.json')
    .then(response => response.json())
    .then(projects => {
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

      // Re-initialize filtering functionality after projects are added
      const filterBtn = document.querySelectorAll('[data-filter-btn]');
      const filterItems = document.querySelectorAll('[data-filter-item]');

      const filterFunc = (selectedValue) => {
        selectedValue = selectedValue.toLowerCase();
        filterItems.forEach(item => {
          const itemCategories = item.dataset.category.toLowerCase().split('|');
          if (selectedValue === 'all' || itemCategories.includes(selectedValue)) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      };

      filterBtn.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtn.forEach(button => button.classList.remove('active'));
          btn.classList.add('active');
          const selectedValue = btn.innerText.toLowerCase();
          filterFunc(selectedValue);
        });
      });

      // Add click event listener for pop-up functionality
      const projectLinks = document.querySelectorAll('.project-link');

      projectLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
          event.preventDefault();

          const project = projects[index];

          const modalImg = document.querySelector('[data-modal-img]');
          modalImg.src = project.imgSrc;
          modalImg.alt = project.imgAlt;

          const modalTitle = document.querySelector('[data-modal-title]');
          modalTitle.innerText = project.title;

          const modalText = document.querySelector('[data-modal-text]');
          modalText.innerText = project.description;

          const modalDate = document.querySelector('[data-modal-date]');
          modalDate.innerText = new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
          modalDate.setAttribute('datetime', project.date);

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
    });

  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

  const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");

  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  const testimonialsModalFunc = function () {
    if (modalContainer && overlay) {
      modalContainer.classList.toggle("active");
      overlay.classList.toggle("active");
    }
  }

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
    selectedValue = selectedValue.toLowerCase();
    for (let i = 0; i < filterItems.length; i++) {
      const itemCategories = filterItems[i].dataset.category.toLowerCase().split('|');
      if (selectedValue === "all" || itemCategories.includes(selectedValue)) {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    }
  }

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

  if (formInputs && form) {
    for (let i = 0; i < formInputs.length; i++) {
      formInputs[i].addEventListener("input", function () {
        if (form.checkValidity()) {
          formBtn.removeAttribute("disabled");
        } else {
          formBtn.setAttribute("disabled", "");
        }
      });
    }
  }
  //set the Projects as homepage when web load
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");
  // --------------------
  // Set the initial active page to "Projects"
  pages.forEach((page) => {
    if (page.dataset.page === "projects") {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });

  navigationLinks.forEach((link) => {
    if (link.innerHTML.toLowerCase() === "projects") {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Handle click events for navigation links
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
   // Add the "Back to Portfolio" button dynamically if there's a reference in the URL
   const urlParams = new URLSearchParams(window.location.search);
   const ref = urlParams.get('ref');

   if (ref) {
       // Create the "Back to Portfolio" button dynamically
       const backToPortfolioButton = document.createElement('li');
       backToPortfolioButton.classList.add('navbar-item');
       backToPortfolioButton.innerHTML = `
           <button class="navbar-link" onclick="window.location.href='${ref}.html'">Back to Portfolio</button>
       `;

       // Append the button to the navbar list
       document.querySelector('.navbar-list').appendChild(backToPortfolioButton);
   }
});
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.project-text');
  let index = 0;

  sections.forEach((section, i) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      index = i;
    }
  });

  // Update active progress item
  document.querySelectorAll('.progress-item').forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Update active Table of Contents item
  document.querySelectorAll('.toc-item').forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});
