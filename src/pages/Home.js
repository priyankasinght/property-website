import React from "react";
import Poster from "../components/Poster";
import HouseList from "../components/HouseList";
const Home = () => {
  return (
    <div className="min-h-[1800px] home">
      <Poster />
      <HouseList />
    </div>
  );
};

export default Home;
