'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
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
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
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



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

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



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
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



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
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
const thesisVideo = document.getElementById("thesisVideo");

if (thesisVideo) {

  thesisVideo.addEventListener("loadedmetadata", function () {
    thesisVideo.currentTime = 37;
  });

  thesisVideo.addEventListener("canplay", function () {
    thesisVideo.play().catch(function () {
      console.log("Autoplay was blocked by the browser.");
    });
  });

}


const certificates = {

  cert1: {
    image: "./assets/images/magna.jpg",
    title: "Magna Cum Laude",
    issuer: "National University - Laguna",
    description: "Certificate awarded for achieving the highest academic distinction in recognition of outstanding performance and excellence in studies."
  },

  cert2: {
    image: "./assets/images/operation.jpg",
    title: "Recognition for being part of Operation Department",
    issuer: "  Council of Leaders NU-Laguna (2024-2025)",
    description: "This certificate recognizes my contribution to NU-Laguna's Council of Leaders, where I played a key role in the Operation Department, ensuring the smooth execution of events and activities."
  },

  cert3: {
    image: "./assets/images/hackathon.jpg",
    title: "2nd Place Winner of CSS Day Hackathon",
    issuer: "National University - Laguna",
    description: "This certificate recognizes my achievement as a 2nd place winner in the CSS Day Hackathon organized by National University - Laguna."
  },

  cert4: {
    image: "./assets/images/toeic.jpg",
    title: "TOEIC Certificate",
    issuer: "International Testing Service",
    description: "This certificate recognizes my English language proficiency, demonstrated through my TOEIC examination score of 870 points. The result reflects my ability to effectively understand and communicate in English within professional and academic contexts."
  } ,

  
  cert5: {
    image: "./assets/images/Intro.png",
    title: "Introduction to Cybersecurity Certificate",
    issuer: "Cisco Networking Academy",
    description: "This certificate recognizes my completion of the Introduction to Cybersecurity course, where I gained foundational knowledge in cybersecurity principles and practices."
  } ,
  cert6: {
    image: "./assets/images/OJT.jpg",
    title: "On-the-Job Training Certificate of Recognition",
    issuer: "P.C.M cosmetic Products Trading",
    description: "This certificate recognizes my exemplary performance and successful completion of the On-the-Job Training program at P.C.M Cosmetic Products Trading, where I gained practical experience and contributed to the company's operations."

  }
};

document.querySelectorAll(".certificate-card").forEach(card => {

  card.addEventListener("click", function(event) {

    event.preventDefault();

    const certificateID = this.dataset.certificate;

    const certificate = certificates[certificateID];

    if (!certificate) {
      console.log("Certificate not found:", certificateID);
      return;
    }

    document.getElementById("certificateModalImage").src =
      certificate.image;

    document.getElementById("certificateModalTitle").textContent =
      certificate.title;

    document.getElementById("certificateModalIssuer").textContent =
      certificate.issuer;

    document.getElementById("certificateModalDescription").textContent =
      certificate.description;

    document.getElementById("certificateModal").classList.add("active");

  });

});


function closeCertificateModal() {

  document
    .getElementById("certificateModal")
    .classList.remove("active");

}


document
  .getElementById("certificateModalClose")
  .addEventListener("click", closeCertificateModal);


document
  .querySelector(".certificate-modal-overlay")
  .addEventListener("click", closeCertificateModal);


document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {
    closeCertificateModal();
  }

});