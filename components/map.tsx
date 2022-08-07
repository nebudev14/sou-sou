import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useRef } from "react";

export const MapView: React.FC = () => {
  const container = {
    width: "100%",
    height: "100%",
  };
  
  const center = {
    lat: 40.7128,
    lng: -74
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  });

  console.log(process.env.REACT_APP_GOOGLE_KEY);

  // const mapRef = useRef<google.maps.Map | null>(null);

  // const onLoad = (map: google.maps.Map): voi
  // }d => {
  //   mapRef.current = map;

  // const unMount = (): void => { mapRef.current = null; }

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={container}
          zoom={12}
          options={options}
          center={center}
          // onLoad={onLoad}
          // onUnmount={unMount}
        />
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};
