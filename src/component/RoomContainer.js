import React from "react";
import RoomsList from "./RoomsList";
import RoomsFilter from "./RoomsFilter";
import Loading from "./Loading";
import { RoomConsumer } from "../context";

const RoomContainer = () => {
  return (
    <RoomConsumer>
      {(value) => {
        const { rooms, sortedRooms, loading } = value;
        // console.log(value);
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            <RoomsList rooms={rooms}></RoomsList>
            <RoomsFilter rooms={sortedRooms}></RoomsFilter>
          </div>
        );
      }}
    </RoomConsumer>
  );
};

export default RoomContainer;
