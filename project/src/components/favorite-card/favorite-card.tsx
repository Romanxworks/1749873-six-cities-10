import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {RATING_ADAPTER} from '../../const';
import PremiumFlag from '../premium-flag/premium-flag';
import {fetchSetFavoriteAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';

type FavoriteCardProps ={
 offer: Offer
};

function FavoriteCard ({offer}:FavoriteCardProps):JSX.Element{
  const {previewImage, isPremium, price, rating, title, type, id} = offer;
  const dispatch = useAppDispatch();
  const idForFetch = String(id);
  const handleClickFavorite = () => {
    dispatch(fetchSetFavoriteAction({id:idForFetch, status:false}));
  };

  return(
    <article className="favorites__card place-card">
      {isPremium ? <PremiumFlag /> : null}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className='place-card__bookmark-button place-card__bookmark-button--active place-card__bookmark-button--active button' type="button" onClick={handleClickFavorite}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating / RATING_ADAPTER}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;
