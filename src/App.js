import React, { useEffect, useState } from "react";

import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api/index";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

function App() {
  const [clickedChild, setClickedChild] = useState(null);
  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState();
  const [bounds, setBounds] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  // !Load Maps location initially
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // !Get new set of data from api on change of coordinates and bounds
  useEffect(() => {
    setIsLoading(true);
    if (bounds) {
      console.log(bounds);
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        console.log(data);
        setPlaces(data);
        setIsLoading(false);
      });
    }
  }, [type, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={places}
            clickedChild={clickedChild}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            coordinates={coords}
            setBounds={setBounds}
            setCoordinates={setCoords}
            places={places}
            setClickedChild={setClickedChild}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
