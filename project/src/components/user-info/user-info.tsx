import {Link} from 'react-router-dom';
import {User} from '../../types/user';
import {useAppSelector} from '../../hooks';

type userInfoProps = {
    user: User;
}

function UserInfo({user}:userInfoProps):JSX.Element{
  const favoriteCount = useAppSelector((state) => (state.favoriteCount));
  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to ="/favorites">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">{user.email}</span>
        <span className="header__favorite-count">{favoriteCount}</span>
      </Link>
    </li>
  );
}

export default UserInfo;
