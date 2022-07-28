import {Link} from 'react-router-dom';
import {User} from '../../types/user';

type userInfoProps = {
    user: User;
    userFavoriteCount: number;
}

function UserInfo({user, userFavoriteCount}:userInfoProps):JSX.Element{
  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to ="/">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">{user.email}</span>
        <span className="header__favorite-count">{userFavoriteCount}</span>
      </Link>
    </li>
  );
}

export default UserInfo;
