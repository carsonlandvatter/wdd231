const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<h2>Success!</h2>
<p>Your request for the song: ${myInfo.get('song-title')} by ${myInfo.get('artist')} has been sent.</p>
<p>Stay on the lookout for when it comes!</p>`;
