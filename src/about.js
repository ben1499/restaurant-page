import AboutImage from './about-image.jpg';

const about = () => {
    const content = document.getElementById('content');
    const main = document.createElement('main');
    const container = document.createElement('div');
    const leftDiv = document.createElement('div');
    const rightDiv = document.createElement('div');
    const image = new Image();
    const heading = document.createElement('h2');
    const para = document.createElement('p');

    image.src = AboutImage;
    image.classList.add('about-image');

    heading.textContent = 'About RestoGrill';
    para.textContent = `At RestoGrill, we believe that exceptional food should be served with exceptional service.
                        Our attentive and knowledgeable staff is dedicated to ensuring every aspect of your visit   
                        is nothing short of perfection.`;
    
    leftDiv.append(image);

    rightDiv.append(heading, para);

    container.classList.add('about-container')

    container.append(leftDiv, rightDiv);

    main.append(container);

    content.append(main);


}

export default about;