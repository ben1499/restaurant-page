import SandwichImage from './grill-sandwich.jpg';
import ShrimpImage from './seafood.jpg';
import ChickenImage from './chicken.jpg';
import './style-menu.css';

const menu = () => {
    const content = document.getElementById('content');
    const main = document.createElement('main');
    const container = document.createElement('div');
    const cards = document.createElement('div');
    const card1 = document.createElement('div');
    const card2 = document.createElement('div');
    const card3 = document.createElement('div');
    const title1 = document.createElement('h3');
    const title2 = document.createElement('h3');
    const title3 = document.createElement('h3');
    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();

    cards.classList.add('cards');

    card1.classList.add('card');
    card2.classList.add('card');
    card3.classList.add('card');

    title1.textContent = "Grill Sandwich";
    img1.src = SandwichImage;

    title2.textContent = "Grilled Shrimp";
    img2.src = ShrimpImage;

    title3.textContent = "Grilled Chicken";
    img3.src = ChickenImage;

    card1.append(title1, img1);
    card2.append(title2, img2);
    card3.append(title3, img3);

    cards.append(card1, card2, card3);

    container.append(cards);

    

    main.append(container);

    content.append(main);
    
}

export default menu;