
const areaCards = document.querySelector('#area-cards');

const displayAreas = (items) => {
    items.forEach((item) => {

        const card = document.createElement('section');
        const name = document.createElement('h2');
        const image = document.createElement('img');
        const figure = document.createElement('figure');
        const address = document.createElement('address');
        const description = document.createElement('p');

        name.textContent = `${item.name}`;
        address.textContent = `${item.address}`;
        description.textContent = `${item.description}`

        image.setAttribute('src', item.image);
        image.setAttribute('alt', `${item.name}`);
        image.setAttribute('loading', 'lazy');
        // image.setAttribute('width', 'auto');
        // image.setAttribute('height', '75px');

        figure.appendChild(image);
        card.appendChild(figure);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(description);

        areaCards.appendChild(card);
    });
};

async function getAreaData() {
    const response = await fetch('https://carsonlandvatter.github.io/wdd231/chamber/data/areas.json');
    const data = await response.json();

    displayAreas(data.items);
}

getAreaData();