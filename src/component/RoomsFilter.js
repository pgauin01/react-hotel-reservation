import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../component/Title";

const RoomsFilter = () => {
  const Context = useContext(RoomContext);
  console.log(Context);
  return (
    <div>
      <h1>Rooms filter</h1>
    </div>
  );
};

export default RoomsFilter;
