import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import PropertyPage from '../../pages/property-page/property-page';
import ErrorPage from '../../pages/error-page/error-page';
import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks';
import LoadingPage from '../../pages/loading-page/loading-page';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (authorizationStatus === AuthorizationStatus.Unknown || isDataLoaded) {
    return (
      <LoadingPage />
    );
  }
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus = {authorizationStatus}
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
    </HistoryRouter>
  );
}

export default App;
