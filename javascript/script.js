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
    text: 'We are working on an innovative e-commerce application offering a diverse selection of fashion products and attributes. Our platform aims to provide customers with a seamless shopping experience while exploring a wide range of trendy and stylish items.',
    secList: ['Java SWing'],
    source: 'https://github.com/TimothyRay18/FinalStaticFashion',
  },
  {
    id: 1,
    imgURL: './assets/Grimoire.png',
    heading: 'Grimoire',
    firstList: ['Full-Stack Dev', '2020'],
    text: 'Introducing Grimoire, a versatile note-taking app that goes beyond traditional text input. With Grimoire, users can seamlessly capture and combine various media types, including audio, images, and files, to create comprehensive and multimedia-rich notes.',
    secList: ['Kotlin', 'Java'],
    source: 'https://github.com/TimothyRay18/Grimoire',
  },
  {
    id: 2,
    imgURL: './assets/Foodut.png',
    heading: 'Foodut',
    firstList: ['Backend Developer', '2022'],
    text: 'Experience the ultimate convenience in buying and selling delectable snacks through our platform. Connect with fellow snack enthusiasts and indulge in your cravings like never before. Our app boasts a robust backend powered by Golang and a dynamic frontend designed with Vue.js, ensuring a seamless and delightful snacking journey for all users.',
    secList: ['HTML', 'Vue.js', 'Golang', 'JavaScripts'],
    soruce: 'https://github.com/TimothyRay18/Foodut',
  },
  {
    id: 3,
    imgURL: './assets/Sentiment analysis.png',
    heading: 'Twitter Sentiment Analysis',
    firstList: ['Full-Stack Dev', '2022'],
    text: 'To enhance our understanding of sentiment analysis, we endeavor to develop a proficient model that accurately assesses the sentiment surrounding the term \'Jokowi\' as utilized on the Twitter platform. Through this project, we aim to gain valuable insights into public perception and sentiment regarding this subject.',
    secList: ['HTML', 'Python', 'Tensorflow', 'JavaScript'],
    source: 'https://github.com/TimothyRay18/Cryptocurrency-Forecasting-V2',
  },
  {
    id: 4,
    imgURL: './assets/mainGUI.png',
    heading: 'Cryptocurrency Forecasting',
    firstList: ['Full-Stack Dev', '2023'],
    text: 'We present a cutting-edge website that leverages the power of Tensorflow to forecast cryptocurrency closing prices. By analyzing 25 hours of historical data, our platform provides accurate predictions, empowering users with valuable insights into the volatile crypto market. Stay ahead of the curve and make informed decisions with our advanced forecasting technology that brings data-driven intelligence to your fingertips.',
    secList: ['HTML', 'Python', 'Tensorflow', 'JavaScript'],
    source: 'https://github.com/TimothyRay18/Cryptocurrency-Forecasting-V2',
  },
];

const closePopup = document.querySelector('#popup-head > span');
const PopUp = document.querySelector('#pop-up');
const cards = document.querySelectorAll('.card a');

closePopup.addEventListener('click', () => {
  PopUp.classList.toggle('hidden');
});

const makePopup = ({
  imgURL, heading, firstList, text, secList, source
}) => {
  const pHead = document.querySelector('#popup-head > h2');
  const P1List = document.querySelectorAll('#pop-up ul > li');
  const PImg = document.querySelector('#popup-img > img');
  const PText = document.querySelector('#popup-details > p');
  const P2List = document.querySelector('#popup-details menu');
  const PSource = document.querySelector('#popup-demo > a')

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
  PSource.setAttribute('href', source);
  PopUp.classList.toggle('hidden');
};

cards.forEach((ele, i) => {
  ele.addEventListener('click', () => {
    makePopup(projectArray[i]);
  });
});
