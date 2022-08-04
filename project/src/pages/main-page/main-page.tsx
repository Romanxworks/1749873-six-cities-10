import Header from '../../components/header/header';
import {Offer} from '../../types/offer';
import {useState} from 'react';
import CitiesCard from '../../components/cities-card/cities-card';
import Location from '../../components/location/location';
import Map from '../../components/map/map';
import {CITY} from '../../mocks/city';

type MainProps = {
    offers: Offer[]
}

function MainPage({offers}:MainProps):JSX.Element{
  const [sortState, setSortState] = useState(false);

  const sortClickHandler = () => {
    setSortState(!sortState);
  };

  const [selectedOffer, setSelectedOffer] = useState<Offer>();

  const onCardHover = (cardOfferId: number) => {
    const currentOffer = offers.find((offer) => offer.id === cardOfferId);

    setSelectedOffer(currentOffer);
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Location />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex= {0} onClick={sortClickHandler}>
              Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className={`places__options places__options--custom places__options--${sortState ? 'opened' : ''}`} onClick={sortClickHandler}>
                  <li className="places__option places__option--active" tabIndex={0} >Popular</li>
                  <li className="places__option" tabIndex={0} >Price: low to high</li>
                  <li className="places__option" tabIndex={0} >Price: high to low</li>
                  <li className="places__option" tabIndex={0} >Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {offers.map((offer) => (<CitiesCard offer={offer} onCardHover ={onCardHover} key={offer.id} />))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city = {CITY} offers = {offers} containerHeigth = {800} selectedOffer = {selectedOffer}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
