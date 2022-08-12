import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {useAppSelector} from '../../hooks';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import {Offer} from '../../types/offer';


type MapProps = {
  selectedOffer: Offer | undefined;
  containerHeigth: number;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({selectedOffer, containerHeigth}:MapProps):JSX.Element{
  const mapRef = useRef(null);
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => (state.offers));
  const map = useMap(mapRef, city);
  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon( selectedOffer !== undefined && offer.id === selectedOffer.id
            ? currentCustomIcon
            : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [city, map, offers, selectedOffer]);

  return (
    <div
      style = {{height: `${containerHeigth}px`}} ref = {mapRef}
    >
    </div>
  );
}

export default Map;
