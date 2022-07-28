import UserInfo from '../user-info/user-info';
import {User} from '../../types/user';
import {Link} from 'react-router-dom';

type HeaderNavigationProps = {
    user:User;
    userFavoriteCount: number;
    userStatus:boolean;
}

function HeaderNavigation ({user, userFavoriteCount, userStatus}:HeaderNavigationProps):JSX.Element{
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">

        {userStatus && <UserInfo user={user} userFavoriteCount = {userFavoriteCount}/>}

        <li className="header__nav-item">
          <Link className="header__nav-link" to="/">
            {!userStatus && <div className="header__avatar-wrapper user__avatar-wrapper"></div>}
            <span className="header__signout">{userStatus ? 'Sign out' : 'Sign in'}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
