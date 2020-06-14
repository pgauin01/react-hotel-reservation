import React from "react";
import Hero from "./../component/Hero";
import Banner from "./../component/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../component/RoomContainer";

export const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer></RoomContainer>
    </>
  );
};
