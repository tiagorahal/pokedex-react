const getPokemon = (pokeId) => {
  const url = 'https://pokeapi.co/api/v2/pokemon';
  const queryParams = pokeId;
  const endpoint = `${url}/${queryParams}`;

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log(xhr.response);
    }
  };

  xhr.open('GET', endpoint);
  xhr.send();
};

export default getPokemon;
