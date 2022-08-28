import HeaderNavigation from '../header-navigation/header-navigation';
import {useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';
import Logo from '../logo/logo';
import {memo} from 'react';

function Header ():JSX.Element{
  const location = useLocation();
  const isLoginPage = location.pathname === AppRoute.Login;

  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          {!isLoginPage && <HeaderNavigation />}
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
