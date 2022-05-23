const openMobileMenu = document.querySelectorAll('[data-mobile-menu-target]');
const closeMobileMenu = document.querySelectorAll('[data-close-button]');
const mainTag = document.querySelector('.main');
const projectDetails = document.querySelectorAll('.seen-project');

const projects = [
  {
    /* Has id=0 in HTML because this is the first element in this array with index 0 */
    name: 'Budget App',
    description: "Have you ever reached the end of a month and you realize you spent a crazy amount of money 🤯? Well, this app helps you keep track of those payments so that you can know how to budget your expenditure.",
    image: './pics/budget_app.png',
    imageGit: './pics/detailProjectGit.png',
    imageLive: './pics/detailProjectLive.png',
    company_name: "Microverse",
    dev_stack: "Back End Dev",
    year_created: "2022",
    tech_1: "Ruby",
    tech_2: "Rails",
    tech_3: "SQL",
    live_demo: "https://lucas-budget-app.herokuapp.com/",
    git_source: "https://github.com/Lucas-Masaba/budget_app",

  },
  {
    /* Has id=1 in HTML because this is the first element in this array with index 1 */
    name: 'Hotelzilla',
    description: "This is a hotel booking website where you can book rooms from hotels in different countries around the world through making reservations. In this project, I worked in the back-end team and was responsible for developing the API.",
    image: './pics/hotelzilla.png',
    imageGit: './pics/detailProjectGit.png',
    imageLive: './pics/detailProjectLive.png',
    company_name: "Microverse",
    dev_stack: "Full Stack Dev",
    year_created: "2022",
    tech_1: "Ruby",
    tech_2: "Rails",
    tech_3: "SQL",
    live_demo: "https://hotelzilla.netlify.app/",
    git_source: "https://github.com/keroloussamy/Hotelzilla-api",


  },
  {
    /* Has id=2 in HTML because this is the first element in this array with index 2 */
    name: 'Covid Tracker',
    description: "with this website, one can track how covid-19 is affecting different countries around the world 🌍. You can get information on how many people have recovered, contracted the virus and died of the virus.",
    image: './pics/covid.png',
    imageGit: './pics/detailProjectGit.png',
    imageLive: './pics/detailProjectLive.png',
    company_name: "Microverse",
    dev_stack: "Front End Dev",
    year_created: "2022",
    tech_1: "React",
    tech_2: "Redux",
    tech_3: "Webpack",
    live_demo: "https://covid-metrics-lucas-masaba.netlify.app/",
    git_source: "https://github.com/Lucas-Masaba/covid_metrics",

  },
  {
    /* Has id=3 in HTML because this is the first element in this array with index 3 */
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './pics/snapshot4.png',
    imageGit: './pics/detailProjectGit.png',
    imageLive: './pics/detailProjectLive.png',
    company_name: "Microverse",
    dev_stack: "Back End Dev",
    year_created: "2022",
    tech_1: "Ruby",
    tech_2: "Rails",
    tech_3: "SQL",
    live_demo: "https://lucas-budget-app.herokuapp.com/",
    git_source: "https://github.com/Lucas-Masaba/budget_app",

  },
];

function openMenu(mobileMenu, mainTag) {
  if (mobileMenu == null) return;
  mobileMenu.classList.add('active');
  mainTag.classList.add('blur');
}

function closeMenu(mobileMenu) {
  if (mobileMenu == null) return;
  mobileMenu.classList.remove('active');
  mainTag.classList.remove('blur');
}
openMobileMenu.forEach((button) => {
  button.addEventListener('click', () => {
    const mobileMenu = document.querySelector(button.dataset.mobileMenuTarget);
    openMenu(mobileMenu, mainTag);
  });
});

closeMobileMenu.forEach((button) => {
  button.addEventListener('click', () => {
    const mobileMenu = button.closest('.mobile-menu');
    closeMenu(mobileMenu);
  });
});

projectDetails.forEach((button) => {
  button.addEventListener('click', () => {
    const idModal = button.getAttribute('id');

    const modalWindow = document.querySelector('.project-details-modal');
    modalWindow.classList.add('showModal', 'animate__bounceInDown');
    mainTag.classList.add('blur');
    const h3Test = modalWindow.querySelector('h3');
    const paragraph = modalWindow.querySelector('.work-description p');
    const imageNode = modalWindow.querySelector('.work-img img');
    const githubButton = modalWindow.querySelector('.github');
    const arrowCircleButton = modalWindow.querySelector('.arrow_circle');
    const company = modalWindow.querySelector('.canopy')
    const stack = modalWindow.querySelector('.back-end-dev')
    const year = modalWindow.querySelector('.year-created')
    const tech1 = modalWindow.querySelector('.tech-1')
    const tech2 = modalWindow.querySelector('.tech-2')
    const tech3 = modalWindow.querySelector('.tech-3')
    const live = modalWindow.querySelector('.live-class')
    const source = modalWindow.querySelector('.source-class')

    h3Test.innerHTML = projects[idModal].name;
    paragraph.innerHTML = projects[idModal].description;
    imageNode.src = projects[idModal].image;
    githubButton.src = projects[idModal].imageGit;
    arrowCircleButton.src = projects[idModal].imageLive;
    company.innerHTML = projects[idModal].company_name
    stack.innerHTML = projects[idModal].dev_stack
    year.innerHTML = projects[idModal].year_created
    tech1.innerHTML = projects[idModal].tech_1
    tech2.innerHTML = projects[idModal].tech_2
    tech3.innerHTML = projects[idModal].tech_3
    live.href = projects[idModal].live_demo
    source.href = projects[idModal].git_source

    const closeModalMobile = modalWindow.querySelector('[data-close-button]');

    closeModalMobile.addEventListener('click', () => {
      modalWindow.classList.remove('showModal', 'animate__bounceInDown');
      mainTag.classList.remove('blur');
    });
  });
});

function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, invalidMsg) {
  if (!hasValue(input, invalidMsg)) {
    return false;
  }
  const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#myForm');
const EMAIL_INVALID = 'Please enter a correct email address format and uppercase is not allowed!!';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);
  if (emailValid) {
    form.submit();
  }
});

/* local storage */

/* Javascript object with all data to be stored locally  */
const fullNameForm = document.getElementById('fullname');
const emailForm = document.getElementById('email');
const commentForm = document.getElementById('message-input');

function handleChange() {
  const formData = {
    fullName: fullNameForm.value,
    email: emailForm.value,
    comment: commentForm.value,
  };
  localStorage.setItem('form', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', () => {
  const getFormValue = localStorage.getItem('form');
  if (getFormValue) {
    const formObject = JSON.parse(getFormValue);
    fullNameForm.value = formObject.fullName;
    emailForm.value = formObject.email;
    commentForm.value = formObject.comment;
  }
});

fullNameForm.onchange = handleChange;
emailForm.onchange = handleChange;
commentForm.onchange = handleChange;