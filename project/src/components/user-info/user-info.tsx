import {Link} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {AppRoute} from '../../const';
import {fetchFavoriteAction} from '../../store/api-actions';
import {getFavoriteCount} from '../../store/offers-data/selectors';
import {getUserEmail} from '../../store/user-process/selectors';

function UserInfo():JSX.Element{
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(fetchFavoriteAction());
  };
  const favoriteCount = useAppSelector(getFavoriteCount);
  const email = useAppSelector(getUserEmail);

  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile"
        to ={AppRoute.Favorites}
        onClick = {handleClick}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">{email}</span>
        <span className="header__favorite-count">{favoriteCount}</span>
      </Link>
    </li>
  );
}

export default UserInfo;
