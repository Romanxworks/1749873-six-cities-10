import {Link} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {AppRoute} from '../../const';
import {fetchFavoriteAction} from '../../store/api-actions';

function UserInfo():JSX.Element{
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(fetchFavoriteAction());
  };
  const favoriteCount = useAppSelector((state) => (state.favoriteCount));
  const email = useAppSelector((state) => (state.email));

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
