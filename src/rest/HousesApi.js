// create a HousesApi class for interacting with the Houses API
const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
    // HTTP GET request for retrieving all houses
  get = async () => {
    try {
      const resp = await fetch(HOUSES_ENDPOINT);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log('Something went wrong on fetchHouse', e);
    }
  };
// HTTP PUT request for updating a house by id
  put = async (house) => {
    try {
      const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(house),
      });
      return await resp.json();
    } catch (e) {
      console.log('Something went wrong on updating house', e);
    }
  };
}

export const housesApi = new HousesApi();