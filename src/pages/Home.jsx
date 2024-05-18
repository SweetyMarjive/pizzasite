import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from "../assets/holder-pizza.webp";
import"../styles/Home.css";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> PIZzENIAaaa  </h1>
        <p> The Slice Of Delicious Corner....</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  )
}

export default Home