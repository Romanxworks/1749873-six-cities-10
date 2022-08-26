import {Link} from 'react-router-dom';
import {CITY} from '../../const';
import {City} from '../../types/map';
import {useAppDispatch} from '../../hooks';
import {changeCity, getOffersByCity} from '../../store/action';

type LocationProps = {
  selectedCity: City,
}

function Location ({selectedCity}:LocationProps): JSX.Element{
  const dispatch = useAppDispatch();

  const onClickCity = (city:City) => {
    dispatch(changeCity(city));
    dispatch(getOffersByCity(city));
  };

  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITY.map((city) => (
            <li className="locations__item" key = {city.name} onClick = {()=>onClickCity(city)}>
              <Link className={`locations__item-link tabs__item ${selectedCity.name === city.name ? 'tabs__item--active' : '' }`} to ="/">
                <span >{city.name}</span>
              </Link>
            </li>) )}
        </ul>
      </section>
    </div>
  );
}

export default Location;
