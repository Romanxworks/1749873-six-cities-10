import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import {useEffect} from 'react';
import ReviewsForm from '../../components/reviews-form/reviews-form';
import {AuthorizationStatus, RATING_ADAPTER, AppRoute} from '../../const';
import ReviewOffer from '../../components/review/review';
import Map from '../../components/map/map';
import CitiesCard from '../../components/cities-card/cities-card';
import PropertyGallery from '../../components/property-gallery/property-gallery';
import PropertyInsideList from '../../components/property-inside-list/property-inside-list';
import PropertyHostUser from '../../components/property-host-user/property-host-user';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {redirectToRoute, changeSelectedOffer, changeFavorites} from '../../store/action';
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

  dispatch(changeSelectedOffer(offerById));

  const restOffers = useAppSelector((state) => (state.offersNearby));
  const reviews = useAppSelector((state) => (state.reviews));

  useEffect(() => {
    dispatch(changeFavorites(offerById?.isFavorite));
  },[offerById, dispatch, id]

  );
  const isFavorite = useAppSelector((state) => (state.isFavorite));

  const handleClickFavorite = () => {
    if(isLogin){
      dispatch(changeFavorites(!isFavorite));
      const favoriteStatus = !offerById?.isFavorite;
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
          <PropertyGallery images = {offerById?.images} type = {offerById?.type} />
          <div className="property__container container">
            <div className="property__wrapper">
              {offerById?.isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offerById?.title}
                </h1>
                <button className={`property__bookmark-button ${isFavorite && 'property__bookmark-button--active'} button`} type="button" onClick = {handleClickFavorite}>
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
                <PropertyInsideList goods = {offerById?.goods}/>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <PropertyHostUser host = {offerById?.host}/>
                <div className="property__description">
                  <p className="property__text">
                    {offerById?.description}
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
            { offerById && <Map containerHeigth = {600} isMain ={false} />}
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
