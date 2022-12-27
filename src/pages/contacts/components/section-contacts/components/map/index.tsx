import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '550px',
};

const position = { lat: 48.4582069, lng: 35.0691383 };

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCU1otOa8POOtlr-qxY2SfmXhq-dD1PcG4',
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
