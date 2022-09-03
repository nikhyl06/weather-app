import React from "react"
import './Info.css';
import feel from "../images/feel.png"
import humidity from "../images/humidity.png"
import wind from "../images/wind.png"
import pressure from "../images/pressure.png"


export default function Info(props) {



  function Card(props){
    return(
      <div className="card">
        <div><img src={props.img} className="card-img" /></div>
        <div className="card-text">{props.data}<br />{props.type}</div>
      </div>
    )
  }

  return (
    <div className="info">
      
    <h1 className="title">Weather</h1>
    <div className="overview">
      <div className="text">
        <span>{Math.round((props.weather.main.temp-273.15)*100)/100}</span>|{props.weather.weather[0].main}
      </div>
      <div className="weather-image">
        <img src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`} />
        <div className="shadow"></div>
      </div>
    </div>
    <h2 className="location">{props.weather.name}, {props.weather.sys.country}</h2>
    <div className="weather-info">Weather info</div>
    <div className="details">
      <Card img={feel} type={"Feels like"} data={Math.round((props.weather.main.feels_like-273.15)*100)/100}/>
      <Card img={humidity} type={"Humidity"} data={`${props.weather.main.humidity}%`} />
      <Card img={wind} type={"Wind"} data={props.weather.wind.speed} />
      <Card img={pressure} type={"Pressure"} data={props.weather.main.pressure} />
    </div>
    </div>
  );
}
