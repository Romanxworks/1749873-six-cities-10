import {useRef, useEffect} from 'react';
// import leaflet from 'leaflet';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT} from '../../const';
import {City}from '../../types/map';
import {Offer} from '../../types/offer';


type MapProps = {
  city: City;
  offers: Offer[];
  // selectedPoint: Point | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

// const currentCustomIcon = new Icon({
//   iconUrl: URL_MARKER_CURRENT,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40]
// });

function Map({city, offers}:MapProps):JSX.Element{
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon( defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <div
      style={{height: '800px'}} ref={mapRef}
    >
    </div>
  );
}

export default Map;
