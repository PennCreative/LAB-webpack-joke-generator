import axios from 'axios';

const endpoint = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,explicit&type=twopart';

const getJoke = () => new Promise((resolve, reject) => {
  axios.get(endpoint).then((response) => {
    resolve(response.data.setup);
  }).catch((error) => reject(error));
});

export default getJoke;
