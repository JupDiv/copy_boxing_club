/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

import { ContactsMap } from './GoogleMaps.styles';

type GoogleMapsProps = {
  authKey: string;
  position: MapType;
};

type MapType = {
  lat: number;
  lng: number;
};

export default function GoogleMaps({ authKey, position }: GoogleMapsProps) {
  let map: google.maps.Map;
  //@ts-ignore
  let marker: google.maps.AdvancedMarkerElement;

  useEffect(() => {
    const loader = new Loader({
      apiKey: authKey,
      version: 'weekly',
    });

    loader.load().then(async () => {
      const { Map } = (await google.maps.importLibrary(
        'maps'
      )) as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        'marker'
      )) as google.maps.MarkerLibrary;

      map = new Map(document.getElementById('map') as HTMLElement, {
        center: position,
        zoom: 16,
        mapId: 'DEMO_MAP_ID',
      });
      marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: 'Viktor Doroshenko',
      });
    });
  }, [position]);

  return (
    <>
      <ContactsMap id="map" />
    </>
  );
}
