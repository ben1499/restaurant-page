import header from './header';
import pageLoad from './pageLoad';
import menu from './menu';
import about from './about';

header()
pageLoad();

const content = document.querySelector('#content');


const link1 = document.querySelector('ul li:first-child');
const link2 = document.querySelector('ul li:nth-child(2)');
const link3 = document.querySelector('ul li:last-child');

link1.classList.add('active');

link1.addEventListener('click', () => {
    const main = document.querySelector('main');
    link1.classList.add('active');
    link2.classList.remove('active');
    link3.classList.remove('active');
    main.remove();
    pageLoad();
})
 
link2.addEventListener('click', () => {
    const main = document.querySelector('main');
    link2.classList.add('active');
    link1.classList.remove("active");
    link3.classList.remove("active");
    main.remove();
    menu();
})

link3.addEventListener('click', () => {
    const main = document.querySelector('main');
    link3.classList.add('active');
    link1.classList.remove('active');
    link2.classList.remove('active');
    main.remove();
    about();
})

