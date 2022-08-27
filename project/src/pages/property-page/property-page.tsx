import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import {useEffect, useState} from 'react';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import {AuthorizationStatus, RATING_ADAPTER, AppRoute} from '../../const';
import ReviewOffer from '../../components/review/review';
import Map from '../../components/map/map';
import CitiesCard from '../../components/cities-card/cities-card';
import PropertyGallery from '../../components/property-gallery/property-gallery';
import PropertyInsideList from '../../components/property-inside-list/property-inside-list';
import PropertyHostUser from '../../components/property-host-user/property-host-user';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {redirectToRoute, changeSelectedOffer} from '../../store/action';
import {
  fetchOfferAction,
  fetchOffersNearbyAction,
  fetchSetFavoriteAction,
} from '../../store/api-actions';

function PropertyPage():JSX.Element {
  const params = useParams();
  const id = String(params.id);
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => (state.authorizationStatus));
  const isLogin = status === AuthorizationStatus.Auth;

  useEffect(()=>{
    dispatch(fetchOfferAction(id));
    dispatch(fetchOffersNearbyAction(id));

  },[id, dispatch]);

  const offerById = useAppSelector((state) => (state.offer));
  const restOffers = useAppSelector((state) => (state.offersNearby));
  const reviews = useAppSelector((state) => (state.reviews));
  const {images, isPremium, price, rating, title, type, bedrooms, maxAdults, goods, host, description, isFavorite} = offerById;

  dispatch(changeSelectedOffer(offerById));////////
  const [isFavoriteState, setFavoriteState] = useState(isFavorite);

  const handleClickFavorite = () => {
    if(isLogin){
      setFavoriteState(!isFavoriteState);
      const favoriteStatus = !isFavorite;
      dispatch(fetchSetFavoriteAction({id,status:favoriteStatus}));
    }else{
      dispatch(redirectToRoute(AppRoute.Login));
    }

  };
  return(
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <PropertyGallery images = {images} type = {type} />
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button ${isFavoriteState && 'property__bookmark-button--active'} button`} type="button" onClick = {handleClickFavorite}>
                  <svg className="property__bookmark-icon place-card__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating / RATING_ADAPTER}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                 Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <PropertyInsideList goods = {goods}/>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <PropertyHostUser host = {host}/>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

                <ReviewOffer id = {id} />

                {status === AuthorizationStatus.Auth ? <ReviewsForm id = {id} /> : null}

              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map containerHeigth = {600} isMain ={false} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {restOffers.map((offer) => (<CitiesCard offer = {offer} key = {offer.id} />))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyPage;
