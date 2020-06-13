import React from "react";
import Hero from "./../component/Hero";
import Banner from "./../component/Banner";
import Services from "./../component/Services";
import { Link } from "react-router-dom";
import Featured from "../component/FeaturedRoom";

export const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="luxuroius rooms" subtitle="delux rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services></Services>
      <Featured></Featured>
    </>
  );
};
