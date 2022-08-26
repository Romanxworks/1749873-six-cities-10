import Header from '../../components/header/header';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import FavoriteItem from '../../components/favorite-item/favorite-item';
import FavoritesEmptyPage from '../favorites-empty-page/favorites-empty-page';
import {CITY, AppRoute} from '../../const';

function FavoritesPage():JSX.Element{
  const favoriteCount = useAppSelector((state) => (state.favoriteCount));
  const favorites = useAppSelector((state) => (state.favorites));

  if(favoriteCount === 0){
    return <FavoritesEmptyPage />;
  }
  return(
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {CITY.map((city) => {
                const favoriteByCity = favorites.filter((favorite) =>favorite.city.name === city.name);
                if(favoriteByCity.length !== 0){
                  return (<FavoriteItem city = {city} favorites = {favoriteByCity} key = {city.name}/>);
                }
                return '';
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}
export default FavoritesPage;
