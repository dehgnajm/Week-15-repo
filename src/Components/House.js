import React from 'react';
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
  const { house, updateHouse } = props;
 // Delete a room from the house by creating a new house object without the deleted room
  const deleteRoom = (roomId) => {
    const updatedHouse = {
      ...house,
      rooms: house.rooms.filter((x) => x._id !== roomId),
    };
    // Update the house by making a PUT request to the API
    updateHouse(updatedHouse);
  };
  // Add a new room to the house by creating a new house object with the added room
  const addNewRoom = (room) =>
    updateHouse({ ...house, rooms: [...house.rooms, room] });
// Render a list of the house's rooms and a NewRoomForm component for adding new rooms
  const rooms = () => (
    <ul>
      {house.rooms.map((room, index) => (
        <li key={index}>
          <label>{`${room.name} Area: ${room.area}`}</label>
          <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h1>{house.name}</h1>
      {rooms()}
      <NewRoomForm addNewRoom={addNewRoom} />
    </div>
  );
};