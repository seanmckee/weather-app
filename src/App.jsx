import { Axios } from 'axios'
import { useEffect, useState } from 'react'
import SearchForm from './components/SearchForm'
import WeatherCard from './components/WeatherCard'

function App() {
 
  const [weather, setWeather] = useState({})
  
  const getWeather = () => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=lakewood&appid=d5c0844c0ceade5323aae9c419926b9a&units=imperial"
    fetch(url)
      .then(response => response.json())
      .then(results => {
        console.log(results)
        setWeather(results)
      })
      .catch
  }
  

  // useEffect(() => {
  //   fetch(url).then(
  //     (response) => response.json()).then((data) => { 
  //       setWeather(data)  
  //       console.log(data)
  //     })
  // }, [])

  return (
    <div className="App">
      {/* {getWeather()} */}
      <h1>Weather</h1>
      <SearchForm />
      {/* <button onClick={getWeather}>get weather</button> */}
      {/* <WeatherCard temp={weather.main.temp}/> */}
      <WeatherCard temp = {weather.main.temp} />
    </div>
  )
}

export default App
