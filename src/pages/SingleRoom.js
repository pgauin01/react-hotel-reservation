import React, { Component } from "react";
import { RoomConsumer } from "./../context";
import { Link } from "react-router-dom";
import Banner from "./../component/Banner";
import StyledHero from "./../component/Styled-Hero";
import defaultBG from "./../images/room-4.jpeg";

export default class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug,
    defaultBG,
  };
  render() {
    return (
      <RoomConsumer>
        {(value) => {
          const room = value.getRoom(this.state.slug);
          const newRoom = room[0];
          // console.log(newRoom);
          if (!newRoom) {
            return (
              <div className="error">
                <h3>No room Found</h3>
                <Link to="/rooms" className="btn-primary">
                  back to rooms
                </Link>
              </div>
            );
          }
          const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images,
          } = newRoom;
          const [mainImg, ...defaultImg] = images;
          // console.log(defaultImg);
          return (
            <>
              <StyledHero img={images[0] || this.state.defaultBG}>
                <Banner title={`${name} room`}>
                  <Link to="/rooms" className="btn-primary">
                    back to rooms
                  </Link>
                </Banner>
              </StyledHero>
              <section className="single-room">
                <div className="single-room-images">
                  {defaultImg.map((item, index) => {
                    return <img src={item} key={index} />;
                  })}
                </div>
                <div className="single-room-info">
                  <article className="desc">
                    <h3>detalis</h3>
                    <p>{description}</p>
                  </article>
                  <article className="info">
                    <h3>info</h3>
                    <h6>price : ${price}</h6>
                    <h6>size : {size} SQFT</h6>
                    <h6>
                      max capacity :
                      {capacity > 1
                        ? `${capacity} people`
                        : `${capacity} person`}
                    </h6>
                    <h6>
                      {pets === false ? "No pets allowed" : "pets allowed"}
                    </h6>
                    <h6>{breakfast ? "Free breakfast allowed" : null}</h6>
                  </article>
                </div>
              </section>
              <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                  {extras.map((item, index) => {
                    return <li key={index}>-{item}</li>;
                  })}
                </ul>
              </section>
            </>
          );
        }}
      </RoomConsumer>
    );
  }
}
