import "./SearchBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LightModeIcon from "@mui/icons-material/LightMode";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info, start }) {
  const HOT_URL =
    "https://media.istockphoto.com/id/137199031/photo/sun-in-the-blue-sky-with-lensflare.jpg?s=1024x1024&w=is&k=20&c=L-shwSkT7Xb7rBTT962cCz0bWTEVXjp7ER2l7UlsBew=";
  const COLD_URL =
    "https://media.istockphoto.com/id/160840799/photo/icicles-and-snowstorm.jpg?s=1024x1024&w=is&k=20&c=HKfUCHjK0QpLFmr1fGMLk1HuU6FALlhEHnwmexcPm0k=";
  const RAIN_URL =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";
  return (
    <div>
      {start ? (
        <div className="InfoBox">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={
                  info.humidity > 70
                    ? RAIN_URL
                    : info.temp > 15
                    ? HOT_URL
                    : COLD_URL
                }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Weather of {info.cityName},{info.country}
                  {info.humidity > 70 ? (
                    <ThunderstormIcon />
                  ) : info.temp > 15 ? (
                    <LightModeIcon />
                  ) : (
                    <AcUnitIcon />
                  )}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <ul style={{ listStyleType: "none" }}>
                    <li>longitude:{info.longitude}</li>
                    <li>latitude:{info.latitude}</li>
                  </ul>
                  <h3>{info.cityName}'s Condition </h3>

                  <p>temperature is at {info.temp}</p>
                  <p>wind speed is probably - {info.windSpeed}</p>
                  <p>Humidity Level - {info.humidity}</p>

                  <Typography variant="body2">
                    <h4 style={{ textWrap: "wrap" }}>
                      The weather can be described as {info.weatherType}, so
                      beware.
                    </h4>
                  </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ) : (
        <p> </p>
      )}
    </div>
  );
}
