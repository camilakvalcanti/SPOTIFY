const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

//json-server C:\Users\User\Desktop\SPOTIFY\api-artists\artists.json --port 3000
function requestApi(searchTerm) {
    const url = 'http://localhost:3000/artists?id'
    fetch(url)
         .then((response) => response.json())
         .then((result) => displayResults(result));
}

function displayResults (result) {
    console.log('resultado ');
    console.log(result);

    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input' , function() {
     const searchTerm = searchInput.value.toLowerCase();
     if(searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
     }
     requestApi(searchTerm);
  })