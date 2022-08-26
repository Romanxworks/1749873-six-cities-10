import {Link} from 'react-router-dom';
import {useRef, FormEvent, SyntheticEvent, useEffect} from 'react';
import Header from '../../components/header/header';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus, CITY} from '../../const';
import {loginAction, fetchFavoriteAction} from '../../store/api-actions';
import {AuthData} from '../../types/user';
import {getRandomInteger} from '../../utils';
import {changeCity, redirectToRoute, getOffersByCity} from '../../store/action';


function LoginPage(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const authStatus = useAppSelector((state) => (state.authorizationStatus));
  const randomCityName = CITY[getRandomInteger(0,(CITY.length - 1))];
  const dispatch = useAppDispatch();
  useEffect(() => {
    if(authStatus === AuthorizationStatus.Auth){
      dispatch(redirectToRoute(AppRoute.Main));
    }
  },[dispatch,authStatus]);


  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
    dispatch(fetchFavoriteAction());
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: emailRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const handleCityClick = (evt:SyntheticEvent<HTMLElement>) => {
    const getRandomCity = CITY.find((city) => city.name === evt.currentTarget.innerText);
    dispatch(changeCity(getRandomCity));
    dispatch(getOffersByCity(getRandomCity));
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  ref={emailRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main} onClick={handleCityClick}>
                <span>{randomCityName.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
