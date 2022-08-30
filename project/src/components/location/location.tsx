import {Link} from 'react-router-dom';
import {CITIES} from '../../const';
import {City} from '../../types/map';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/main-process/main-process';
import {memo} from 'react';
import {getCity} from '../../store/main-process/selectors';

function Location (): JSX.Element{
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector(getCity);

  const onClickCity = (city:City) => {
    dispatch(changeCity(city));
  };

  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
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

export default memo(Location);
