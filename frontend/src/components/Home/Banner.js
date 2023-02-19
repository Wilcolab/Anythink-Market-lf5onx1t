import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = ({ onSearchTitle }) => {

  const handleChange = (e) => {
    e.preventDefault();
    const title = e.target.value;
    if (e.target.value.length >= 3 || e.target.value === ""){
      onSearchTitle(
        title,
        (page) => agent.Items.byTitle(title, page),
        agent.Items.byTitle(title)
      )
    } 
  }


  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part"> get </span>
          <form>
            <input onChange={handleChange} type="text" id="search-box" placeholder="what is it that you truly desire?" name="term" />
          </form>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
