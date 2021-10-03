const callToApi = () => {
  return fetch(
    'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'
  )
    .then((response) => response.json())
    .then((response) => {
      const characterResult = response.results.map((result) => {
        return {
          id: result.id,
          img: result.image,
          name: result.name,
          species: result.species,
          origin: result.origin.name,
          episode: result.episode.length,
          status: result.status,
        };
      });
      return characterResult;
    });
};

export default callToApi;
