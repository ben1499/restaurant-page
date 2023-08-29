import GrillImage from './grill.jpg'
import './style.css';

const pageLoad = () => {
    const content = document.getElementById('content');
    const main = document.createElement('main');
    const container = document.createElement('div');
    const leftDiv = document.createElement('div');
    const rightDiv = document.createElement('div');
    const headline = document.createElement('h3');
    const para = document.createElement('p');
    const image = new Image();

    
    headline.textContent = 'Welcome to RestoGrill: Where Flavor Meets Elegance!';
    para.textContent = `At RestoGrill, we believe dining is not just about food; it's an experience.        
                        Our restaurant is more than a place to eat; it's a destination where exceptional cuisine, 
                        friendly service, and an inviting atmosphere come together to create unforgettable moments.
                        
                        Indulge in a culinary journey like no other. Our chefs are passionate about crafting dishes that not only please the palate but also tell a story. From sizzling steaks to delicate seafood, every dish is a masterpiece of taste and presentation.
                        `;



    image.src = GrillImage;

    leftDiv.append(headline, para);
    rightDiv.appendChild(image);

    main.append(container);

    container.classList.add('container');

    container.append(leftDiv, rightDiv);

    content.append(main)


}

export default pageLoad;
