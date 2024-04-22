const mainCourses = [
  "Filet de turbot de la mer Noire",
  "Tablier de sapeur",
  "Gigot d'agneau",
  "Faisan de forêt",
  "Trio de quinoa, chou kale et pousses d'épinard",
];
const techniques = [
  "à la cocotte",
  "minute",
  "avec sa sauce hollandaise",
  "façon sud-ouest",
  "comme chez ma grand-mère",
  "déglacé au saké",
  "maturé en fût de chêne",
];
const sides = [
  "une purée de topinambour",
  "ses frites truffées",
  "des châtaignes croustillantes",
  "une brunoise carotte-cèleri",
  "un oeuf parfait",
  "sa crème veloutée de fromages affinés",
];
const seasonings = [
  "au yuzu rouge",
  "au poivre vert de Sichuan",
  "et une pointe de safran",
  "à l'ail noir",
  "et un peu de sucre en poudre",
];
const imageLinks = [
    'imgs/1.jpg',
    'imgs/2.jpg',
    'imgs/3.jpg',
    'imgs/4.jpg',
    'imgs/5.jpg',
    'imgs/6.jpg',
    'imgs/7.jpg',
    'imgs/8.jpg',
    'imgs/9.jpg'
];



const getRandom = (data) => data[Math.floor(Math.random() * data.length)];
const menu = `${getRandom(mainCourses)} ${getRandom(techniques)}, avec ${getRandom(sides)} ${getRandom(seasonings)}`;
const accueil = document.getElementById('start');
const repas = document.getElementById('repas');
const photos = document.getElementById('photos');
const item = 5;

// Events Listener
document.getElementById('Accueil').addEventListener('click', () => {
        accueil.style.display = 'block';
        repas.style.display ='none';
        photos.style.display ='none';
});

document.getElementById('platdujour').addEventListener('click', () => {
        accueil.style.display = 'none';
        repas.style.display ='block';
        photos.style.display ='none';
        NewMenu()
});

document.getElementById('galerie-photo').addEventListener('click', () => {
        accueil.style.display = 'none';
        repas.style.display ='none';
        photos.style.display ='block';
        const gridContainer = document.getElementById('gridContainer');
        gridContainer.innerHTML = '';
        imageLinks.forEach(link => {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            const img = document.createElement('img');
            img.src = link;
            gridItem.appendChild(img);
            gridContainer.appendChild(gridItem);
        });
});

const body = document.querySelector('body');
let mouseY;
const handleMouseleave = (event) => {
  mouseY = event.clientY;
  if (mouseY < 0) {
    openPopup();
  }
};
body.addEventListener('mouseleave', handleMouseleave);
gridContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
      toggleFullImage(event.target);
    }
});

//functions
function NewMenu(){
    olRepas.innerHTML = '';
    for(i = 0; i < item; i++){
        let li = document.createElement('li');
        li.textContent = `${getRandom(mainCourses)} ${getRandom(techniques)}, avec ${getRandom(sides)} ${getRandom(seasonings)}`;
        olRepas.appendChild(li);
    }
}
function openPopup() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
}
function closePopup() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none'; // Cache l'overlay
}
function toggleFullImage(img) {
    img.classList.toggle('full-image');
}