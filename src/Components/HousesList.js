import React from 'react';
import { House } from './House';
import { housesApi } from '../rest/HousesApi';

export class HousesList extends React.Component {
  state = {
    houses: [],
  };
// Fetch all houses from the API when the component mounts
  componentDidMount() {
    this.fetchHouses();
  }
// Fetch all houses from the API and update state with the results
  fetchHouses = async () => {
    const houses = await housesApi.get();
    this.setState({ houses });
  };
// Update a house by making a PUT request to the API, then fetch all houses again
  updateHouse = async (updatedHouse) => {
    await housesApi.put(updatedHouse);
    this.fetchHouses();
  };

  render() {
    return (
      <div className="house-list">
        {this.state.houses.map((house) => (
          <House house={house} key={house._id} updateHouse={this.updateHouse} />
        ))}
      </div>
    );
  }
}