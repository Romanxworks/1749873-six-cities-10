type userInfoProps = {
    userName: string;
    userFavoriteCount: number;
}

function UserInfo({userName, userFavoriteCount}:userInfoProps):JSX.Element{
  return (
    <li className="header__nav-item user">
      <a className="header__nav-link header__nav-link--profile" href="/">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">{userName}</span>
        <span className="header__favorite-count">{userFavoriteCount}</span>
      </a>
    </li>
  );
}

export default UserInfo;
