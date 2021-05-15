const imgContainer = document.querySelector('.img-container');
const imgURL = 'https://source.unsplash.com/random/';
const rows = 10;

for(let i = 0; i < rows * 3; i++){
    const img = document.createElement('img');
    img.src = `${imgURL}${getRandomSize()}`;
    imgContainer.appendChild(img);
}

function getRandomSize(){
    return `${getRandomNum()}x${getRandomNum()}`;
}

function getRandomNum(){
    return Math.floor(Math.random() * 10) + 400;
}