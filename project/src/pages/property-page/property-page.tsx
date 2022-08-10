import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import {AuthorizationStatus, RATING_ADAPTER} from '../../const';
import {Offer} from '../../types/offer';
import ReviewOffer from '../../components/review/review';
import {useState, useEffect} from 'react';
import Map from '../../components/map/map';
import CitiesCard from '../../components/cities-card/cities-card';
import {useAppSelector} from '../../hooks';


type PropertyPageProps = {
  authorizationStatus: AuthorizationStatus;
}

function PropertyPage({authorizationStatus}:PropertyPageProps):JSX.Element {
  const params = useParams();
  const offers = useAppSelector((state) => (state.offers));
  const reviews = useAppSelector((state) => (state.reviews));
  const offerById = offers.find((offer) => offer.id === Number(params.id));
  const restOffers = offers.filter((offer) => offer.id !== Number(params.id));

  const [isFavorite, setFavorite] = useState(offerById?.isFavorite);
  useEffect(() => {
    setFavorite(offerById?.isFavorite);
  }, [offerById?.isFavorite]);

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(offerById);

  const onCardHover = (cardOfferId: number) => {
    const currentOffer = offers.find((offer) => offer.id === cardOfferId);

    setSelectedOffer(currentOffer);
  };

  return(
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offerById?.images.map((image, id) => {
                const keyValue = `o-${image}-${id}`;
                return(
                  <div key={keyValue} className="property__image-wrapper">
                    <img className="property__image" src = {image} alt = {offerById.type}/>
                  </div>
                );
              })}

            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offerById?.isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offerById?.title}
                </h1>
                <button className={`property__bookmark-button ${isFavorite && 'property__bookmark-button--active'} button`} type="button" onClick = {() => setFavorite(!isFavorite)}>
                  <svg className="property__bookmark-icon place-card__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${offerById ? offerById.rating / RATING_ADAPTER : null}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offerById?.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offerById?.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offerById?.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                 Max {offerById?.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offerById?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offerById?.features.map((feature) => {
                    const keyValue = `o-${feature}`;
                    return(

                      <li key={keyValue} className="property__inside-item">
                        {feature}
                      </li>
                    );
                  })}

                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src = {offerById?.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {offerById?.host.name}
                  </span>
                  {offerById?.host.isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offerById?.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerById?.reviews.length}</span></h2>
                <ul className="reviews__list">
                  {offerById?.reviews.map((review)=>(<ReviewOffer id = {review} reviews = {reviews} key={review} />))}
                </ul>
                {authorizationStatus === AuthorizationStatus.Auth ? <ReviewsForm /> : null}

              </section>
            </div>
          </div>
          <section className="property__map map">
            { offerById && <Map selectedOffer = {selectedOffer} containerHeigth = {600}/>}
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {restOffers.map((offer) => (<CitiesCard offer = {offer} onCardHover = {onCardHover} key = {offer.id} />))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyPage;
