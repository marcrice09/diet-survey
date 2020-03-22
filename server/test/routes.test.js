const supertest = require('supertest');
const app = require('../app');
const {samplePlanet} = require('./fixtures')
const {formattedResponse} = require('../lib/planets')

describe('Filmlistings Endpoints', () => {

  it('should show all required endpoints', async () => {

    const requiredRoutes = ['/planets/tatooine', '/planets/alderaan', '/planets/yavin'];

    for (i = 0; i < requiredRoutes.length; i++) { 
      const response = await supertest(app).get( requiredRoutes[i] );
      expect(response.statusCode).toBe(200);
    }
    
  })

  it('should return 404 on invalid endpoints', async () => {

    const requiredRoutes = ['/planets/naboo', '/planets/hoth', '/planets/coruscant'];

    for (i = 0; i < requiredRoutes.length; i++) { 
      const response = await supertest(app).get( requiredRoutes[i] );
      expect(response.statusCode).toBe(404);
    }
    
  })

  it('should return the correct properties for each planet', async () => {

    const response = await formattedResponse(samplePlanet)

    expect( response.Climate ).toEqual('temperate')
    expect( response.Population ).toEqual('2000000000')
    expect( response.Films.length ).toEqual(2)
  
  })


  it('should return the film objects with all the correct properties', async () => {

    const response = await formattedResponse(samplePlanet)

    expect( response.Films[0] ).toHaveProperty('Title')
    expect( response.Films[0] ).toHaveProperty('ReleaseDate')
    expect( response.Films[0] ).toHaveProperty('Director')
    
  })

  it('should return the films array in latest film order ', async () => {

    const response = await formattedResponse(samplePlanet)

    expect( response.Films[0].Title ).toEqual('Revenge of the Sith')
    expect( response.Films[1].Title ).toEqual('A New Hope')
    
  })


})

