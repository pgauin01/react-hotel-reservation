import React from "react";
import { RoomConsumer } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

const Featured = (props) => {
  return (
    <RoomConsumer>
      {(value) => {
        let { loading, featuredRooms } = value;

        const rooms = featuredRooms.map((room) => {
          return <Room key={room.id} room={room}></Room>;
        });
        return (
          <section className="featured-rooms">
            <Title title="featured Room" />
            <div className="featured-rooms-center">
              {loading ? <Loading /> : rooms}
            </div>
          </section>
        );
      }}
    </RoomConsumer>
  );
};

export default Featured;
