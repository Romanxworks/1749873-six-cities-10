import {Link} from 'react-router-dom';
import {User} from '../../types/user';

type userInfoProps = {
    user: User;
}

function UserInfo({user}:userInfoProps):JSX.Element{
  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to ="/favorites">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">{user.email}</span>
        <span className="header__favorite-count">{user.favoritePoint}</span>
      </Link>
    </li>
  );
}

export default UserInfo;
