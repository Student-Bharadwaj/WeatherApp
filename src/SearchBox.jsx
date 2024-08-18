import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ getInfo }) {
  let [city, setCity] = useState("");
  let [err, setErr] = useState(false);
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  // let q="?q={city name},{state code},{country code}&limit={limit}&appid={API key}"
  let API_KEY = "dbcd6998c463851c209c1f272fe5da2c";

  let weatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
// console.log(jsonResponse);
    let result = {
      cityName: jsonResponse.name,
      country: jsonResponse.sys.country,
      longitude: jsonResponse.coord.lon,
      latitude: jsonResponse.coord.lat,
      temp: jsonResponse.main.temp,
      windSpeed: jsonResponse.wind.speed,
      weatherType: jsonResponse.weather[0].main,
      humidity:jsonResponse.main.humidity,
    };
    // console.log(result);
    return result;
  };

  let handleChange = (event) => {
    let change = event.target.value;

    setCity(change);
  };
  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);

    setCity("");
    try {
      let newInfo = await weatherInfo();

      // console.log(newInfo);
      getInfo(newInfo);
      setErr(false);
    } catch (err) {
      setErr(true);
      console.log("404 ERROR ! no such place found");
    }
  };

  return (
    <div className="SearchBox">
      <h2>Weather Widget</h2>
      <form action="" onSubmit={handleSubmit}>
        {err ? (
          <TextField
            error
            id="standard-error-helper-text"
            label="City Name"
            defaultValue={city}
            helperText="No such place found!"
            variant="standard"
            onChange={handleChange}
          />
        ) : (
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            value={city}
            name="city"
            onChange={handleChange}
          />
        )}
        <br />
        <br />{" "}
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
