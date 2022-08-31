import PremiumFlag from '../premium-flag/premium-flag';
import {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
import {RATING_ADAPTER, AppRoute} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useState, memo} from 'react';
import {redirectToRoute} from '../../store/action';
import {fetchSetFavoriteAction} from '../../store/api-actions';
import {getIsLogin} from '../../store/user-process/selectors';
import {changeOffer} from '../../store/offers-data/offers-data';

type CitiesCardProps = {
  offer: Offer;
  onClick: (offer:Offer) => void | null
};

function CitiesCard({offer, onClick}:CitiesCardProps):JSX.Element{
  const {previewImage, isPremium, price, rating, title, type, id, isFavorite} = offer;

  const [isFavoriteStatus, setFavoriteStatus] = useState(isFavorite);
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector(getIsLogin);

  const handleCardActive = () => (onClick(offer));

  const idForFetch = String(id);

  const handleClickFavorite = () => {
    if(isLogin){
      setFavoriteStatus(!isFavoriteStatus);
      const updatedIsFavorite = !isFavoriteStatus;
      dispatch(fetchSetFavoriteAction({id:idForFetch,status:updatedIsFavorite}));
    }else{
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };

  const handleClickLink = () => {
    dispatch(changeOffer(offer));
    window.scrollTo({
      top: 0
    });
  };

  return(
    <article className="cities__card place-card" onMouseEnter = {handleCardActive}>
      {isPremium && <PremiumFlag />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`} onClick = {handleClickLink} >
          <img className="place-card__image" src = {previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className= {`place-card__bookmark-button ${isFavoriteStatus && 'place-card__bookmark-button--active'} button`} type="button" onClick = {handleClickFavorite}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating / RATING_ADAPTER}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`} onClick = {handleClickLink}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default memo(CitiesCard);


