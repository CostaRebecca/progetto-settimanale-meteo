import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/MyWeather"
import { useState , useEffect} from "react";
import {Button, Form, InputGroup} from 'react-bootstrap'
import MyWeather from "./components/MyWeather";

const App = () => {
 
  const [city, setCity] = useState("");
  const [cerca,setCerca] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");


  const handleChange = (event) => {
    setCerca(event.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault();
    setCity(cerca)
  }

  const fetchWeather = async () => {
    try {

      console.log(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=e774a78e3712ab2a3751ddf362328fa6`)
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=e774a78e3712ab2a3751ddf362328fa6`)

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);

  }
};

useEffect(() => {
  console.log("Rebe");
  if (city !== ""){
  fetchWeather(); }
}, [city]);

 
  return (
    <div className="App">
      <InputGroup className="mb-3">
  <Form.Control
    placeholder="Search"
    type="text"
    onChange={handleChange}
    value={cerca}
    
  />
  <Button variant="outline-secondary" onClick={handleClick}>
    Search
  </Button>
</InputGroup>
<MyWeather/>
      
    </div>
  );
};

export default App;