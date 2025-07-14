const cards = document.querySelector('#cards');

const displayCompanies = (companies) => {
    companies.forEach((company) => {

        const card = document.createElement('section');
        const name = document.createElement('h2');
        const image = document.createElement('img');
        const address = document.createElement('p');
        const email = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('p');
        const level = document.createElement('p');

        name.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        email.textContent = `${company.email}`;
        phone.textContent = `${company.phone}`;
        website.textContent = `${company.website}`;
        level.textContent = `${company.level}`        
        image.setAttribute('src', company.image);
        image.setAttribute('alt', `${company.name} Logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200px');
        image.setAttribute('height', 'auto');

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(level);

        cards.appendChild(card);
    });
};

async function getCompanyData() {
    const response = await fetch('../data/members.json');
    const data = await response.json();

    displayCompanies(data.companies);
}

getCompanyData();