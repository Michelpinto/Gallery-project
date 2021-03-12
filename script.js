'use strict';

// Selectors //

const tabs = document.querySelector('.tabs');
const allTab = document.querySelector('.btn-all');
const carsTab = document.querySelector('.btn-cars');
const shoesTab = document.querySelector('.btn-shoes');
const aesthTab = document.querySelector('.btn-aesthetics');
const btn = document.querySelectorAll('.btn');
const allImgs = document.querySelectorAll('.pictures__container img');
const popup = document.querySelector('.popup');
const popupImg = document.querySelector('.popup img');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.btn-close');

// Functions //

function displayAll(e) {
  // Displays all the imagess
  e.preventDefault();
  allImgs.forEach(img => {
    img.style.display = 'flex';
  });
}

function displayCars(e) {
  // Displays only the cars images
  e.preventDefault();
  allImgs.forEach(img => {
    if (img.className == 'cars') {
      img.style.display = 'flex';
    } else {
      img.style.display = 'none';
    }
  });
}

function displayShoes(e) {
  // Displays only the shoes images
  e.preventDefault();
  allImgs.forEach(img => {
    if (img.className == 'shoes') {
      img.style.display = 'flex';
    } else {
      img.style.display = 'none';
    }
  });
}

function displayAesth(e) {
  // Displays only the Aesthetics images
  e.preventDefault();
  allImgs.forEach(img => {
    if (img.className == 'aesthetics') {
      img.style.display = 'flex';
    } else {
      img.style.display = 'none';
    }
  });
}

allImgs.forEach(img => {
  // Showing the popup
  img.addEventListener('click', e => {
    const clickedImg = e.target;
    popup.style.display = 'flex';
    overlay.style.display = 'flex';
    popupImg.src = clickedImg.src;
  });
});

function closePopup(e) {
  // Close button
  e.preventDefault();
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

tabs.addEventListener('click', function (e) {
  const clicked = e.target.closest('.btn');

  if (!clicked) return;

  // to remove active tab
  btn.forEach(t => t.classList.remove('active'));

  // Active tab
  clicked.classList.add('active');
});

function btnAtive(e) {
  e.preventDefault();
  btn.classList.add('active');
}

// Events //

allTab.addEventListener('click', displayAll);
carsTab.addEventListener('click', displayCars);
shoesTab.addEventListener('click', displayShoes);
aesthTab.addEventListener('click', displayAesth);
close.addEventListener('click', closePopup);
