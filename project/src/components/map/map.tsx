import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {useAppSelector} from '../../hooks';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import {Offer} from '../../types/offer';
import { getCity } from '../../store/main-process/selectors';
import { getOffers, getOffersNearby } from '../../store/offers-data/selectors';

type MapProps = {
  containerHeigth: number;
  isMain: boolean;
  selectedOffer: Offer | undefined
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

function Map({containerHeigth, isMain, selectedOffer}:MapProps):JSX.Element{
  const mapRef = useRef(null);
  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const offersNearby = useAppSelector(getOffersNearby);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      if(isMain){
        map?.panTo({lat:city.location.latitude, lng:city.location.longitude});
        offers.forEach((offer) => {
          const marker = new Marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude
          });
          marker
            .setIcon(selectedOffer !== undefined && offer.id === selectedOffer?.id
              ? currentCustomIcon
              : defaultCustomIcon
            )
            .addTo(map);}
        );}else{
        if(selectedOffer){
          map.panTo({lat:selectedOffer.location.latitude, lng:selectedOffer.location.longitude});
          const allOffersNearby = [...offersNearby,selectedOffer];
          allOffersNearby.forEach((offer) => {
            const marker = new Marker({
              lat: offer.location.latitude,
              lng: offer.location.longitude
            });
            marker
              .setIcon(offer.id === selectedOffer.id ? currentCustomIcon : defaultCustomIcon)
              .addTo(map);
          });

        }}
    }
  }, [map, offers, selectedOffer, city, isMain, offersNearby, containerHeigth]);

  return (
    <div
      style = {{height: `${containerHeigth}px`}} ref = {mapRef}
    >
    </div>
  );
}

export default Map;
