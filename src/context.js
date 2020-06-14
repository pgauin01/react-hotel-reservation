import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((el) => el.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      price: maxPrice,
      maxPrice,
      maxSize,
      loading: false,
    });
  }

  formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((img) => img.fields.file.url);
      let room = { ...item.fields, images, id };

      return room;
    });
    return tempItems;
  };
  getRoom = (slug) => {
    let tempItems = [...this.state.rooms];
    let room = tempItems.filter((item) => item.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const type = event.target.type;
    const name = event.target.name;
    const value = event.target.value;
    console.log(type, name, value);
  };

  filterRooms = () => {
    console.log("hello");
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          sortedRooms: this.state.sortedRooms,
          featuredRooms: this.state.featuredRooms,
          loading: this.state.loading,
          getRoom: this.getRoom,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
