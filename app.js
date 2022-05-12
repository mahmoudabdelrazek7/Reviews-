const review =[
    {
        id: 1,
        name: 'susan smith',
        job: 'software developer',
        img: './image/person-2.png',
        text: 
        ' The English word apparently derives from  the sense of to give form to the from .but have the development of the word information in English is not clear.',
    },
    {
        id: 2,
        name: 'anna johanse',
        job: 'web developer',
        img: './image/person-3.png',
        text: 
        ' The English word apparently derives from  the sense of to give form to the from .but have the development of the word information in English is not clear.',
    },
    {
        id: 3,
        name: 'peter jonse',
        job: 'desktop developer',
        img: './image/person-1.png',
        text: 
        ' The English word apparently derives from  the sense of to give form to the from .but have the development of the word information in English is not clear.',
    },
    {
        id: 4,
        name: 'mark john',
        job: 'mobile developer',
        img: './image/person-4.png',
        text: 
        ' The English word apparently derives from  the sense of to give form to the from .but have the development of the word information in English is not clear.',
    },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

var currentItem = 3;

window.addEventListener('DOMContentLoaded' , function() {
    showPerson();
});

function showPerson(){
    const item =review[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

nextBtn.addEventListener("click" , function() {
    currentItem++;
    if(currentItem > review.length - 1)
    {
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener("click" , function() {
    currentItem--;
    if(currentItem < 0)
    {
        currentItem = review.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener("click" , function() {
    currentItem = Math.floor(Math.random() * review.length);
    console.log(currentItem);
    showPerson();
});