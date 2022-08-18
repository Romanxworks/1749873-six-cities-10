import Header from '../../components/header/header';
import CitiesCard from '../../components/cities-card/cities-card';
import Location from '../../components/location/location';
import Map from '../../components/map/map';
import {City} from '../../types/map';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity, getOffers} from '../../store/action';
import MainEmpty from '../../components/main-empty/main-empty';
import MainSort from '../../components/main-sort/main-sort';

function MainPage():JSX.Element{

  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => (state.offers));
  const offersByCity = offers.filter((offer) => offer.city.name === city.name);
  const isOffers = offersByCity.length === 0;

  const onClickCity = (cityName:City) => {
    dispatch(changeCity(cityName));
    dispatch(getOffers(cityName));
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${isOffers && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Location selectedCity = {city} onClickCity = {onClickCity} />
          </section>
        </div>
        <div className="cities">
          {isOffers ? <MainEmpty cityName={city.name}/> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersByCity.length} places to stay in {city.name}</b>
                <MainSort />
                <div className="cities__places-list places__list tabs__content">
                  {!isOffers ? offersByCity.map((offer) => (<CitiesCard offer = {offer} key = {offer.id} />)) : ''}
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  {!isOffers && <Map containerHeigth = {800}/>}
                </section>
              </div>
            </div>}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
