// Fichero src/services/api.js
const callToApi = () => {
  // Llamamos al API
  return fetch(
    'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'
  )
    .then((response) => response.json())
    .then((response) => {
      const characterResult = response.results.map((result) => {
        return {
          img: result.image,
          name: result.name,
          species: result.species,
        };
      });
      return characterResult;
    });
};

export default callToApi;
