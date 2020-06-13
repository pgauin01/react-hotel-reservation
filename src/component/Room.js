import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "./../images/room-1.jpeg";
import PropTypes from "prop-types";

const Room = (props) => {
  //   console.log(props.room);
  const { name, slug, images, price } = props.room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="rooms" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
        <p className="room-info">{name}</p>
      </div>
    </article>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Room;
