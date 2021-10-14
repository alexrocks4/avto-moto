import { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const DEFAULT_ZOOM = 18;

function useMap(mapRef, { LAT: lat, LNG: lng }) {
  const [ map, setMap ] = useState(null);
  const [ isMapLoaded, setIsMapLoaded ] = useState(false);
  const [ isMapError, setIsMapError ] = useState(false);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {

      const loader = new Loader({
        apiKey: process.env.REACT_APP_MAP_KEY,
        version: 'weekly',
      });

      loader
        .load()
        .then((google) => {
          const mapInstance = new google.maps.Map(mapRef.current, {
            center: { lat, lng },
            zoom: DEFAULT_ZOOM,
          });

          setMap(mapInstance);
          setIsMapLoaded(true);
        })
        .catch(() => {
          setIsMapLoaded(true);
          setIsMapError(true);
        });
    }

    // Always set new center if map exists
    if (mapRef.current !== null && map !== null) {
      map.setCenter({ lat, lng });
      map.setZoom(DEFAULT_ZOOM);
    }

  }, [ mapRef, lat, lng, map ]);


  return { isMapLoaded, isMapError, map };
}

export default useMap;
