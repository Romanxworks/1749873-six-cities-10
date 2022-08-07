import {Link} from 'react-router-dom';
import {CITY} from '../../mocks/city';
import {City} from '../../types/map';

type LocationProps = {
  selectedCity: City,
  onClickCity: (cityName:City) => void;
}

function Location ({selectedCity, onClickCity}:LocationProps): JSX.Element{

  return(
    <ul className="locations__list tabs__list">
      {CITY.map((city) => (
        <li className="locations__item" key = {city.name} onClick = {()=>onClickCity(city)}>
          <Link className={`locations__item-link tabs__item ${selectedCity.name === city.name ? 'tabs__item--active' : '' }`} to ="/">
            <span >{city.name}</span>
          </Link>
        </li>) )}

    </ul>
  );
}

export default Location;
