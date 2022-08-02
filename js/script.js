const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

//  Disable/Enable Button
function toggleButton() {
  button.disabled = !button.disabled;
}

// Get jokes from Joke API
async function getJokes() {
  let Joke = '';
  const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Assign One or Two Part Joke
    if (data.setup) {
      Joke = `${data.setup} ... ${data.delivery}`;
    } else {
      Joke = data.Joke;
    }
  } catch (error) {}
}
