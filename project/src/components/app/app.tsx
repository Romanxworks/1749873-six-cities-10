import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import PropertyPage from '../../pages/property-page/property-page';
import ErrorPage from '../../pages/error-page/error-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import {Offer} from '../../types/offer';
import {Review} from '../../types/review';

type AppProps = {
  offers: Offer[],
  reviews: Review[],
}

function App({offers, reviews}:AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyPage authorizationStatus = {AuthorizationStatus.Auth} offers = {offers} reviews = {reviews}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus = {AuthorizationStatus.Auth}
            >
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element = {<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
