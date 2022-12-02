import "../App.css"
import { AiOutlineCloud } from 'react-icons/ai'


const WeatherCard = ({ temp }) => {
  return (
    <div className="card">
      <h1>{temp}</h1>
      <AiOutlineCloud className="icons" size={60}/>
      <p>Lakewood</p>
      <p>Slightly Cloudy</p>

    </div>
  )
}

export default WeatherCard