import UserInfo from '../user-info/user-info';
import {Link} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {AppRoute} from '../../const';
import {logoutAction} from '../../store/api-actions';
import {getIsLogin} from '../../store/user-process/selectors';

function HeaderNavigation ():JSX.Element{
  const isLogin = useAppSelector(getIsLogin);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if(isLogin){
      dispatch(logoutAction());
    }
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">

        {isLogin && <UserInfo />}

        <li className="header__nav-item">
          <Link className="header__nav-link" to={AppRoute.Login} onClick={handleClick}>
            {!isLogin && <div className="header__avatar-wrapper user__avatar-wrapper"></div>}
            <span className="header__signout">{isLogin ? 'Sign out' : 'Sign in'}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
