import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

import Config from '@/config';

const containerStyle = {
  width: '100%',
  height: '550px',
};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: Config.GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return null;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={Config.OFFICE_LOCATION_COORDINATES}
      zoom={15}
    >
      <Marker position={Config.OFFICE_LOCATION_COORDINATES} />
    </GoogleMap>
  );
}
