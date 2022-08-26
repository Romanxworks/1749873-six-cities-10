import {Link} from 'react-router-dom';
import FavoriteCard from '../favorite-card/favorite-card';
import {useAppDispatch} from '../../hooks';
import {City} from '../../types/map';
import {Offer} from '../../types/offer';
import {changeCity, getOffersByCity} from '../../store/action';

type FavoriteItemProps = {
  city:City,
  favorites: Offer[]
}

function FavoriteItem ({city, favorites}:FavoriteItemProps):JSX.Element{
  const dispatch = useAppDispatch();
  const handleClickName = () =>{
    dispatch(changeCity(city));
    dispatch(getOffersByCity(city));
  };
  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="/" onClick={handleClickName}>
            <span>{city.name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favorites.map((favorite) => (<FavoriteCard offer = {favorite} key ={favorite.id}/>))}
      </div>
    </li>
  );
}

export default FavoriteItem;
