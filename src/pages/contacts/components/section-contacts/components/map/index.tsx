import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

import Config from '@/config';

const containerStyle = {
  width: '100%',
  height: '550px',
};

const position = { lat: 48.4582069, lng: 35.0691383 };

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: Config.GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return null;
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={15}>
      <Marker position={position} />
    </GoogleMap>
  );
}
