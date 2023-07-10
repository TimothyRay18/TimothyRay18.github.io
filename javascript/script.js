const menu = document.querySelector('#Union-menu');
const close = document.querySelector('#nav-button-close');
const navs = document.querySelector('#menu-navs');
const links = document.querySelectorAll('#menu-navs li');

close.addEventListener('click', () => {
  navs.classList.toggle('hidden');
});

menu.addEventListener('click', () => {
  navs.classList.toggle('hidden');
});

links.forEach((ele) => ele.addEventListener('click', () => {
  navs.classList.toggle('hidden');
}));

const bio = document.querySelector('#bio');
const about = document.querySelector('#about-me');
const activeNavs = document.querySelectorAll('#desk-list > li > a');

document.addEventListener('scroll', () => {
  if (window.pageYOffset < bio.offsetHeight + bio.offsetTop) {
    activeNavs.forEach((e) => e.classList.remove('active'));
    activeNavs[0].classList.add('active');
  } else if (window.pageYOffset < about.offsetHeight + about.offsetTop - 200) {
    activeNavs.forEach((e) => e.classList.remove('active'));
    activeNavs[1].classList.add('active');
  } else {
    activeNavs.forEach((e) => e.classList.remove('active'));
    activeNavs[2].classList.add('active');
  }
});

const projectArray = [
  {
    id: 0,
    imgURL: './assets/Final Static Fashion.png',
    heading: 'Final Static Fashion',
    firstList: ['Full-Stack Dev', '2020'],
    text: 'An e-commerce app that sells a wide variety of fashion attributes',
    secList: ['Java SWing'],
  },
  {
    id: 1,
    imgURL: './assets/Grimoire.png',
    heading: 'Grimoire',
    firstList: ['Full-Stack Dev', '2020'],
    text: 'Grimoire is a note taking app with the ability to mix other media to be noted (audio, image, file).',
    secList: ['Kotlin', 'Java'],
  },
  {
    id: 2,
    imgURL: './assets/Foodut.png',
    heading: 'Foodut',
    firstList: ['Back End Developer', '2022'],
    text: 'Buy and sell a variety of delicious snack with ease. Connect with snack enthusiasts and satisfy your cravings. This app using Golang for the backend and Vue.js for the frontend.',
    secList: ['HTML', 'Vue.js', 'Golang', 'JavaScripts'],
  },
  {
    id: 3,
    imgURL: './assets/mainGUI.png',
    heading: 'Cryptocurrency Forecasting',
    firstList: ['Full-Stack Dev', '2020'],
    text: 'A website that forecasts cryptocurrency closing price using 25 hour of historical data.',
    secList: ['HTML', 'Python', 'Tensorflow', 'JavaScript'],
  },
];

const closePopup = document.querySelector('#popup-head > span');
const PopUp = document.querySelector('#pop-up');
const cards = document.querySelectorAll('.card a');

closePopup.addEventListener('click', () => {
  PopUp.classList.toggle('hidden');
});

const makePopup = ({
  imgURL, heading, firstList, text, secList,
}) => {
  const pHead = document.querySelector('#popup-head > h2');
  const P1List = document.querySelectorAll('#pop-up ul > li');
  const PImg = document.querySelector('#popup-img > img');
  const PText = document.querySelector('#popup-details > p');
  const P2List = document.querySelector('#popup-details menu');

  pHead.innerHTML = heading;
  PText.innerHTML = text;
  PImg.src = imgURL;
  P1List.forEach((ele, i) => { ele.innerHTML = firstList[i]; });
  P2List.innerHTML = '';
  secList.forEach((ele) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = ele;
    P2List.appendChild(listItem);
  });
  PopUp.classList.toggle('hidden');
};

cards.forEach((ele, i) => {
  ele.addEventListener('click', () => {
    makePopup(projectArray[i]);
  });
});
