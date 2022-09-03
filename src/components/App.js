import React from "react"
import './App.css';
import Search from "./Search.js"
import Info from "./Info.js"
export default function App() {

  const [city, setCity] = React.useState()
  const [weather, setWeather] = React.useState()

  function handleChange(event){
    setCity(event.target.value)
  }

    async function search(event){
      event.preventDefault()
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e625a4092ca69197a205fb51d25904b1`)
      const data = await res.json()
      setWeather(data)
    }


  return (
    <div className="App">
      {weather ? 
      <Info weather={weather}/>
      : <Search city={city} handleChange={handleChange} search={search} />}
      
      
    </div>
  );
}

