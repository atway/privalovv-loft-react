import React, { useContext } from "react";
import mapboxgl from "mapbox-gl";

import { userContext } from "./../context.js";

const styles = {
  width: "100vw",
  height: "calc(100vh - 80px)",
  position: "absolute"
};

export const Map = () => {
  const [map, setMap] = React.useState(null);
  const mapContainer = React.useRef(null);
  const userLogic = useContext(userContext);

  React.useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoicHJpdmFsb3Z2IiwiYSI6ImNrMjU4MzgzYjJnMGczb3F0d3J1Nndmc3AifQ.rq9wOiPBOWXffWt1C8e9Zg";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [45, 54],
        zoom: 5
      });
      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map && userLogic.isLoggedIn) initializeMap({ setMap, mapContainer });
  }, [map, userLogic.isLoggedIn]);
  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};
