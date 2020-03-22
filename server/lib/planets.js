const axios = require('axios');

const getFilmDetails = async (uri) => {
  try {
    const response = await axios.get( uri ).then(response => { 
      return { 
        Title: response.data.title, 
        Director: response.data.director, 
        ReleaseDate: new Date(response.data.release_date)
      }
    }); 
    return response;
  } catch (error) {
    console.error(error)
  }
}

/**
 * @param {object} reponseData response from external api
 * @return {object} formatted response object acording to internal api requirements
 */
const formattedResponse = async responseData => {

  films = []

  for (let i = 0; i < responseData.films.length; i++) {
    films.push(await getFilmDetails(responseData.films[i]));
  }

  films.sort( (a, b) => b.ReleaseDate - a.ReleaseDate )

  return { 
    Climate: responseData.climate,
    Population: responseData.population,
    Films: films
  }

}

const getPlanet = async (uri) => {
  try {
    return await axios.get( uri ).then(response => { 
      return formattedResponse(response.data)
    });
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  getPlanet, formattedResponse
} 