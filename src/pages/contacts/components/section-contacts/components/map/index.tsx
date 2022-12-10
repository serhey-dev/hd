import React from 'react';

import Script from 'next/script';

const mapId = 'id-map';

function initMap() {
  const position = { lat: 48.4582069, lng: 35.0691383 };
  // @ts-ignore
  const map = new window.google.maps.Map(document.getElementById(mapId), {
    zoom: 16,
    center: position,
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false,
  });
  // @ts-ignore
  new window.google.maps.Marker({
    position,
    map,
  });
}

export default function Map() {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    // @ts-ignore
    window.initMap = initMap;
    setIsReady(true);
  }, []);

  return (
    <>
      {isReady && (
        <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCU1otOa8POOtlr-qxY2SfmXhq-dD1PcG4&callback=initMap&v=weekly" />
      )}
      <div id={mapId} className="mx-auto" style={{ width: '100%', height: '600px' }} />
    </>
  );
}
