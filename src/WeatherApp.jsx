import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  let [info, setInfo] = useState({
    cityName: "",
    country: "",
    longitude: "",
    latitude: "",
    temp: "",
    windSpeed: "",
    weatherType: "",
    humidity:"",
  });
  let [start,setStart]=useState(false);

  let getInfo = (newInfo) => {
    setInfo(newInfo);
    setStart(true);
    
  };

  return (
    <div>
      <SearchBox getInfo={getInfo} />
      <InfoBox  info={info}  start={start} />
      
    </div>
  );
}
