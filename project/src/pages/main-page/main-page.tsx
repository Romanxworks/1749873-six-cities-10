import Header from '../../components/header/header';
import CitiesCard from '../../components/cities-card/cities-card';
import Location from '../../components/location/location';
import Map from '../../components/map/map';
import {useAppSelector} from '../../hooks';
import MainEmpty from '../../components/main-empty/main-empty';
import MainSort from '../../components/main-sort/main-sort';
import {useCallback, useState} from 'react';
import {Offer} from '../../types/offer';

function MainPage():JSX.Element{

  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => (state.offersByCity));
  const [selectedOffer, setSelectedOffer] = useState<Offer>();
  const isOffers = offers.length === 0;

  const onClickCity = useCallback((offer:Offer) => {
    setSelectedOffer(offer);
  },[]);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${isOffers && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <Location />
        <div className="cities">
          {isOffers ? <MainEmpty cityName={city.name}/> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {city.name}</b>
                <MainSort />
                <div className="cities__places-list places__list tabs__content">
                  {!isOffers && offers.map((offer) => (<CitiesCard offer = {offer} onClick = {onClickCity} key = {offer.id} />))}
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  {!isOffers && <Map containerHeigth = {800} selectedOffer = {selectedOffer} isMain/>}
                </section>
              </div>
            </div>}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
