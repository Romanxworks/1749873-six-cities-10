import PremiumFlag from '../premium-flag/premium-flag';
import {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
import {RATING_ADAPTER} from '../../const';
import {useState} from 'react';


function CitiesCard(offer:Offer):JSX.Element{
  const {images, premium, price, rating, title, type, id, favorite} = offer;
  const [cardState] = useState(id);

  const cardActiveHandle = () => (cardState);


  return(
    <article className="cities__card place-card" onMouseOver={cardActiveHandle}>
      {premium ? <PremiumFlag /> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${id}`} >
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className= {`place-card__bookmark-button ${favorite && 'place-card__bookmark-button--active'} button`} type="button">
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
          <Link to={`offer/${id}`} >{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CitiesCard;
