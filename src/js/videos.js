const videosContainer = document.querySelector(".videos");
const placeholders = [
  {
    name: 'Photo by Alphacolor on Unsplash',
    thumb: 'https://i.ibb.co/JnFXYv2/alphacolor-66-JMud-Ij-DTw-unsplash.jpg',
    src: 'https://i.ibb.co/xh8Vn1G/alphacolor-66-JMud-Ij-DTw-unsplash.jpg',
    alt: 'alphacolor-66-JMud-Ij-DTw-unsplash'
  },
  {
    name: 'Photo by Bogomil Mihaylov on Unsplash',
    thumb: 'https://i.ibb.co/NpRRMS6/bogomil-mihaylov-ek-HSHvgr27k-unsplash.jpg',
    src: 'https://i.ibb.co/TRyysLB/bogomil-mihaylov-ek-HSHvgr27k-unsplash.jpg',
    alt: 'bogomil-mihaylov-ek-HSHvgr27k-unsplash'
  },
  {
    name: 'Photo by Frank Septillion on Unsplash',
    thumb: 'https://i.ibb.co/qFyjg64/frank-septillion-Qrspubmx6k-E-unsplash.jpg',
    src: 'https://i.ibb.co/Tqv20yn/frank-septillion-Qrspubmx6k-E-unsplash.jpg',
    alt: 'frank-septillion-Qrspubmx6k-E-unsplash'
  },
  {
    name: 'Photo by Kai Oberhäuser on Unsplash',
    thumb: 'https://i.ibb.co/2nvBdRH/kai-oberhauser-Un-WYx-J-0-Wn-M-unsplash.jpg',
    src: 'https://i.ibb.co/mD974dg/kai-oberhauser-Un-WYx-J-0-Wn-M-unsplash.jpg',
    alt: 'kai-oberhauser-Un-WYx-J-0-Wn-M-unsplash'
  },
  {
    name: 'Photo by Marius Masalar on Unsplash',
    thumb: 'https://i.ibb.co/QbQmDCw/marius-masalar-r-POm-LGwai2w-unsplash.jpg',
    src: 'https://i.ibb.co/1vQ2zdW/marius-masalar-r-POm-LGwai2w-unsplash.jpg',
    alt: 'marius-masalar-r-POm-LGwai2w-unsplash'
  },
  {
    name: 'Photo by Matt Botsford on Unsplash',
    thumb: 'https://i.ibb.co/CPPmQMt/matt-botsford-OKLq-Gs-CT8qs-unsplash.jpg',
    src: 'https://i.ibb.co/GHHnRtJ/matt-botsford-OKLq-Gs-CT8qs-unsplash.jpg',
    alt: 'matt-botsford-OKLq-Gs-CT8qs-unsplash'
  },
  {
    name: 'Photo by Matthieu A on Unsplash',
    thumb: 'https://i.ibb.co/0YhKLhS/matthieu-a-b-Xjq-Pckm-LD8-unsplash.jpg',
    src: 'https://i.ibb.co/qmkC8kf/matthieu-a-b-Xjq-Pckm-LD8-unsplash.jpg',
    alt: 'matthieu-a-b-Xjq-Pckm-LD8-unsplash'
  },
  {
    name: 'Photo by Mink Mingle on Unsplash',
    thumb: 'https://i.ibb.co/jkgDmry/mink-mingle-HRyj-ETL87-Gg-unsplash.jpg',
    src: 'https://i.ibb.co/d4GDF5P/mink-mingle-HRyj-ETL87-Gg-unsplash.jpg',
    alt: 'mink-mingle-HRyj-ETL87-Gg-unsplash'
  },
  {
    name: 'Photo by William Iven on Unsplash',
    thumb: 'https://i.ibb.co/C8zYhRr/william-iven-TMOe-GZw9-NY4-unsplash.jpg',
    src: 'https://i.ibb.co/kBxwQNd/william-iven-TMOe-GZw9-NY4-unsplash.jpg',
    alt: 'william-iven-TMOe-GZw9-NY4-unsplash'
  }
];

placeholders.forEach(image => {
  const column = document.createElement('div');
  column.classList.add('col-md-4');

  const card = document.createElement('div');
  card.classList.add('card');
  card.classList.add('mb-4');
  card.classList.add('box-shadow');

  const phContainer = document.createElement('div');
  phContainer.classList.add('ph-container');
  // phContainer.style.backgroundImage = `url(${image.thumb})`;

  const img = document.createElement('img');
  img.classList.add('card-img-top');
  img.classList.add('img-fluid');
  img.classList.add('lazy');
  img.classList.add('fade');
  img.dataset.srcset = image.src;
  img.dataset.src = image.thumb;
  img.src = 'public/img/namroud-gorguis-FZWivbri0Xk-unsplash.jpg';
  img.alt = image.alt;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.innerText = image.name;

  cardBody.appendChild(cardText);
  phContainer.appendChild(img);
  card.appendChild(phContainer);
  card.appendChild(cardBody);
  column.appendChild(card);
  videosContainer.appendChild(column);
})