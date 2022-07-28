import HeaderNavigation from '../header-navigation/header-navigation';
import {Link} from 'react-router-dom';

const user = {
  avatarUrl: 'img/1.png',
  email: 'stocks.conner@gmail.com',
  id: 1,
  isPro: false,
  name: 'Willy Stocks',
  token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20='
};

type HeaderProps = {
    userStatus:boolean,
}

function Header ({userStatus}:HeaderProps):JSX.Element{
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <HeaderNavigation user = {user} userFavoriteCount={3} userStatus={userStatus}/>
        </div>
      </div>
    </header>
  );
}

export default Header;
