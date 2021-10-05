const callToApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
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
