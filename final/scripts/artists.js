let accessToken;

async function getAccessToken() {
    try {
        const tokenURL = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                'grant_type': 'client_credentials',
                'client_id': '5b20f55264784e20adb70082e9882519',
                'client_secret': 'febff13e63cc48ef8b0f91d6ee7d6950'
            })
        });
        if (tokenURL.ok) {
            const data = await tokenURL.json();
            accessToken = data.access_token;
            console.log('New access token:', accessToken);
            return accessToken;
        } else {
            console.log('Error fetching token:', tokenURL.status, tokenURL.statusText);
        }
    } catch(error) {
        console.log(error);
    }
}

getAccessToken();


async function getArtistInfo() {
    try {
        if (!accessToken) {
            accessToken = await getAccessToken();
        }

        const artistIds = [
            '3wWtfT7S2uVJJ3hGZlOLkZ', //1
            '1uNFoZAHBGtllmzznpCI3s', //2
            '4gzpq5DPGxSnKTe4SA8HAU', //3
            '06HL4z0CvFAxyc27GXpf02', //4
            '1GmsPCcpKgF9OhlNXjOsbS', //5
            '16oZKvXb6WkQlVAjwo2Wbg', //6
            '2FXC3k01G6Gw61bmprjgqS', //7
            '4dwdTW1Lfiq0cM8nBAqIIz', //8
            '718COspgdWOnwOFpJHRZHS', //9
            '4oUHIQIBe0LHzYfvXNW4QM', //10
            '4sIl4BTo9l9KqEi0Y3RE72', //11
            '2RQXRUsr4IW1f3mKyKsy4B', //12
            '163tK9Wjr9P9DmM0AVK7lm', //13
            '7FU0xCgmSYQEiBeevUqQ4S', //14
            '22wbnEMDvgVIAGdFeek6ET', //15
        ];

        const artistDataArray = [];
        
        for (const artistId of artistIds) {
            const artistURL = `https://api.spotify.com/v1/artists/${artistId}`;
            
            const artistResponse = await fetch(artistURL, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                }
            });
            if (artistResponse.ok) {
                const data = await artistResponse.json();
                const artistInfo = {
                    name: data.name,
                    image: data.images[0]?.url,
                    urls: data.external_urls,
                    genre: data.genres[0]
                }

                artistDataArray.push(artistInfo);
            } else {
                console.log('Error fetching artist data:', artistResponse.status, artistResponse.statusText);
            }

        }

        artistDataArray.forEach(function(artist) {
            console.log(artist.name, artist.genre, artist.image, artist.urls.spotify);
            const artistCards = document.querySelector('#artists');
            //Add all of the artist info into separate cards by appending them to artistCards
            const cards = document.createElement('div');
            cards.setAttribute('class', 'artistCards');

            const artistName = document.createElement('p');
            artistName.textContent = `${artist.name}`;

            const genre = document.createElement('p');

            function capitalizeString(str) {
                return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
            }

            if (artist.genre) {
                const capitalizedGenre = capitalizeString(artist.genre);
                genre.textContent = capitalizedGenre;
            } else {
                genre.textContent = "Pop"
            }

            const artistImage = document.createElement('img');
            artistImage.setAttribute('src', artist.image);

            const artistLink = document.createElement('a');
            artistLink.setAttribute('href', artist.urls.spotify);
            artistLink.textContent = 'Listen Now!';

            cards.appendChild(artistName);
            cards.appendChild(genre);
            cards.appendChild(artistImage);
            cards.appendChild(artistLink);


            artistCards.appendChild(cards);
            
            document.getElementById('loading').style.display = 'none';
        });

    } catch(error) {
        console.log(error);
    }
}

getArtistInfo();