import HeaderNavigation from '../header-navigation/header-navigation';
import {Link, useLocation} from 'react-router-dom';
import {AppRoute, CITY} from '../../const';
import {useAppDispatch} from '../../hooks';
import {changeCity, getOffersByCity} from '../../store/action';
// import {fetchOffersAction} from '../../store/api-actions';

function Header ():JSX.Element{
  const location = useLocation();
  const isLoginPage = location.pathname === AppRoute.Login;
  const dispatch = useAppDispatch();
  const handleClickMain = () => {
    // dispatch(fetchOffersAction());
    dispatch(changeCity(CITY[0]));
    dispatch(getOffersByCity(CITY[0]));
  };
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}
              onClick = {handleClickMain}
            >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {!isLoginPage && <HeaderNavigation />}
        </div>
      </div>
    </header>
  );
}

export default Header;
