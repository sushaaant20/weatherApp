import {useState} from 'react'
import './App.css'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API}`;
  
    const searchLocation = (e) => {
        if(e.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
            })
        }
    }
  return (
    <div className='app'>
      <div className="search">
        <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={searchLocation}
        placeholder='CITY'
        type="search" 
        className='search-input'
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            <h1>{Math.round(data.main.temp - 273.15)}°C</h1>
          </div>
          <div className="description">
            <p>{data.weather.main}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className='bold'>{Math.round(data.main.feels_like - 273.15)}°C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className='bold'>{data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className='bold'>{data.wind.speed} m/s</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
