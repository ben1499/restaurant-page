

const header = () => {
    const content = document.getElementById('content');
    const header  = document.createElement('header');
    const logo = document.createElement('div');
    const navbar = document.createElement('nav');
    const list = document.createElement('ul');

    const link1 = document.createElement('li');
    const link2 = document.createElement('li');
    const link3 = document.createElement('li');

    link1.textContent = 'Home';
    link2.textContent = 'Menu';
    link3.textContent = 'About';

    list.append(link1, link2, link3);

    logo.textContent = 'RestoGrill';

    header.append(logo, navbar);

    navbar.append(list);

    content.append(header);
}

export default header;