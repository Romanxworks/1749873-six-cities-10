import UserInfo from '../user-info/user-info';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks';


function HeaderNavigation ():JSX.Element{
  const isLogin = useAppSelector((state) => state.authorizationStatus) === 'AUTH';
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">

        {isLogin && <UserInfo />}

        <li className="header__nav-item">
          <Link className="header__nav-link" to="/login">
            {!isLogin && <div className="header__avatar-wrapper user__avatar-wrapper"></div>}
            <span className="header__signout">{isLogin ? 'Sign out' : 'Sign in'}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
