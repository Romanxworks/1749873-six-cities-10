import UserInfo from '../user-info/user-info';

type HeaderNavigationProps = {
    userName:string;
    userFavoriteCount: number;
    userStatus:boolean;
}

function HeaderNavigation ({userName, userFavoriteCount, userStatus}:HeaderNavigationProps):JSX.Element{
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">

        {userStatus ? <UserInfo userName={userName} userFavoriteCount = {userFavoriteCount}/> : null}

        <li className="header__nav-item">
          <a className="header__nav-link" href="/">
            {userStatus ? null : <div className="header__avatar-wrapper user__avatar-wrapper"></div>}
            <span className="header__signout">{userStatus ? 'Sign out' : 'Sign in'}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
