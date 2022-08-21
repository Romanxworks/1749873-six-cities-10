import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {useAppSelector} from '../../hooks';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';

type MapProps = {
  containerHeigth: number;
  isMain: boolean;
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

function Map({containerHeigth, isMain}:MapProps):JSX.Element{
  const mapRef = useRef(null);
  const city = useAppSelector((state) => state.city);
  const offersByCity = useAppSelector((state) => (state.offersByCity));
  const offersNearby = useAppSelector((state) => (state.offersNearby));
  const offerById = useAppSelector((state) => (state.offer));
  const selectedOffer = useAppSelector((state) => (state.selectedOffer));
  const offers = offersByCity;

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
          if(selectedOffer){
            marker
              .setIcon(selectedOffer !== undefined && offer.id === selectedOffer.id
                ? currentCustomIcon
                : defaultCustomIcon
              )
              .addTo(map);}
        });}else{
        if(offerById){
          map.panTo({lat:offerById.location.latitude, lng:offerById.location.longitude});
          const allOffersNearby = [...offersNearby,offerById];
          allOffersNearby.forEach((offer) => {
            const marker = new Marker({
              lat: offer.location.latitude,
              lng: offer.location.longitude
            });
            marker
              .setIcon(offer.id === offerById.id ? currentCustomIcon : defaultCustomIcon)
              .addTo(map);
          });
        }}
    }
  }, [map, offers, selectedOffer, city, isMain, offerById, offersNearby]);

  return (
    <div
      style = {{height: `${containerHeigth}px`}} ref = {mapRef}
    >
    </div>
  );
}

export default Map;
