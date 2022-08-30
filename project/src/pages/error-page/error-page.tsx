import Header from '../../components/header/header';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function ErrorPage():JSX.Element{
  return(
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">Page not found</b>
                <Link className="cities__status-description" to={AppRoute.Main}> Back to homepage </Link>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ErrorPage;
