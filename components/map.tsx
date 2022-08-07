import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import { useRef } from "react";

const Map: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY
  })

  const mapRef = useRef<google.maps.Map | null>(null);

  return (
    <>
      map
    </>
  );

}