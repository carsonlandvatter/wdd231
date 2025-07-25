const cards = document.querySelector('#cards');

const displayCompanies = (companies) => {
    companies.filter(company => company.level === "2" || company.level === "3").slice(0, 3).forEach((company) => {

        const card = document.createElement('section');
        const name = document.createElement('h2');
        const image = document.createElement('img');
        const address = document.createElement('p');
        const email = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('a');
        const level = document.createElement('p');

        name.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        email.textContent = `${company.email}`;
        email.setAttribute('id', 'email');
        phone.textContent = `${company.phone}`;
        website.textContent = `${company.website}`;
        level.textContent = `Membership Level: ${company.level}`;
        level.setAttribute('id', 'level');
        website.setAttribute('href', company.website);        
        image.setAttribute('src', company.icon);
        image.setAttribute('alt', `${company.name} Logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', 'auto');
        image.setAttribute('height', '75px');

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
    const response = await fetch('https://carsonlandvatter.github.io/wdd231/chamber/data/members.json');
    const data = await response.json();

    displayCompanies(data.companies);
}

getCompanyData();