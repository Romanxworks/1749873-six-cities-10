import {Link} from 'react-router-dom';
import {useRef, FormEvent, SyntheticEvent, useEffect} from 'react';
import Header from '../../components/header/header';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute, CITIES} from '../../const';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/user';
import {getRandomInteger} from '../../utils';
import {changeCity} from '../../store/main-process/main-process';
import {getIsLogin} from '../../store/user-process/selectors';
import {redirectToRoute} from '../../store/action';


function LoginPage(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const authStatus = useAppSelector(getIsLogin);
  const randomCityName = CITIES[getRandomInteger(0,(CITIES.length - 1))];
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(authStatus){
      dispatch(redirectToRoute(AppRoute.Main));
    }
  },[dispatch,authStatus]);


  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
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
    const getRandomCity = CITIES.find((city) => city.name === evt.currentTarget.innerText);
    if(getRandomCity){
      dispatch(changeCity(getRandomCity));
    }
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
                  pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
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
                  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$"
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
