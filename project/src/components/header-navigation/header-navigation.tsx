import UserInfo from '../user-info/user-info';
import {User} from '../../types/user';
import {Link} from 'react-router-dom';

type HeaderNavigationProps = {
    user:User;
}

function HeaderNavigation ({user}:HeaderNavigationProps):JSX.Element{
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">

        {user.loginStatus && <UserInfo user = {user}/>}

        <li className="header__nav-item">
          <Link className="header__nav-link" to="/login">
            {!user.loginStatus && <div className="header__avatar-wrapper user__avatar-wrapper"></div>}
            <span className="header__signout">{user.loginStatus ? 'Sign out' : 'Sign in'}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
