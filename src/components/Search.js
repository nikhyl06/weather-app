import React from "react"
import './Search.css';
import hero from "../images/hero.png"
export default function Search(props) {

  return (
    <div className="search-page">
    <h1>Weather</h1>
    <img src={hero} className="hero" />
    <p className="label">Find weather of your city</p>
    <form className="search" onSubmit={props.search}>
    <input type="text" onChange={props.handleChange} className="search-box" placeholder="Enter city" />
    <button className="search-btn" type="submit" ><span class="material-symbols-outlined">
search
</span></button>
    </form>
    </div>

  );
}
